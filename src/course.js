import { initAbc } from "@music-ui/abc";
import { Piano } from "@music-ui/piano";
import "abcjs/abcjs-audio.css";
import "@music-ui/piano/dist/styles/index.css";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  document.querySelectorAll("[data-piano]").forEach(initPiano);

  await Promise.all(
    [...document.querySelectorAll("[data-abc]")].map(async (element, index) => {
      const content = element.querySelector("code").textContent;
      const staffElement = document.createElement("div");
      staffElement.classList.add("staff");
      const audioControlsElement = document.createElement("div");
      audioControlsElement.classList.add("audio-controls");

      element.append(staffElement);
      element.append(audioControlsElement);

      const hidePlayer = Boolean(element.dataset.hidePlayer);
      const hidePiano = Boolean(element.dataset.hidePiano);

      let piano;

      if (!hidePiano) {
        const pianoElement = document.createElement("div");
        pianoElement.dataset.piano = true;
        element.append(pianoElement);
        piano = initPiano(pianoElement);
      }

      await initAbc({
        id: element.dataset.id || String(index + 1),
        content,
        staffElement,
        audioControlsElement,
        hidePlayer,
        onNotesChange: (notes) => {
          if (!piano) {
            return;
          }
          piano.setNotes(notes);
        },
      });
    }),
  );
}

function initPiano(el) {
  return new Piano({
    el,
    octaves: 5,
    startOctave: 2,
  })
    .render()
    .setNotes(parsePianoData(el.querySelector("code")?.textContent.trim()));
}

function parsePianoData(data) {
  return !data
    ? []
    : Object.values(
        data.split("\n").reduce(
          (memo, line) => {
            const match = line.match(/\w+:/);
            if (match) {
              const [key, notes] = line.split(":");
              return {
                ...memo,
                [key]: notes.trim().split(" "),
              };
            }
            return {
              ...memo,
              notes: line.trim().split(" "),
            };
          },
          { _notes: [] },
        ),
      )
        .filter((x) => x.length)
        .map((x) => x.join(" "))
        .join(", ");
}

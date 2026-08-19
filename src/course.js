import { initABCScoreWithPlayer } from "@music-ui/abc";
import { Piano } from "@music-ui/piano";
import { Player, getAbcScore } from "@music-ui/core";

window.addEventListener("DOMContentLoaded", init);

function init() {
  const player = new Player();
  document.querySelectorAll("[data-piano]").forEach(initPiano);
  initABCScoreWithPlayer({ selection: "[data-abc]", player });
}

function parseElementOptions(element, index) {
  return {
    id: element.dataset.id || String(index + 1),
    hidePlayer: Boolean(element.dataset.hidePlayer),
    hidePiano: Boolean(element.dataset.hidePiano),
    bpm: Number(element.dataset.bpm) || 120,
    content: element.querySelector("code").textContent,
  };
}

function initPiano(element) {
  return new Piano({
    element,
    octaves: 5,
    startOctave: 2,
  })
    .render()
    .setNotes(
      parsePianoData(element.querySelector("code")?.textContent.trim()),
    );
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

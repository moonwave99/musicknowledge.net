import { initAbc } from "@music-ui/abc";
import { Piano } from "@music-ui/piano";
import { Player, getAbcScore } from "@music-ui/core";
import "abcjs/abcjs-audio.css";
import "@music-ui/piano/dist/styles/index.css";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  const player = new Player();

  document.querySelectorAll("[data-piano]").forEach(initPiano);

  document.querySelectorAll("[data-abc]").forEach((element, index) => {
    const { id, content, hidePiano, hidePlayer, bpm } = parseElementOptions(
      element,
      index,
    );

    const staffElement = document.createElement("div");
    staffElement.classList.add("staff");
    element.append(staffElement);

    initAbc({ id, content, staffElement });

    const score = getAbcScore({ id, bpm, content });

    if (!hidePlayer) {
      const { play, pause, stop } = createControls(element, {
        play: () => {
          player.setScore(score);
          player.play();
          play.disabled = true;
          pause.disabled = false;
          stop.disabled = false;
        },
        pause: () => {
          player.pause();
          play.disabled = false;
          pause.disabled = true;
          stop.disabled = false;
        },
        stop: () => {
          player.stop();
          play.disabled = false;
          pause.disabled = true;
          stop.disabled = true;
        },
      });
    }

    if (hidePiano) {
      return;
    }

    const pianoElement = document.createElement("div");
    pianoElement.dataset.piano = "";
    element.append(pianoElement);
    const piano = initPiano(pianoElement);

    player.on("playing", ({ playedNotes, activeId }) => {
      if (activeId !== score.id) {
        piano.setNotes([]);
        return;
      }
      piano.setNotes(playedNotes);
    });

    player.on("stop", () => {
      piano.setNotes([]);
    });
  });
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

function createControls(element, handlers = {}) {
  const controls = document.createElement("div");
  controls.classList.add("controls");

  const buttons = {};

  Object.entries(handlers).forEach(([name, handler]) => {
    const button = document.createElement("button");
    button.classList.add("control-button", `${name}-button`);
    button.addEventListener("click", handler);
    button.textContent = name;
    controls.append(button);
    button.disabled = name !== "play";
    buttons[name] = button;
  });

  element.append(controls);

  return buttons;
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

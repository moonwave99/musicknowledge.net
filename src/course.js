import { initABCScoreWithPlayer } from "@music-ui/abc";
import { Piano } from "@music-ui/piano";
import {
  playerFactory,
  getAbcScore,
  extractElementOptions,
} from "@music-ui/core";

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-piano]").forEach(initPiano);
  initABCScoreWithPlayer({ selection: "[data-abc]", player: playerFactory() });
});

const DEFAULT_PIANO_OPTIONS = {
  octaves: 5,
  startOctave: 2,
  showOctaves: false,
  withFinalC: true,
};

function initPiano(element) {
  return new Piano({
    element,
    ...DEFAULT_PIANO_OPTIONS,
    ...extractElementOptions(element, DEFAULT_PIANO_OPTIONS),
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

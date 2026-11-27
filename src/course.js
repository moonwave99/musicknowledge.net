import { initABCScoreWithPlayer } from "@music-ui/abc";
import { Piano } from "@music-ui/piano";
import { playerFactory, extractElementOptions } from "@music-ui/core";
import { initOscillatorWithOscilloscope, OscPlayer } from "@music-ui/osc";

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("table").forEach(initTable);
  document.querySelectorAll(".oscillator-widget").forEach((selection) => {
    const context = new AudioContext();
    const analyzer = new AnalyserNode(context, {
      smoothingTimeConstant: 1,
      fftSize: 2048,
    });
    const oscPlayer = new OscPlayer({ context, analyzer });
    initOscillatorWithOscilloscope({
      player: oscPlayer,
      selection,
    });
  });

  document.querySelectorAll("[data-piano]").forEach(initPiano);
  const selection = document.querySelectorAll("[data-abc]");
  if (!selection.length) {
    return;
  }
  initABCScoreWithPlayer({
    selection,
    player: playerFactory(),
    abcOptions: {
      responsive: null,
    },
  });
  selection.forEach((el) => {
    const title = el.dataset.title;
    if (!title) {
      return;
    }
    el.querySelector("figcaption").innerHTML = title;
  });
});

function initTable(el) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("table-wrapper");
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}

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

import { Fretboard } from "@music-ui/fretboard";

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-chord]").forEach((element) => {
    const fretboard = new Fretboard({
      element,
      width: 300,
      height: 200,
      bottomPadding: 5,
      paddingLeft: 16,
      paddingRight: 2,
      scaleFrets: false,
      stringWidth: 2,
      fretWidth: 2,
      fretCount: element.dataset.fretCount || 3,
      dotSize: 25,
      dotStrokeWidth: 3,
      fretNumbersMargin: 30,
      positionSize: 25,
      showFretNumbers: element.dataset.showFretNumbers,
      positionText: ({ string }) => fingers[string - 1],
    });

    const { chord, fingers: _fingers, title: _title } = element.dataset;
    const fingers = _fingers.split("").reverse();

    fretboard.renderChord({
      input: chord,
      chordName: _title,
      includeOpenStrings: true,
    });

    fretboard.style({
      fill: ({ fret }) => (fret === 0 ? "white" : "#ff9505"),
    });

    const caption = document.createElement("figcaption");
    caption.textContent = chord;
    element.append(caption);

    const title = document.createElement("h3");
    title.textContent = _title;
    element.prepend(title);
  });
});

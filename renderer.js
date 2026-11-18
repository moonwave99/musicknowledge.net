function image({ text, href }) {
  return `<figure>
      <img loading="lazy" src="${href}" alt="${text}"/>
      <figcaption>${text}</figcaption>
    </figure>`;
}

function code({ lang, text }) {
  const tokens = lang.match(/(?:[^\s"]+|"[^"]*")+/g);
  if (tokens.includes("abc")) {
    return `<figure class="abc-score" ${tokens.map((x) => `data-${x}`).join(" ")}>
      <code class="content">${text}</code>
      <header>
        <figcaption></figcaption>
        <div class="controls"></div>
      </header>
      <div class="staff-wrapper">
        <div class="staff"></div>
      </div>
    </figure>`;
  }
  if (tokens.includes("piano")) {
    return `<div class="piano" ${tokens.map((x) => `data-${x}`).join(" ")}>
      <code class="content">${text}</code>
    </div>`;
  }
  return `<pre><code>${content}</code></pre>`;
}

export function getRenderer() {
  return {
    image,
    code,
  };
}

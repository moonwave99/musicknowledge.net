function image({ text, href }) {
  return `<figure>
      <img loading="lazy" src="${href}" alt="${text}"/>
      <figcaption>${text}</figcaption>
    </figure>`;
}

function code({ lang, text }) {
  const tokens = lang.split(" ");
  if (tokens.includes("abc")) {
    return `<div class="abc-score" ${tokens.map((x) => `data-${x}`).join(" ")}>
      <code class="content">${text}</code>
      <header>
        <span class="title"></span>
        <div class="controls"></div>
      </header>
      <div class="staff-wrapper">
        <div class="staff"></div>
      </div>
    </div>`;
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

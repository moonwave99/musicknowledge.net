function paragraph(token) {
  if (token.startsWith("<figure")) {
    return token;
  }
  return `<p>${token}</p>`;
}

function image(href, _, text) {
  return `<figure>
      <img loading="lazy" src="${href}" alt="${text}"/>
      <figcaption>${text}</figcaption>
    </figure>`;
}

function code(content, language) {
  const tokens = language.split(" ");
  if (tokens.includes("abc")) {
    return `<div ${tokens.map((x) => `data-${x}`).join(" ")}>
      <code>
${content}
      </code>
    </div>`;
  }
  return `<pre><code>${content}</code></pre>`;
}

export function getRenderer() {
  return {
    paragraph,
    image,
    code,
  };
}

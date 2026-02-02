function paragraph(token) {
  if (token.startsWith("<figure")) {
    return token;
  }
  return `<p>${token}</p>`;
}

function image(href, title, text) {
  return `<figure>
      <img loading="lazy" src="${href}" alt="${text}"/>
      <figcaption>${text}</figcaption>
    </figure>`;
}

export function getRenderer() {
  return {
    paragraph,
    image,
  };
}

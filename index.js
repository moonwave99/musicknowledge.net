import path from "node:path";
import _ from "lodash";
import { load, render } from "@moonwave99/goffre";
import pkg from "./package.json" with { type: "json" };

const { json, pages } = await load();

const url =
  process.env.NODE_ENV === "dev"
    ? `http://localhost:${process.env.PORT || 1234}`
    : process.env.URL || pkg.homepage;

const thisYear = new Date().getFullYear();

const helpers = {
  translate,
  getUrl: (slug, context) =>
    [context.data.root.url, slug].join("/").replace(/index$/, ""),
  getNavClass: (slug, context) =>
    context.data.root.slug.startsWith(slug) ? "active" : "",
  formatDate: (date, language = defaultLanguage) =>
    new Date(date).toLocaleDateString(`${language}-${language.toUpperCase()}`, {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
};

const renderer = {
  paragraph: (token) => {
    if (token.startsWith("<figure")) {
      return token;
    }
    return `<p>${token}</p>`;
  },
};

function translate(key, language = "en") {
  return (
    _.get(json.labels, `${language}.${key}`) ||
    _.get(json.labels, `common.${key}`) ||
    `${language}.${key}`
  );
}

const lessons = pages
  .filter((x) => x.slug.startsWith("course/"))
  .toSorted((a, b) => (a.index > b.index ? 1 : -1));

await render({
  buildPath: path.join(process.cwd(), "output"),
  domain: url,
  pages: [
    ...pages.map((page) => ({
      sitemap: {
        changefreq: "monthly",
        priority: 0.8,
      },
      url,
      id: page.slug,
      language: "en",
      thisYear,
      lessons,
      ...json,
      ...page,
    })),
  ],
  sitemap: {
    generate: true,
  },
  handlebars: {
    helpers,
  },
  markdown: {
    renderer,
  },
});

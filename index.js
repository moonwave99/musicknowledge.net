import path from "node:path";
import _ from "lodash";
import { load, render } from "@moonwave99/goffre";
import pkg from "./package.json" with { type: "json" };

const { json, pages } = await load();

const url =
  process.env.NODE_ENV === "dev"
    ? "http://localhost:1234"
    : process.env.URL || pkg.homepage;

const helpers = {
  translate,
  getUrl: (slug, context) =>
    [context.data.root.url, slug].join("/").replace(/index$/, ""),
  formatDate: (date, language = defaultLanguage) =>
    new Date(date).toLocaleDateString(`${language}-${language.toUpperCase()}`, {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
};

function translate(key, language = "en") {
  return (
    _.get(json.labels, `${language}.${key}`) ||
    _.get(json.labels, `common.${key}`) ||
    `${language}.${key}`
  );
}

await render({
  buildPath: path.join(process.cwd(), "output"),
  domain: url,
  pages: [
    ...pages.map((page) => {
      return {
        sitemap: {
          changefreq: "monthly",
          priority: 0.8,
        },
        url,
        language: "en",
        ...json,
        ...page,
      };
    }),
  ],
  sitemap: {
    generate: true,
  },
  handlebars: {
    helpers,
  },
});

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
    slug == context.data.root.slug ? "active" : "",
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
        id: page.slug,
        language: "en",
        thisYear,
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

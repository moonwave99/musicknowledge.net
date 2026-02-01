import _ from "lodash";

function formatDate({ hash }) {
  const { date, format } = hash;
  if (format == "timestamp") {
    return new Date(date).toISOString().split("T").at(0);
  }
  return new Date(date).toLocaleDateString("en-EN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getUrl(slug, context) {
  return [context.data.root.url, slug].join("/").replace(/index$/, "");
}

function getNavClass(slug, context) {
  return context.data.root.slug.startsWith(slug) ? "active" : "";
}

function translate(labels) {
  return (key, language = "en") =>
    _.get(labels, `${language}.${key}`) ||
    _.get(labels, `common.${key}`) ||
    `${language}.${key}`;
}

function isHomepage(context) {
  if (context.data.root.slug !== "index") {
    return;
  }
  return context.fn(this);
}

export function getHelpers({ labels }) {
  return {
    formatDate,
    getUrl,
    getNavClass,
    isHomepage,
    translate: translate(labels),
  };
}

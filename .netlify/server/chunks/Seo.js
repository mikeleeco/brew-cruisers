import { c as create_ssr_component, e as escape, d as add_attribute } from "./ssr.js";
const ContainerLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex w-full justify-center p-5 sm:px-20">${slots.column ? slots.column({}) : ``}</div> <div class="w-full p-5">${slots["main-panel"] ? slots["main-panel"]({}) : ``}</div>`;
});
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Brew Cruisers" } = $$props;
  let { description = "A Brewers bike ride." } = $$props;
  let { keywords = "bicycles, advocacy, health, group rides, community" } = $$props;
  let { image = "https://www.brewcruisers.netlify.com/img/logo.png" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `${$$result.head += `<!-- HEAD_svelte-1g45jc_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="twitter:card" content="summary_large_image"><meta name="twitter:creator" content="@mikeleeco"><meta name="twitter:image"${add_attribute("content", image, 0)}><meta name="twitter:title"${add_attribute("content", title, 0)}><meta name="twitter:description"${add_attribute("content", description, 0)}><meta name="title" property="og:title"${add_attribute("content", title, 0)}><meta name="description" property="og:description"${add_attribute("content", description, 0)}><meta name="image" property="og:image"${add_attribute("content", image, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><meta name="topic"${add_attribute("content", keywords, 0)}><meta name="language" content="EN"><meta name="robots" content="index, follow"><meta name="abstract"${add_attribute("content", description, 0)}><meta name="summary"${add_attribute("content", description, 0)}><meta name="author" content="Mike Lee"><meta name="url" content="https://www.brewcruisers.netlify.com"><!-- HEAD_svelte-1g45jc_END -->`, ""}`;
});
export {
  ContainerLayout as C,
  Seo as S
};

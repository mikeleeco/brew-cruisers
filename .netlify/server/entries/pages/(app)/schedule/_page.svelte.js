import { c as create_ssr_component, v as validate_component, b as each, d as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { g as games } from "../../../../chunks/games.js";
import { S as Seo, C as ContainerLayout } from "../../../../chunks/Seo.js";
import { I as Icon } from "../../../../chunks/Icon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Brew Cruisers Schedule" }, {}, {})} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
    column: () => {
      return `<div slot="column"><h1 data-svelte-h="svelte-ahf3hx">Schedule</h1> <ul class="">${each(games, (item) => {
        return `<li${add_attribute("class", `font-semibold py-2`, 0)}><span class="icon flex flex-row gap-2">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "mdi:baseball-diamond-outline",
            width: "30",
            height: "30"
          },
          {},
          {}
        )} <p class="text-lg"><span${add_attribute("class", `underline decoration-accent`, 0)}>${escape(item.name)}</span>, ${escape(item.date)} @ ${escape(item.time)}</p></span> </li>`;
      })}</ul></div>`;
    }
  })}`;
});
export {
  Page as default
};

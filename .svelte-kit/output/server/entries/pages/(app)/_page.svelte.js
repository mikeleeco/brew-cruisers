import { c as create_ssr_component, v as validate_component, b as each, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { S as Seo, C as ContainerLayout } from "../../../chunks/Seo.js";
import { g as games } from "../../../chunks/games.js";
import { I as Icon } from "../../../chunks/Icon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render($$result, {}, {}, {})} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
    column: () => {
      return `<div slot="column"><h1 data-svelte-h="svelte-ea3fqt">Milwaukee Brew Cruisers Bike Ride</h1> <h2 class="subtitle pb-5" data-svelte-h="svelte-1tp4glq">A monthly ride to enjoy live baseball and advocate for bicycle
			accommodations in Milwaukee and the stadium district.</h2> <p data-svelte-h="svelte-1hwqwu5">Visit
			<a href="/faq">FAQ</a> to learn more.</p> <div><h2 class="text-primary font-serif pt-10" data-svelte-h="svelte-1wzojrj">Ride Schedule</h2> <ul class="">${each(games, (item) => {
        return `<li${add_attribute("class", `font-semibold p-2`, 0)}><span class="icon flex flex-row gap-2">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "mdi:baseball-diamond-outline",
            width: "30",
            height: "30"
          },
          {},
          {}
        )} <p class="text-lg"><span${add_attribute("class", `underline decoration-accent`, 0)}>${escape(item.name)}</span>, ${escape(item.date)} @ ${escape(item.time)} </p></span> </li>`;
      })}</ul></div></div>`;
    }
  })}`;
});
export {
  Page as default
};

import { c as create_ssr_component, b as each, d as add_attribute, e as escape, a as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { w as writable } from "../../../chunks/index.js";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { links: links2 } = $$props;
  let { collapsible = false } = $$props;
  let { showLinksOnDesktop } = $$props;
  if ($$props.links === void 0 && $$bindings.links && links2 !== void 0)
    $$bindings.links(links2);
  if ($$props.collapsible === void 0 && $$bindings.collapsible && collapsible !== void 0)
    $$bindings.collapsible(collapsible);
  if ($$props.showLinksOnDesktop === void 0 && $$bindings.showLinksOnDesktop && showLinksOnDesktop !== void 0)
    $$bindings.showLinksOnDesktop(showLinksOnDesktop);
  return `<div class="navbar bg-primary h-20"><div class="navbar-start">${slots.left ? slots.left({}) : ``} ${collapsible ? `<div class="dropdown"><label tabindex="-1" for="nav-collapsible" class="btn base btn-ghost" data-svelte-h="svelte-1l29pqv"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="nav-collapsible"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label> <ul tabindex="-1" class="dropdown-content mt-3 z-[1] p-2 shadow bg-info border-2 border-primary rounded w-48">${links2 ? `${each(links2, (item) => {
    return `<a class=""${add_attribute("href", item.path, 0)}><li class="font-semibold text-sm item px-5 py-2 hover:bg-[--hover] hover:border-accent border-2 border-transparent">${escape(item.name)} </li></a>`;
  })}` : ``}</ul></div>` : ``}  ${slots["left-logo"] ? slots["left-logo"]({}) : ``}</div>  <div class="navbar-center hidden h-16 sm:flex">${slots.center ? slots.center({}) : ``} ${links2 ? `${showLinksOnDesktop ? `<ul class="menu-horizontal">${each(links2, (item) => {
    return `<a${add_attribute("href", item.path, 0)}${add_attribute("class", " text-neutral hover:shadow-sm", 0)}><li class="item font-semibold border-2 border-transparent p-5 hover:text-accent hover:text-lg">${escape(item.name)} </li></a>`;
  })}</ul>` : ``}` : ``}</div> <div class="navbar-end">${slots.right ? slots.right({}) : ``}</div></div>`;
});
const links = [
  {
    name: "FAQ",
    icon: "material-symbols:help-center",
    path: "/faq",
    id: "faq",
    index: 0,
    subtitle: "Frequently Asked Questions."
  },
  {
    name: "Schedule",
    icon: "ph:person-simple-bike",
    path: "/schedule",
    id: "schedule",
    index: 1,
    subtitle: "Schedule of rides."
  }
];
const theme = writable("default");
const ThemeChanger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  const themes = [
    {
      title: "🌚  Dark",
      theme: "dark"
    },
    {
      title: "🌝  Light",
      theme: "light"
    }
  ];
  $$unsubscribe_theme();
  return `${each(themes, (i) => {
    return `<button class="${"p-5 m-2 base " + escape(
      $theme === i.theme ? "border-2 border-primary cursor-pointer" : "",
      true
    )}"${add_attribute("data-set-theme", i.theme, 0)} ${$theme === i.theme ? "disabled" : ""}>${escape(i.title)} </button>`;
  })}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` ${validate_component(Nav, "Nav").$$render(
    $$result,
    {
      links,
      collapsible: true,
      showLinksOnDesktop: true
    },
    {},
    {
      right: () => {
        return `<div slot="right" class="text-xs">${validate_component(ThemeChanger, "ThemeChanger").$$render($$result, {}, {}, {})}</div>`;
      },
      "left-logo": () => {
        return `<a slot="left-logo" class="sm:flex hidden font-semibold text-neutral hover:text-accent text-xl hover:bg-[--hover] border-2 border-transparent" href="/">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "game-icons:baseball-glove",
            color: "text-neutral hover:text-accent ",
            width: "30",
            height: "30"
          },
          {},
          {}
        )}</a>`;
      }
    }
  )} <main class="h-full p-5">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};

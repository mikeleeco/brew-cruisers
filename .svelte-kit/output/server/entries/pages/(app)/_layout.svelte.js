import { c as create_ssr_component, a as subscribe, b as each, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { w as writable } from "../../../chunks/index.js";
import "../../../chunks/functions.js";
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
    return `<button class="${"m-1 sm:m-2 shadow-md base " + escape(
      $theme === i.theme ? "border-2 border-primary cursor-pointer" : "border-2 border-transparent",
      true
    )}"${add_attribute("data-set-theme", i.theme, 0)} ${$theme === i.theme ? "disabled" : ""}>${escape(i.title)} </button>`;
  })}`;
});
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
  return `<div class="navbar bg-primary h-20"><div class="navbar-start">${slots.left ? slots.left({}) : ``} ${collapsible ? `<div class="dropdown"><label tabindex="-1" for="nav-collapsible" class="btn base btn-ghost" data-svelte-h="svelte-vr9011"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="nav-collapsible"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label> <ul tabindex="-1" class="dropdown-content mt-3 z-[1] p-2 shadow bg-info border-2 border-primary rounded w-48">${links2 ? `${each(links2, (item) => {
    return `<a class=""${add_attribute("href", item.path, 0)}><li class="font-semibold text-sm item px-5 py-2 hover:bg-[--hover] hover:border-accent border-2 border-transparent">${escape(item.name)} </li></a>`;
  })}` : ``} <br> <div class="text-xs flex flex-col justify-center">${validate_component(ThemeChanger, "ThemeChanger").$$render($$result, {}, {}, {})}</div></ul></div>` : ``}  ${slots["left-logo"] ? slots["left-logo"]({}) : ``}</div>  <div class="navbar-center hidden h-16 sm:flex">${slots.center ? slots.center({}) : ``} ${links2 ? `${showLinksOnDesktop ? `<ul class="menu-horizontal">${each(links2, (item) => {
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
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return ` ${validate_component(Nav, "Nav").$$render(
    $$result,
    {
      links,
      collapsible: true,
      showLinksOnDesktop: true
    },
    {},
    {
      "left-logo": () => {
        return `<a slot="left-logo" class="font-semibold text-neutral hover:text-accent text-xl hover:bg-[--hover] border-2 border-transparent" href="/">${$theme == "dark" ? `<img src="/img/Folder/Brew1-05.png" alt="logo-dark" height="20" width="100">` : `<img src="/img/Folder/Brew1-04.png" alt="logo-light" height="20" width="100">`}</a>`;
      }
    }
  )} <main class="h-full p-5">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};

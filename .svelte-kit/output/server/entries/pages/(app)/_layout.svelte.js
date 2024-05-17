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
    icon: "ph:calendar",
    path: "/schedule",
    id: "schedule",
    index: 1,
    subtitle: "Schedule of rides."
  },
  {
    name: "Next ride",
    icon: "ph:person-simple-bike",
    path: "/next-ride",
    id: "next-ride",
    index: 1,
    subtitle: "Information about our next ride."
  }
];
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="bg-primary bg-opacity-30 px-5 flex flex-col " data-svelte-h="svelte-f6v482"><div class="flex flex-col h-20 place-content-evenly"><p class="">Brew Cruisers 2024</p> <div class="gap-5"><div class="flex flex-row gap-5"><a class="link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/follow?screen_name=mkebrewcruisers"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="currentColor" d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg></a> <a class="link" target="_blank" rel="noopener noreferrer" href="https://instagram.com/mkebrewcruisers"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334"></path></svg></a></div></div></div></footer>`;
});
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
  )} <div class="flex flex-col h-screen"><div class="flex-grow "><main class="">${slots.default ? slots.default({}) : ``}</main></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};

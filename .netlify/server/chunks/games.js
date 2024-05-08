import { c as create_ssr_component, o as onDestroy, h as spread, i as escape_object, j as createEventDispatcher } from "./ssr.js";
import { c as checkIconState, g as generateIcon } from "./functions.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const games = [
  {
    name: "Pirates",
    date: "May 14th",
    id: "pirates1",
    index: 0,
    time: "6:40pm CDT",
    color: "#fdb827"
  },
  {
    name: "Blue Jays",
    date: "June 11th",
    id: "bluejays",
    index: 1,
    time: "7:10pm CDT",
    color: "#134A8E"
  },
  {
    name: "Pirates",
    date: "July 9th",
    id: "pirates2",
    index: 2,
    time: "7:10pm CDT",
    color: "#FDB827"
  },
  {
    name: "Dodgers",
    date: "August 13th",
    id: "dodgers",
    index: 3,
    time: "7:10pm CDT",
    color: "#005A9C"
  },
  {
    name: "Cardinals",
    date: "September 3rd",
    id: "cardinals",
    index: 4,
    time: "6:40pm CDT",
    color: "#C41E3A"
  }
];
export {
  Icon as I,
  games as g
};

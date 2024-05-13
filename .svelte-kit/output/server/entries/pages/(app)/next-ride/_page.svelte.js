import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { S as Seo, C as ContainerLayout } from "../../../../chunks/Seo.js";
import "../../../../chunks/functions.js";
import { I as Icon, g as games } from "../../../../chunks/games.js";
import { format, differenceInDays } from "date-fns";
const rides = [
  {
    name: "Pirates",
    date: "May 14th",
    id: "pirates1",
    index: 0,
    time: "6:40pm CDT",
    color: "#fdb827",
    rideTime: "Tuesday, May 14, 2024 5:40:00 PM",
    details: "Gather at the Great Roundabout of Walker's Point at 5:25pm. Roll out an hour before first pitch at 5:40.",
    location: "Great Roundabout of Walker's Point",
    category: "Slow/moderate pace"
  },
  {
    name: "Blue Jays",
    date: "June 11th",
    id: "bluejays",
    index: 1,
    time: "7:10pm CDT",
    color: "#134A8E",
    rideTime: "Tuesday, June 11, 2024 6:10:00 PM",
    details: "",
    location: "Great Roundabout of Walker's Point (subject to change)",
    category: "Slow/moderate pace"
  },
  {
    name: "Pirates",
    date: "July 9th",
    id: "pirates2",
    index: 2,
    time: "7:10pm CDT",
    color: "#FDB827",
    rideTime: "Tuesday, July 9, 2024 6:10:00 PM",
    details: "",
    location: "Great Roundabout of Walker's Point (subject to change)",
    category: "Slow/moderate pace"
  },
  {
    name: "Dodgers",
    date: "August 13th",
    id: "dodgers",
    index: 3,
    time: "7:10pm CDT",
    color: "#005A9C",
    rideTime: "Tuesday, August 13, 2024 6:10:00 PM",
    details: "",
    location: "Great Roundabout of Walker's Point (subject to change)",
    category: "Slow/moderate pace"
  },
  {
    name: "Cardinals",
    date: "September 3rd",
    id: "cardinals",
    index: 4,
    time: "6:40pm CDT",
    color: "#C41E3A",
    rideTime: "Tuesday, September 3, 2024 5:40:00 PM",
    details: "",
    location: "Great Roundabout of Walker's Point (subject to change)",
    category: "Slow/moderate pace"
  }
];
const RideInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ride } = $$props;
  let today = /* @__PURE__ */ new Date();
  let rideDate = format(ride.rideTime, "MM/dd");
  let rideTime = format(ride.rideTime, "hh:mmbb");
  console.log(today);
  let dayDiff = differenceInDays(ride.rideTime, today);
  if ($$props.ride === void 0 && $$bindings.ride && ride !== void 0)
    $$bindings.ride(ride);
  return `<div class="flex flex-col w-full sm:w-[40%] gap-2"><div class="flex flex-col w-full gap-2 bg-base-100 p-2"><div class="flex flex-row">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:map-pin-fill",
      color: "text-neutral",
      width: "30",
      height: "30"
    },
    {},
    {}
  )} <p class="subtitle self-center">${escape(ride.location)}</p></div> <div class="flex flex-row gap-2">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ic:baseline-calendar-month",
      color: "text-neutral",
      width: "30",
      height: "30"
    },
    {},
    {}
  )} <p class="subtitle self-center">${escape(rideDate)} (In ${escape(dayDiff)} days)
                </p></div> <div class="flex flex-row gap-2">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:clock-bold",
      color: "text-neutral",
      width: "30",
      height: "30"
    },
    {},
    {}
  )} <p class="subtitle self-center">${escape(rideTime)}</p></div> <div class="flex flex-row gap-2"><p class="subtitle self-center">${escape(!ride?.category ? "" : ride?.category)}</p></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  games[0];
  let ride = rides[0];
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Brew Cruisers Next Ride" }, {}, {})} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
    column: () => {
      return `<div slot="column"><h1 class="pb-5" data-svelte-h="svelte-uv9k0m">Next ride</h1> ${validate_component(RideInfo, "RideInfo").$$render($$result, { ride }, {}, {})} <p class="py-5"><span class="text-3xl serif" data-svelte-h="svelte-105vh87">Details:</span> ${escape(ride.details)}</p> <p class="pb-5" data-svelte-h="svelte-7iwqev">Map: <a href="https://maps.app.goo.gl/MLjQyFxpoP9oG4mw5">Great Roundabout of Walker&#39;s Point</a></p>
		Find more info at the<a href="/faq" data-svelte-h="svelte-1l2phc7">FAQ</a>.
		</div>`;
    }
  })}`;
});
export {
  Page as default
};

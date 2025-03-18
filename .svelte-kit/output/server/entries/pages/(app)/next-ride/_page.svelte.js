import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { S as Seo, C as ContainerLayout } from "../../../../chunks/Seo.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { format, differenceInDays } from "date-fns";
const rides = [
  {
    name: "Athletics",
    date: "April 18th",
    id: "athletics",
    index: 0,
    time: "7:10pm CDT",
    color: "#003831",
    rideTime: "Friday, April 18, 2025 6:10:00 PM",
    details: "Gather at the Great Roundabout of Walker's Point at 5:55pm. Roll out an hour before first pitch at 6:10.",
    location: "Great Roundabout of Walker's Point",
    category: "Slow/moderate pace"
  },
  {
    name: "Twins",
    date: "May 16th",
    id: "twins",
    index: 1,
    time: "7:10pm CDT",
    color: "#002B5C",
    rideTime: "Friday, May 16, 2025 6:10:00 PM",
    details: "Gather at the Great Roundabout of Walker's Point at 5:55pm. Roll out an hour before first pitch at 6:10pm.",
    location: "Great Roundabout of Walker's Point",
    category: "Slow/moderate pace"
  },
  {
    name: "Padres",
    date: "June 6th",
    id: "padres",
    index: 2,
    time: "7:10pm CDT",
    color: "#2F241D",
    rideTime: "Friday, June 6, 2025 6:10:00 PM",
    details: "Gather at the Great Roundabout of Walker's Point at 5:55pm. Roll out an hour before first pitch at 6:10pm.",
    location: "Great Roundabout of Walker's Point",
    category: "Slow/moderate pace"
  },
  {
    name: "Nationals",
    date: "July 11th",
    id: "nationals",
    index: 3,
    time: "7:10pm CDT",
    color: "#AB0003",
    rideTime: "Friday, July 11, 2025 6:10:00 PM",
    details: "Gather at the Great Roundabout of Walker's Point at 5:55pm. Roll out an hour before first pitch at 6:10pm.",
    location: "Great Roundabout of Walker's Point",
    category: "Slow/moderate pace"
  },
  {
    name: "Mets",
    date: "Augst 8th",
    id: "mets",
    index: 4,
    time: "7:10pm CDT",
    color: "#002D72",
    rideTime: "Friday, August 8, 2025 6:10:00 PM",
    details: "Gather at the Great Roundabout of Walker's Point at 5:55pm. Roll out an hour before first pitch at 6:10.",
    location: "Great Roundabout of Walker's Point",
    category: "Slow/moderate pace"
  },
  {
    name: "Cardinals",
    date: "September 12th",
    id: "cardinals",
    index: 5,
    time: "6:40pm CDT",
    color: "#C41E3A",
    rideTime: "Friday, September 12, 2025 6:10:00 PM",
    details: "Gather at the Great Roundabout of Walker's Point at 5:55pm. Roll out an hour before first pitch at 6:10.",
    location: "Great Roundabout of Walker's Point",
    category: "Slow/moderate pace"
  }
];
const RideInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ride } = $$props;
  let today = /* @__PURE__ */ new Date();
  let { count = true } = $$props;
  let rideDate = format(ride.rideTime, "MMMM dd");
  let rideTime = format(ride.rideTime, "h:mmbb");
  let dayDiff = differenceInDays(ride.rideTime, today);
  if ($$props.ride === void 0 && $$bindings.ride && ride !== void 0)
    $$bindings.ride(ride);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  return `<div class="flex flex-col w-full gap-5"><div class="flex flex-col w-full gap-5 bg-base-100 p-5 text-xl"><div class="flex flex-row gap-2">${validate_component(Icon, "Icon").$$render(
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
  )} <p class="subtitle self-center">${escape(rideDate)} ${escape(count ? `(In ${dayDiff} days)` : "")} </p></div> <div class="flex flex-row gap-2">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:clock-bold",
      color: "text-neutral",
      width: "30",
      height: "30"
    },
    {},
    {}
  )} <p class="subtitle self-center">${escape(rideTime)}</p></div> <div class="flex flex-row gap-2 "><p class="subtitle self-center">${escape(!ride?.category ? "" : ride?.category)}</p></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let today = /* @__PURE__ */ new Date();
  const ride = rides.reduce(function(prev, current) {
    return differenceInDays(today, prev.rideTime) < 0 && differenceInDays(today, current.rideTime) < differenceInDays(today, prev.rideTime) ? prev : current;
  });
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Brew Cruisers Next Ride" }, {}, {})} ${validate_component(ContainerLayout, "ContainerLayout").$$render($$result, {}, {}, {
    column: () => {
      return `<div slot="column"><h1 class="pb-5" data-svelte-h="svelte-uv9k0m">Next ride</h1> ${validate_component(RideInfo, "RideInfo").$$render($$result, { ride }, {}, {})} <p class="py-5"><span class="text-3xl serif" data-svelte-h="svelte-105vh87">Details:</span> ${escape(ride.details)}</p> <p class="pb-5" data-svelte-h="svelte-7iwqev">Map: <a href="https://maps.app.goo.gl/MLjQyFxpoP9oG4mw5">Great Roundabout of Walker&#39;s Point</a></p>
		Find more info at the
		<a href="/faq" data-svelte-h="svelte-1l2phc7">FAQ</a>.
		</div>`;
    }
  })}`;
});
export {
  Page as default
};

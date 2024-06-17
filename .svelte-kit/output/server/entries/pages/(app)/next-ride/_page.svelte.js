import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { S as Seo, C as ContainerLayout } from "../../../../chunks/Seo.js";
import { r as rides, R as RideInfo } from "../../../../chunks/RideInfo.js";
import { differenceInDays } from "date-fns";
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

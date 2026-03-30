<script>
  export let ride;
  import Icon from "@iconify/svelte";
  import { format, differenceInDays } from "date-fns";
  let today = new Date();
  export let count = true;
  let rideDate = format(ride.rideTime, "MMMM dd");
  let rideTime = format(ride.rideTime, "h:mmbb");

  let dayDiff = differenceInDays(ride.rideTime, today);
</script>

<div class="flex flex-col gap-5 pb-5">
  <div class="flex flex-col gap-5 bg-base-100 p-5 text-xl">
  <span class="flex flex-row gap-2"
                ><Icon
                  icon={"mdi:baseball-diamond-outline"}
                  width="30"
                  height="30"
                />
                  <span class={`decoration-accent`}>Brewers vs {ride.name}</span>
              </span>
    <div class="flex flex-row gap-2">
      <Icon
        icon="ic:baseline-calendar-month"
        color="text-neutral"
        width="30"
        height="30"
      />
      <p class="subtitle self-center">
        {rideDate} @ {rideTime}
        {count ? (dayDiff === 0 ? "(Today!)" : `(In ${dayDiff} days)`) : ""}
        <!-- {ride.date} -->
      </p>
    </div>
    <div class="flex flex-row gap-2">
      <Icon
        icon="ph:map-pin-fill"
        color="text-neutral"
        width="30"
        height="30"
      />
      <p class="subtitle self-center">
        {ride.location}
      </p>
    </div>
    <div class="flex flex-row gap-2">
        <Icon
        icon="mdi:bicycle"
        color="text-neutral"
        width="30"
        height="30"
      />         <p class="subtitle self-center">
     {!ride?.category ? "" : ride?.category}
      </p>
    </div>
  </div>
</div>

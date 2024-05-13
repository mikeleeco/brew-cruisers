<script>
    export let ride;
    import Icon from "@iconify/svelte";
    import { format, differenceInDays } from "date-fns";
    let today = new Date();

    let rideDate = format(ride.rideTime, "MM/dd");
    let rideTime = format(ride.rideTime, "hh:mmbb");
    console.log(today);
    let dayDiff = differenceInDays(ride.rideTime, today);
</script>

<div class="flex flex-col w-full sm:w-[40%] gap-2">
    <div class="flex flex-col w-full gap-2 bg-base-100 p-2">
        <div class="flex flex-row">
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
                icon="ic:baseline-calendar-month"
                color="text-neutral"
                width="30"
                height="30"
            />
            <p class="subtitle self-center">
                {rideDate} (In {dayDiff} days)
                <!-- {ride.date} -->
            </p>
        </div>
        <div class="flex flex-row gap-2">
            <Icon
                icon="ph:clock-bold"
                color="text-neutral"
                width="30"
                height="30"
            />
            <p class="subtitle self-center">
                {rideTime}
            </p>
        </div>
        <div class="flex flex-row gap-2">
            <p class="subtitle self-center">
                {!ride?.category ? "" : ride?.category}
            </p>
        </div>
    </div>
</div>

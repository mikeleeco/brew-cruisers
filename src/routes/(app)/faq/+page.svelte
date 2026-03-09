<script>
  import ContainerLayout from "$components/ui/ContainerLayout.svelte";
  import Icon from "@iconify/svelte";
  import Seo from "$lib/components/utils/Seo.svelte";
  import Footer from "$components/ui/Footer.svelte";

  import { rides } from "$components/data/rides";
  import { format, differenceInDays } from "date-fns";
  let today = new Date();

  const ride = rides.reduce(function (prev, current) {
    return differenceInDays(today, prev.rideTime) <= 0 &&
      differenceInDays(today, current.rideTime) <
        differenceInDays(today, prev.rideTime)
      ? prev
      : current;
  }); //returns next ride object
</script>

<Seo title="Brew Cruisers FAQ" />

<ContainerLayout>
  <div slot="column">
    <h1>FAQ</h1>
    <ul>
      <h2>A bike rack tailgate?</h2>
      Yes! We hang out at the bike racks before the game. Because we love watching
      baseball and riding bicycles.
      <h2>Where?</h2>
      We meet at the <a href="https://maps.app.goo.gl/CptZ9xqDr5rYHcs89">Great Roundabout of Walker's Point</a> 75 minutes before game time and roll out an hour before first pitch. For example
      on {ride.date}, We'll park at the bike rack near the <a href="https://maps.app.goo.gl/a6tiU4RDqKxbU98i7">Tailgate Haus</a> and tailgate at the tables nearby.
      <h2>When?</h2>
      Every first Friday Brewers home game. The next ride is {ride.date} vs the {ride.name}. We'll meet at 5:25pm and roll out at 5:40. Here's
      the
      <a href="/schedule"> schedule</a>. 
      <h2>What should I bring?</h2>
      You, your bike, and a lock. If you don't have a bicycle there is a Bubbler bicycle gate at the start and end of the ride. Learn more
      at
      <a href="https://bublrbikes.org/"> https://bublrbikes.org/</a>
      <h2>What about food and drink?</h2>
      BYOB, food, and drinks. Until posted otherwise leave the grill at home.
      <h2>Do you ride to the tailgate together?</h2>
      Yes! If you're coming from downtown or east of the ballpark, or you can get there
      an hour before first pitch, ride with us! Otherwise, ride on your own and meet
      us at the tailgate. Our standard Hank Aaron Trail route is a little less than 4 miles riding on Canal
      Street. The pace is chill and inclusive. We won't leave you behind!
      <h2>Do you sit together?</h2>
      Kinda! We plan to sit in the right field bleachers, typically 203 - there are <a href="https://www.mlb.com/brewers/tickets/specials/wisconsin-fridays">50% off tickets</a> for most of the Brew Cruisers game dates. Depending on on the crowd size bleacher
      tickets make it easiest to gather together at the game. Group ticketing requires
      at least a month advance purchase and a headcount so perhaps we'll organize for a future game. You'll find
      more info here if it happens.
      <h2>How do I get home?</h2>
      A group of riders will retrace our route back to the starting point. There might
      be other groups riding home from there. More information on alternative transportation
      options is
      <a
        href="		https://www.mlb.com/brewers/ballpark/transportation/alternate-transportation
          ">available on the Brewers website.</a
      >

      <h2>Where's the bike parking?</h2>
      Compared to other ballparks there are limited accommodations for bicycles. There
      are bicycle racks in four locations. The Brew Cruisers ride typically uses the
      rack near the Tailgate Haus. There are also racks outside of the right field gate, the left field gate, and two surrounding Helfaer Field.
      <h2>Are the racks secure?</h2>
      The racks are within the ballpark premises and are generally patrolled by stadium
      staff. Similar to car tailgaters, bags and tailgate leftovers can be attached
      to our bikes, but it's best to leave any valuables at home or bring them into
      the stadium. We recommend you use a good bike lock whenever you lock up.
      <h2>What can I bring into the ballpark?</h2>
      <ul class='list-disc list-inside'>
        <li>
          Bags small bags (9" x 5"x 2" or smaller) clear totes (12" x 12" x 6" or smaller)
          diaper bags accompanied by a baby medical necessities no backpacks!
        </li>
        <li>
          Food in a
          clear storage bag no larger than 1 gallon
        </li>
        <li>Water must come in a factory sealed bottle. The Brewers website doesn't appear to have an official policy on empty plastic water bottles. Other teams such as the <a href="https://www.mlb.com/whitesox/ballpark/information/guide#">White Sox</a> and <a href="https://www.mlb.com/twins/ballpark/information/guide#">Twins</a> allow it.</li> </ul>
      For more information see the
        <a href="https://www.mlb.com/brewers/ballpark/security"
          >2026 Brewers Security Policy</a
        >
        and list of prohibited items.
      <h2>Is there a place I can check my bag?</h2>
      No. Other ballparks have started accommodating ticket buyers with bag checks,
      but this service is not available at American Family Field. You can leave stuff
      on your bike or you can bring your helmet in and use it as a purse.
      <h2>Where can I find more bike rack tailgates?</h2>
      Chicago and Baltimore! The idea for this ride was inspired by the
      <a href="https://chicagobikesox.com/"> Chicago Bike Sox</a>. And
      in Baltimore ride with the
      <a href="https://baltimorebikebirds.com/">Bike Birds</a>!
    </ul>
  </div>
</ContainerLayout>

<style>
  h2 {
    padding-bottom: 5px;
  }
</style>
<script>
  import ContainerLayout from "$components/ui/ContainerLayout.svelte";
  import { games } from "$components/data/games";
  import Icon from "@iconify/svelte";
  import Seo from "$lib/components/utils/Seo.svelte";
  
</script>
<Seo />
<ContainerLayout>
      <h1>Milwaukee Brew Cruisers Bike Ride</h1>
      <h2 class="subtitle pb-5">
        A monthly ride to enjoy live baseball and advocate for bicycle
        accommodations in Milwaukee and the stadium district.
      </h2>
      <div>
                                    <h2 class="text-primary text-3xl font-serif pb-6">2026 Ride Schedule</h2>
        <ul class="">
          {#each games as item}
              <li class={`font-semibold text-2xl pb-5`}>
              <span class="flex flex-row gap-2"
                ><Icon
                  icon={"mdi:baseball-diamond-outline"}
                  width="30"
                  height="30"
                />
                <p class={``} style="text-color: {item.color}">
                  <span class={`underline decoration-accent`}>{item.name}</span>, {item.date}
                </p>
              </span>
            </li>
          {/each}
        </ul>
        <div class="pt-5 text-lg gap-5 flex flex-col">
          <div><ul class="list-disc list-outside pl-5">
      
              <li>All games Friday, 6:40pm first pitch</li>
              <li>Gather at the Great Roundabout of Walker's Point at 5:25pm. Roll out at 5:40pm.</li>
      
          </ul>
      
          </div>
            <p>
        Visit
        <a href="/faq">FAQ</a> and <a href="/next-ride">Next Ride</a> page to learn more.
      </p>
        </div>
      </div>
</ContainerLayout>
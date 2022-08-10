import { component$, Host, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export const Section = component$(() => {
  return (
    <div class="rounded-lg bg-neutral-800 px-4 py-2 my-4">
      <Slot />
      {/* <div class="bg-haha-100">
        haha
      </div> */}
    </div>
  );
});

export default component$(() => {
  return (
    <Host>
      Welcome to this simple guide for HT CM <br />
      It's short and fun and I hope you like it
      <Section>
        <h1 class="text-2xl font-bold">Jormag</h1>
        Hello!
      </Section>
      <Section>
        <h1 class="text-2xl font-bold">Primordus</h1>
        Hello!
      </Section>
    </Host>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik City",
};

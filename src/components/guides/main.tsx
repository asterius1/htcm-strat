import { component$ } from "@builder.io/qwik";
import { Section, SpecificTips, TipBox } from "./elements";

export const MainGuide = component$(() => {
  return (
    <div>
      Welcome to this simple guide for HT CM <br />
      It's short and fun and I hope you like it
      <Section>
        <h1 class="text-2xl font-bold">Jormag</h1>
        Hello!
      </Section>
      <Section>
        <h1 class="text-2xl font-bold">Primordus</h1>
        Hello! test change!
        <TipBox>
          <SpecificTips _class="ham" role="heal">
            tips for ham
          </SpecificTips>
          <SpecificTips _class="pVirt" role="portal">
            tips for pVirt
          </SpecificTips>
          <SpecificTips _class="pVirt" role="dps">
            tips for pVirt dps
          </SpecificTips>
          <SpecificTips role="dps">tips for dps</SpecificTips>
        </TipBox>
      </Section>
    </div>
  );
});

import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { Analytics } from "./analytics";
import { Social } from "./social";

export const Head = component$(
  () => {
    const head = useDocumentHead();
    const loc = useLocation();

    return (
      <>
        <meta name="viewport" content="width=device-width" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Guide for Harvest Temple Challenge Mode in Guild Wars 2"
        />

        <title>{head.title ? `${head.title}` : `HT CM`}</title>

        <link rel="canonical" href={loc.href} />

        {head.meta.map((m) => (
          <meta {...m} />
        ))}

        {head.links.map((l) => (
          <link {...l} />
        ))}

        {head.styles.map((s) => (
          <style {...s.props} dangerouslySetInnerHTML={s.style} />
        ))}

        <Social />
        <Analytics loc={loc} />
      </>
    );
  },
  { tagName: "head" }
);

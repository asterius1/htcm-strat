import { component$, Host, Slot, useStyles$ } from "@builder.io/qwik";
import { useTipSelectionContextProvider } from "~/components/guides/elements";
import style from "./layout.css";

export const Header = () => {
  return <div>hello header</div>;
};

export const Footer = () => {
  return <div>hello footer</div>;
};

export default component$(() => {
  useStyles$(style);
  useTipSelectionContextProvider();
  return (
    <Host>
      <Header />
      <main class="hello container mx-auto">
        <Slot />
      </main>
      <Footer />
    </Host>
  );
});

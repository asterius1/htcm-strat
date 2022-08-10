import { component$, Host, Slot, useStyles$ } from "@builder.io/qwik";
import style from "./layout.css";

export const Header = () => {
  return <div>hello header</div>;
};

export const Footer = () => {
  return <div>hello footer</div>;
};

export default component$(() => {
  useStyles$(style);
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

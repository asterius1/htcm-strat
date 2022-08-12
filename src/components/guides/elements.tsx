import {
  component$,
  createContext,
  Slot,
  useContext,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";

export const Section = component$(() => {
  return (
    <div class="rounded-lg bg-neutral-800 px-4 py-2 my-4">
      <Slot />
    </div>
  );
});

type ClassChoice = "ham" | "pMech" | "pVirt" | "qfb" | "qscrap";

export const classChoiceNew: { name: ClassChoice; roles: RoleChoice[] }[] = [
  { name: "ham", roles: ["heal"] },
  { name: "pMech", roles: ["dps"] },
  { name: "pVirt", roles: ["portal", "dps"] },
  { name: "qfb", roles: ["quick"] },
  { name: "qscrap", roles: ["quick"] },
];

export const classChoice: ClassChoice[] = [
  "ham",
  "pMech",
  "pVirt",
  "qfb",
  "qscrap",
];
type RoleChoice = "heal" | "portal" | "quick" | "dps";
export const roleChoice: RoleChoice[] = ["heal", "portal", "quick", "dps"];
interface TipSelection {
  _class: ClassChoice;
  role: RoleChoice;
}

export const TipSelectionContext = createContext<TipSelection>("TipSelection");

export function useTipSelectionContextProvider() {
  useContextProvider(
    TipSelectionContext,
    useStore<TipSelection>({
      _class: "ham",
      role: "heal",
    })
  );
}

export const TipBox = component$(() => {
  return (
    <div class="rounded-lg my-4">
      <SelectTip />
      <Slot />
    </div>
  );
});

export const SelectTip = component$(() => {
  const selected = useContext(TipSelectionContext);

  return (
    <div class="bg-slate-800">
      <div>
        {classChoiceNew.map((c) => {
          return (
            <button
              class="btn btn-primary btn-md"
              disabled={selected._class === c.name}
              onClick$={() => {
                selected._class = c.name;
                selected.role = c.roles[0];
              }}
            >
              {c.name}
            </button>
          );
        })}
      </div>
      <div>
        {classChoiceNew
          .filter((a) => a.name === selected._class)[0]
          ?.roles.map((r) => {
            return (
              <button
                class="btn btn-secondary btn-md"
                disabled={selected.role === r}
                onClick$={() => (selected.role = r)}
              >
                {r}
              </button>
            );
          })}
      </div>
    </div>
  );
});

export const SpecificTips = component$(
  ({ _class, role }: Partial<TipSelection>) => {
    const selected = useContext(TipSelectionContext);
    const cMatch = _class === undefined || selected._class === _class;
    const rMatch = role === undefined || selected.role === role;
    if (cMatch && rMatch) {
      return (
        <div class="bg-neutral-700 p-4">
          <p class="font-bold">
            tips for {_class} {role}
          </p>
          <Slot />
        </div>
      );
    } else {
      return <></>;
    }
  }
);

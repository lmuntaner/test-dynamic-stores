import { type Readable, derived } from "svelte/store";
import { mainStore } from "./main-store";
import { initNeuronsStore, type Neuron } from "./test-store";

const stores: Record<string, Readable<Neuron | undefined>> = {};

export const initSelectedNeuronsStore = (id: number) => {
  if (stores[id]) {
    return stores[id];
  }

  const neuronsStore = initNeuronsStore(id);
  const derivedStore = derived([mainStore, neuronsStore], ([$main, $neuronsStore]) => {
    return $neuronsStore?.neurons.find(({ id }) => id === $main );
  })

  stores[id] = derivedStore

  return stores[id];
};

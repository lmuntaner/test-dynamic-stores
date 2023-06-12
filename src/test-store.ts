import { writable, type Readable, type Writable } from "svelte/store";

export type Neuron = {
  id: number,
  root: number,
  name: string,
};

interface NeuronStore {
  neurons: Neuron[];
}

interface NeuronsStore extends Readable<NeuronStore | undefined> {}

const stores: Record<string, NeuronsStore> = {};

export const initNeuronsStore = (root: number) => {
  if (stores[root]) {
    return stores[root];
  }

  const { subscribe } = writable<NeuronStore | undefined>(undefined, (set) => {
    setTimeout(() => {
      const neurons = [];
      for (let i = 0; i < root; i++) {
        neurons.push({
          id: i,
          root: root,
          name:`neuron-root_${root}-id_${i}`,
        });
      }
      set({
        neurons,
      })
    }, 2_000);
  });

  stores[root] = {
    subscribe,
  };

  return stores[root];
};

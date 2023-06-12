import { writable, type Readable, type Writable } from "svelte/store";

const initMainStore = () => {
  const { subscribe, set } = writable<number | undefined>(1);

  return {
    subscribe,
    set,
  }
};

export const mainStore = initMainStore();

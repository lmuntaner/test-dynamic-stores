<script lang="ts">
  import type { Readable } from 'svelte/store';
  import TestStore from '../components/TestStore.svelte';
  import TestStore2 from '../components/TestStore2.svelte';
  import TestStore3 from '../components/TestStore3.svelte';
  import { mainStore } from '../main-store';
  import { initSelectedNeuronsStore } from '../test-derived-store';
  import type { Neuron } from '../test-store';

  let currentMain = "";

  const setMain = () => {
    mainStore.set(Number(currentMain));
    currentMain = "";
  };

  let currentId = "2";

  let currentSelectedNeuron: Readable<Neuron | undefined>;
  $: currentSelectedNeuron = initSelectedNeuronsStore(Number(currentId));
</script>

<h1>Main</h1>

<input bind:value={currentMain} />
<button on:click={setMain}>Set Main</button>
<p>{`Current main: ${$mainStore}`}</p>
<p>{`Current selected neuron: ${$currentSelectedNeuron?.name}`}</p>

<input bind:value={currentId} placeholder="Current id" />

<TestStore />
<TestStore2 />
<TestStore3 />


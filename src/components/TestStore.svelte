<script lang="ts">
  import { initNeuronsStore } from "../test-store";
  import SubTestStore from "./SubTestStore.svelte";

  let neuronsStore = initNeuronsStore(2);

  let currentId = "";

  let ids: string[] = [];

  const add = () => {
    ids = [...ids, currentId];
    currentId = "";
  };
</script>

<p>TestStore</p>
<button on:click={add}>Increase</button>
<input bind:value={currentId} />

{#each ids as id}
  <SubTestStore id={Number(id)} />
{/each}




<script lang="ts">
  import { initNeuronsStore } from "../test-store";

  export let id: number;

  let neuronsStore;
  $: neuronsStore = initNeuronsStore(id);

  $: {
    console.log("hi from sub", id);
    console.log($neuronsStore)
  }
</script>

<p>substore</p>
<script lang="ts">
  import { initNeuronsStore } from "../test-store";

  let neuronsStore = initNeuronsStore(3);

  $: {
    console.log("hi 3");
    console.log($neuronsStore)
  }


</script>

<p>TestStore 3</p>
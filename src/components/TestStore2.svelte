<script lang="ts">
  import { initNeuronsStore } from "../test-store";

  let neuronsStore = initNeuronsStore(2);

  $: {
    console.log("hi duplicated 2");
    console.log($neuronsStore)
  }


</script>

<p>TestStore 2</p>
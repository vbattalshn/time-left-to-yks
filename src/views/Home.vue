<template>
  <div class="counters flex flex-column flex-g-2">
    <Counter title="YKS 2023'e son" name="yks" />
    <Counter title="MSÜ 2023'e son" name="msu" />
    <Counter title="LGS 2023'e son" name="lgs" />
  </div>
</template>

<script>
import Counter from "../components/Counter"

export default {
    components: {Counter}
};
</script>

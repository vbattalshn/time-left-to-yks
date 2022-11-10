<template>
  <div class="counters flex flex-column flex-g-2">
    <Counter title="YKS 2023'e kalan zaman" name="yks" />
    <Counter title="MSÜ 2023'e kalan zaman" name="msu" />
  </div>
</template>

<script>
import Counter from "../components/Counter"

export default {
    components: {Counter}
};
</script>

<style></style>

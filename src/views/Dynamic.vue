<template>
  <div class="counters flex flex-column flex-g-2">
    <Counter :name="$route.params.name" />
  </div>
</template>

<script>
import Counter from "../components/Counter"

export default {
    components: {Counter},
};
</script>
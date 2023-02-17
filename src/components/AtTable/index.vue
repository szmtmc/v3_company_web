<script lang="ts">
export default {
  name: "at-table",
};
</script>
<script lang="ts" setup>
import { ref } from "vue";
import { useResizeObserver } from "@vueuse/core";
const el = ref(null);
const height = ref(0);
useResizeObserver(el, () => {
  height.value =
    document.body.clientHeight -
    202 -
    document.getElementsByClassName("at-base-header")[0]?.clientHeight;
});
</script>
<template>
  <a-table
    ref="el"
    v-bind="$attrs"
    :scroll="{ x: '100%', y: height + 'px' }"
    stripe
  />
</template>

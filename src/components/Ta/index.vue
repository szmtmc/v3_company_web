<script lang="ts">
export default {
  name: "Ta",
};
</script>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "2",
  },
});
</script>
<template>
  Ta全局组件
  <div>{{ title }}</div>
  <div style="color: red">
    <slot name="footer"> </slot>
  </div>
</template>

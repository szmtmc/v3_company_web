<script lang="ts">
export default {
  name: "at-base",
};
</script>
<style lang="scss" scoped>
.at-base {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
<template>
  <div class="at-base">
    <slot> </slot>
  </div>
</template>

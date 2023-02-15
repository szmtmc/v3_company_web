<script lang="ts">
export default {
  name: "at-filter-group",
};
</script>
<template>
  <a-select :style="{ width: '320px' }" placeholder="Please select ...">
    <a-option>Beijing</a-option>
    <a-option>Shanghai</a-option>
    <a-option>Guangzhou</a-option>
    <a-option disabled>Disabled</a-option>
  </a-select>
</template>

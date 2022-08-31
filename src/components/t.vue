<template>
  <div>22</div>
  {{ option }} {{vModel}}
</template>
<script lang="ts" setup>
import Vue from "vue";
const props = defineProps({
  option: {
    type: Array,
    required: true,
  },
  vModel: {
    type: String,
    required: true,
  },
});
</script>

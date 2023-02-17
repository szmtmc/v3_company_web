<script lang="ts">
export default {
  name: "at-toolbar",
};
</script>
<script lang="ts" setup>
import { IconBook, IconRefresh } from "@arco-design/web-vue/es/icon";
const props = defineProps({
  help: {
    type: String,
    default: ''
  },
  refresh: {
    type: Boolean,
    default: true
  }
})
defineEmits(['refresh'])
const handleHelpUrl = () => {
  window.open(props.help)
}

</script>
<template>
  <a-button type="text" v-if="help" @click="handleHelpUrl">
    <template #icon>
      <IconBook />
    </template>
  </a-button>
  <a-button type="text" v-if="refresh" @click="$emit('refresh')">
    <template #icon>
      <IconRefresh />
    </template>
  </a-button>
</template>

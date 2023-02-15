<template>
  <div v-for="item in filterDefs" :key="item.id">
    <template v-if="item.type === 'select'">
      <a-select
        :style="{ width: item.width ? item.width + 'px' : '200px' }"
        :placeholder="item.placeholder"
        v-model="filter[item.id]"
      >
        <a-option v-for="option in item.options" :value="option.value">{{
          option.label
        }}</a-option>
      </a-select>
    </template>
  </div>
  <div style="margin-top: 10px">
    {{ filter }}
    <a-tag color="blue">22</a-tag>
  </div>
</template>
<script lang="ts">
export default {
  name: "at-filter-group",
};
</script>

<script lang="ts" setup>
import { PropType, reactive } from "vue";
const props = defineProps({
  filterDefs: {
    type: Array as PropType<any[]>,
    required: true,
  },
  filter: {
    type: Object,
    required: true,
  },
});
</script>

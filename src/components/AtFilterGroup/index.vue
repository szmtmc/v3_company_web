<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
}
:deep(.wrapper > span),
:deep(.wrapper > button),
:deep(.wrapper > div) {
  margin-right: 8px;
}
.flex {
  display: flex;
}
.tag {
  color: rgb(var(--blue-6));
  background-color: rgb(var(--blue-1));
  border: 1px solid transparent;
  font-size: 12px;
  padding: 2px;
  line-height: 22px;
}
</style>
<template>
  <div class="flex">
    <div class="wrapper" v-for="item in filterDefs" :key="item.id">
      <template v-if="item.type === 'custom'">
        <slot :name="`filter:${item.id}`"></slot>
      </template>
      <template v-if="item.type === 'select' && item.show(filter)">
        <a-select
          :style="{ width: item.width ? item.width + 'px' : '200px' }"
          :placeholder="item.placeholder"
          v-model="filter[item.id]"
          :allow-clear="item.allowClear"
        >
          <a-option v-for="option in item.options" :value="option.value">{{
            option.label
          }}</a-option>
        </a-select>
      </template>
      <template v-if="item.type === 'input'">
        <a-input
          :style="{ width: item.width ? item.width + 'px' : '200px' }"
          v-model="filter[item.id]"
          :placeholder="item.placeholder"
          :allow-clear="item.allowClear"
        />
      </template>
      <template v-if="item.type === 'time-picker'">
        <a-time-picker
          :style="{ width: item.width ? item.width + 'px' : '200px' }"
          v-model="filter[item.id]"
          :placeholder="item.placeholder"
          :allow-clear="item.allowClear"
        />
      </template>
      <template v-if="item.type === 'month-picker'">
        <a-month-picker
          :style="{ width: item.width ? item.width + 'px' : '200px' }"
          v-model="filter[item.id]"
          :placeholder="item.placeholder"
          :allow-clear="item.allowClear"
        />
      </template>
      <template v-if="item.type === 'radio-group'">
        <a-radio-group v-model="filter[item.id]" type="button">
          <a-radio v-for="option in item.options" :value="option.value">{{
            option.label
          }}</a-radio>
        </a-radio-group>
      </template>
    </div>
    <a-button type="outline" @click="handleReset">重置</a-button>
  </div>
  <div style="margin-top: 10px">
    <span v-for="item in filterDefs">
      <span
        class="tag"
        v-show="!isNil(filter[item.id]) && test(item)"
        style="margin-right: 8px"
      >
        <span v-if="item.type !== 'custom'">
          {{ item.label }}：
          {{ getValue(item.id, filter[item.id]) }}
        </span>
        <span v-else>
          <slot
            :name="`tag:${item.id}`"
            :label="item.label"
            :value="getValue(item.id, filter[item.id])"
          >
          </slot>
        </span>
        <IconClose
          v-if="item.allowClear"
          style="margin-left: 4px; cursor: pointer"
          @click="handleTagClose(item.id)"
        />
      </span>
    </span>
  </div>
</template>
<script lang="ts">
export default {
  name: "at-filter-group",
};
</script>

<script lang="ts" setup>
import { PropType } from "vue";
import { IconClose } from "@arco-design/web-vue/es/icon";
import { cloneDeep, isNil } from "lodash";
import { reset } from "../../utils/index";
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
// 先拷贝一份originFilter
const originData = cloneDeep(props.filter);
const getValue = (key: string, value: string | number) => {
  const obj: any = props.filterDefs?.filter((item) => {
    return item.id === key;
  });
  if (["select", "radio-group"].includes(obj[0]?.type)) {
    const selectObj: any = obj[0].options?.filter((selectItem: any) => {
      return selectItem.value === value;
    });
    return selectObj[0]?.label;
  }
  return value;
};
const handleTagClose = (key: string) => {
  props.filter[key] = null;
};
const handleReset = () => {
  reset(props.filter, originData);
};
const test = (key: Record<string, any>) => {
  const obj: any = props.filterDefs?.filter((item) => {
    return item.id === key.id;
  });
  if (obj[0].hasOwnProperty("show")) {
    return obj[0]?.show(props.filter);
  } else {
    return true;
  }
};
</script>

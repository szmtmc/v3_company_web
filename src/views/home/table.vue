<template>
  <at-base>
    <at-base-header>
      <at-filter-group :filterDefs="filterDefs" :filter="filter">
        <template #filter:eee><a-switch v-model="filter.eee" /></template>
        <template #tag:eee="{ label, value }">{{ label }}：{{ value }}</template>
      </at-filter-group>
    </at-base-header>
    <at-base-content>
      <template #left>
        <a-space>
          <a-button type="primary">操作按钮</a-button>
          <a-button type="outline">操作按钮2</a-button>
          <a-button type="secondary">操作按钮3</a-button>
        </a-space>
      </template>
      <template #right>
        <at-toolbar help="https://www.baidu.com" @refresh="refresh"></at-toolbar>
      </template>
      <!-- <at-table :pagination="false" :columns="columns" :data="data" /> -->
    </at-base-content>
  </at-base>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { AtMessage } from '@/AT'
const refresh = () => {
  console.log('handle refresh!')
}
AtMessage.success({
  content: '2aa2',
  duration: 22222,
  closable: true
});
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Salary",
    dataIndex: "salary",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];
const data = reactive([
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
]);
const filterDefs: any = reactive([
  {
    id: "radioGroup",
    type: "radio-group",
    label: "城市",
    options: [
      {
        label: "北京",
        value: 1,
      },
      {
        label: "长沙",
        value: 2,
      },
    ],
  },
  {
    id: "select",
    type: "select",
    placeholder: "这是选择器",
    allowClear: false,
    label: "选择器",
    width: 200,
    show: (model: any) => {
      return model.radioGroup === 1;
    },
    options: [
      {
        label: "选择器下拉1",
        value: 1,
      },
      {
        label: "选择器下拉2",
        value: 2,
      },
    ],
  },
  {
    id: "input",
    type: "input",
    label: "输入框",
    placeholder: "这是输入框",
    allowClear: true,
    width: 200,
  },
  {
    id: "time",
    type: "time-picker",
    label: "时间选择",
    placeholder: "选择时间",
    allowClear: true,
    width: 200,
  },
  {
    id: "month",
    type: "month-picker",
    label: "月份选择",
    placeholder: "选择月份",
    allowClear: true,
    width: 200,
  },
  {
    id: "eee",
    type: "custom",
    label: "自定义",
    allowClear: false,
  },
]);
const filter = reactive({
  select: null,
  input: null,
  radioGroup: 1,
  time: null,
  month: null,
  eee: true,
});
</script>

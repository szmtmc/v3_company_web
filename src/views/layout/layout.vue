<template>
  <a-layout class="layout-demo">
    <a-layout-sider hide-trigger collapsible :collapsed="collapsed">
      <div class="logo"></div>
      <a-menu
        :defaultOpenKeys="[defaultOpenKeys]"
        :defaultSelectedKeys="[defaultSelectedKeys]"
        :style="{ width: '100%' }"
        @menuItemClick="onClickMenuItem"
      >
        <a-sub-menu v-for="item in routerList" :key="item.key">
          <template #title>
            <span><IconApps />{{ item.name }}</span>
          </template>
          <a-menu-item v-for="inItem in item.children" :key="inItem.key">{{
            inItem.name
          }}</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="padding-left: 20px">
        <a-button shape="round" @click="onCollapse">
          <IconCaretRight v-if="collapsed" />
          <IconCaretLeft v-else />
        </a-button>
      </a-layout-header>
      <a-layout style="padding: 0 24px">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <a-breadcrumb-item>自定义组件</a-breadcrumb-item>
          <a-breadcrumb-item>布局组件</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content>
          <Transition name="fade">
            <router-view v-slot="{ Component }">
              <keep-alive>
                <component :is="Component"></component>
              </keep-alive>
            </router-view>
          </Transition>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import {
  IconApps,
  IconCaretLeft,
  IconCaretRight,
} from "@arco-design/web-vue/es/icon";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const collapsed = ref(false);
const onCollapse = () => {
  console.log(collapsed.value);
  collapsed.value = !collapsed.value;
};
const { path } = route;
let defaultSelectedKeys = path.substring(1, path.length);
let defaultOpenKeys = defaultSelectedKeys.split("/")[0];
const routerList = [
  {
    name: "自定义组件",
    key: "custom",
    children: [
      {
        name: "布局展示",
        key: "custom/layout",
      },
      {
        name: "查询生成",
        key: "custom/query",
      },
      {
        name: "表格操作",
        key: "custom/table",
      },
      {
        name: "自定义列",
        key: "custom/setColomn",
      },
      {
        name: "日志查看",
        key: "custom/log",
      },
    ],
  },
];
const onClickMenuItem = (key: any) => {
  router.push(`/${key}`);
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.layout-demo {
  height: 100vh;
  background: var(--color-fill-2);
}
.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
}
.layout-demo :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}
.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}
.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
  text-align: center;
}
.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-stretch: condensed;
}
</style>

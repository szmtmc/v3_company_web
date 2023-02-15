<script lang="ts">
export default {
  name: "at-base-content",
};
</script>
<style lang="scss" scoped>
.at-base-content {
  flex: 1;
  padding: 12px 0;
  overflow: auto;
  background-color: #eff2f5;
}
.at-table-content {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  background: #fff;
  border: 1px solid #e6e6ed;
  border-radius: 4px;
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    min-height: 56px;
    padding: 0 16px;
    border-bottom: 1px solid #e6e6ed;
  }
  &-body {
    flex: 1;
  }
}
:deep(.at-table-content-body .arco-table) {
  display: flex;
  flex-direction: column;
}
:deep(.at-table-content-body .arco-table-container) {
  flex: 1;
}
</style>
<template>
  <div class="at-base-content">
    <div class="at-table-content">
      <div class="at-table-content-header"></div>
      <div class="at-table-content-body">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

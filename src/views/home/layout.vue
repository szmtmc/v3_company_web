<template>
  <at-base>
    <at-base-content>
      <section class="at-layout" style="height: 100%">
        <header class="at-layout-header">Header</header>
        <section class="at-layout at-layout-has-sider">
          <div class="at-layout-sider" style="width: 200px">
            <div class="at-layout-sider-children">Sider</div>
          </div>
          <main class="at-layout-content">Content</main>
        </section>
      </section>
    </at-base-content>
  </at-base>
</template>
<style lang="scss" scoped>
.at-layout-header {
  height: 64px;
  background-color: var(--color-primary-light-4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
.at-layout {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
.at-layout-has-sider {
  flex-direction: row;
  .at-layout-sider-children {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--color-white);
    font-size: 16px;
    font-stretch: condensed;
    text-align: center;
    height: 100%;
  }
}

.at-layout-sider {
  background-color: var(--color-primary-light-3);
  position: relative;
  flex: none;
  width: auto;
  margin: 0;
  padding: 0;
  transition: width 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
}
.at-layout-content {
  background-color: rgb(var(--arcoblue-6));
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  flex: 1;
  text-align: center;
}
</style>

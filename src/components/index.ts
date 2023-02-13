const components = import.meta.globEager("./*/index.vue");
export default {
  install(app: any) {
    Object.keys(components).forEach((key) => {
      let component = components[key].default;
      app.component(component.name, component);
    });
  },
};

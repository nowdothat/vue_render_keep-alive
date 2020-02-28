import slectGroup from "./select.vue";
export default {
  name: "functional-x",
  functional: true,
  render(createElement, context) {
    console.log(context.props.switchParams);
    switch (context.props.switchParams) {
      case "x1":
        return createElement("div", {}, "哈喽");
      default:
        return createElement(slectGroup);
    }
  }
};

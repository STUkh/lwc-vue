import { Fragment as _Fragment } from "c/vueLib";
import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "c/vueLib";
const Test = props => _createVNode(_Fragment, null, [_createVNode("div", {
  "on:click": props.triggerEvent
}, [_createVNode("span", null, [_createTextVNode("Hello from ")]), _createTextVNode(" "), _createVNode("strong", null, [props.name])]), _createVNode("div", null, [_createTextVNode("Title: "), props.title])]);
export default Test;
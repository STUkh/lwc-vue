import { Fragment as _Fragment } from "c/vueLib";
import { createTextVNode as _createTextVNode, createVNode as _createVNode } from "c/vueLib";
export default (props => _createVNode(_Fragment, null, [_createVNode("div", null, [props.items.map(_ref => {
  let {
    id,
    title
  } = _ref;
  return _createVNode("button", {
    "class": "slds-button slds-button_brand",
    "key": id,
    "onClick": event => props.triggerEvent(event, 'whatever')
  }, [_createTextVNode("Hello from "), _createVNode("strong", null, [props.name]), _createTextVNode(" "), title]);
})]), _createVNode("div", null, [_createTextVNode("Title: "), props.title])]));
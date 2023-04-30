import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "c/vueLib"

const _hoisted_1 = { class: "example-component" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("h1", null, _toDisplayString(_ctx.message), 1 /* TEXT */),
    _createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleButtonClick && _ctx.handleButtonClick(...args)))
    }, "Click me")
  ]))
}
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "c/vueLib"

const _hoisted_1 = /*#__PURE__*/_createElementVNode("h1", null, "Home", -1 /* HOISTED */)

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", null, [
    _hoisted_1,
    _createElementVNode("p", null, "Counter: " + _toDisplayString(_ctx.counter.count), 1 /* TEXT */),
    _createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.counter.increment && _ctx.counter.increment(...args)))
    }, "Increment")
  ]))
}
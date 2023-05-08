import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "c/vueLib"

const _withScopeId = n => (_pushScopeId("data-v-vueaboutpage"),n=n(),_popScopeId(),n)
const _hoisted_1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode("h1", null, "Home", -1 /* HOISTED */))

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", null, [
    _hoisted_1,
    _createElementVNode("p", null, "Date Num: " + _toDisplayString(_ctx.aboutStore.date), 1 /* TEXT */),
    _createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.aboutStore.getDate && _ctx.aboutStore.getDate(...args)))
    }, "Get Date Number")
  ]))
}
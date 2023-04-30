import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode } from "c/vueLib"

export function render(_ctx, _cache) {
  const _component_router_link = _resolveComponent("router-link")
  const _component_router_view = _resolveComponent("router-view")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("div", null, [
      _createElementVNode("button", {
        class: "slds-button slds-button_brand",
        onClick: _cache[0] || (_cache[0] = (event) => _ctx.triggerEvent(event, 'whatever'))
      }, [
        _createTextVNode(" Hello from "),
        _createElementVNode("strong", null, _toDisplayString(_ctx.name), 1 /* TEXT */)
      ])
    ]),
    _createElementVNode("div", null, "Title: " + _toDisplayString(_ctx.title), 1 /* TEXT */),
    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.items, (item) => {
      return (_openBlock(), _createElementBlock("div", {
        key: item.id
      }, " Repeat " + _toDisplayString(item.title), 1 /* TEXT */))
    }), 128 /* KEYED_FRAGMENT */)),
    _createElementVNode("p", null, [
      _createVNode(_component_router_link, { to: "/" }, {
        default: _withCtx(() => [
          _createTextVNode("Go to Home")
        ]),
        _: 1 /* STABLE */
      }),
      _createTextVNode(" | "),
      _createVNode(_component_router_link, { to: "/about" }, {
        default: _withCtx(() => [
          _createTextVNode("Go to About")
        ]),
        _: 1 /* STABLE */
      }),
      _createTextVNode(" | "),
      _createVNode(_component_router_link, { to: "/contact" }, {
        default: _withCtx(() => [
          _createTextVNode("Go to Contact")
        ]),
        _: 1 /* STABLE */
      }),
      _createTextVNode(" | "),
      _createVNode(_component_router_link, { to: "/test" }, {
        default: _withCtx(() => [
          _createTextVNode("Go to Test")
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _createVNode(_component_router_view)
  ], 64 /* STABLE_FRAGMENT */))
}
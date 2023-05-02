import { createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, createVNode as _createVNode, normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "c/vueLib"

const _withScopeId = n => (_pushScopeId("data-v-vuecontactpage"),n=n(),_popScopeId(),n)
const _hoisted_1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode("label", {
  for: "email",
  class: "slds-form-element__label"
}, "Your Email", -1 /* HOISTED */))
const _hoisted_2 = {
  class: "slds-form-element__control",
  "data-v-vuecontactpage": ""
}
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode("label", {
  for: "password",
  class: "slds-form-element__label"
}, "Your Password", -1 /* HOISTED */))
const _hoisted_4 = {
  class: "slds-form-element__control",
  "data-v-vuecontactpage": ""
}
const _hoisted_5 = {
  class: "contact-form__submit-holder",
  "data-v-vuecontactpage": ""
}
const _hoisted_6 = ["disabled"]

export function render(_ctx, _cache) {
  const _component_Field = _resolveComponent("Field")
  const _component_ErrorMessage = _resolveComponent("ErrorMessage")
  const _component_Form = _resolveComponent("Form")

  return (_openBlock(), _createBlock(_component_Form, {
    class: "slds-form-element contact-form",
    "data-v-vuecontactpage": "",
    onSubmit: _ctx.onSubmit,
    onInvalidSubmit: _ctx.onInvalidSubmit,
    "validation-schema": _ctx.schema,
    "initial-values": _ctx.initialValues
  }, {
    default: _withCtx(({ errors, meta: formMeta }) => [
      _createElementVNode("div", {
        class: _normalizeClass(["slds-form-element", {'slds-has-error': errors.email}]),
        "data-v-vuecontactpage": ""
      }, [
        _hoisted_1,
        _createElementVNode("div", _hoisted_2, [
          _createVNode(_component_Field, {
            id: "email",
            name: "email",
            type: "email",
            class: "slds-input"
          })
        ]),
        _createVNode(_component_ErrorMessage, {
          name: "email",
          class: "slds-form-element__help",
          "data-v-vuecontactpage": ""
        })
      ], 2 /* CLASS */),
      _createElementVNode("div", {
        class: _normalizeClass(["slds-form-element", {'slds-has-error': errors.password}]),
        "data-v-vuecontactpage": ""
      }, [
        _hoisted_3,
        _createElementVNode("div", _hoisted_4, [
          _createVNode(_component_Field, {
            id: "password",
            name: "password",
            type: "password",
            class: "slds-input",
            "data-v-vuecontactpage": ""
          })
        ]),
        _createVNode(_component_ErrorMessage, {
          name: "password",
          class: "slds-form-element__help",
          "data-v-vuecontactpage": ""
        })
      ], 2 /* CLASS */),
      _createElementVNode("div", _hoisted_5, [
        _createElementVNode("button", {
          disabled: !formMeta.valid
        }, "Submit", 8 /* PROPS */, _hoisted_6)
      ])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onSubmit", "onInvalidSubmit", "validation-schema", "initial-values"]))
}
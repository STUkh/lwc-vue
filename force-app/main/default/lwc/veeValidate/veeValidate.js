import*as __WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__ from "c/vueLib";var __webpack_require__={};(()=>{__webpack_require__.d=(exports,definition)=>{for(var key in definition){if(__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)){Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})}}}})();(()=>{__webpack_require__.o=(obj,prop)=>(Object.prototype.hasOwnProperty.call(obj,prop))})();var __webpack_exports__={};__webpack_require__.d(__webpack_exports__,{"Bc":()=>(ErrorMessage),"gN":()=>(Field),"F2":()=>(FieldArray),"ZU":()=>(FieldContextKey),"l0":()=>(Form),"Xy":()=>(FormContextKey),"He":()=>(IS_ABSENT),"jQ":()=>(configure),"aH":()=>(defineRule),"U$":()=>(useField),"Dq":()=>(useFieldArray),"qk":()=>(useFieldError),"K4":()=>(useFieldValue),"cI":()=>(useForm),"VA":()=>(useFormErrors),"fq":()=>(useFormValues),"x0":()=>(useIsFieldDirty),"W3":()=>(useIsFieldTouched),"r7":()=>(useIsFieldValid),"_O":()=>(useIsFormDirty),"AI":()=>(useIsFormTouched),"XH":()=>(useIsFormValid),"yL":()=>(useIsSubmitting),"W6":()=>(useResetForm),"g9":()=>(useSubmitCount),"_J":()=>(useSubmitForm),"TF":()=>(useValidateField),"D4":()=>(useValidateForm),"Gu":()=>(validate),"FF":()=>(validateObjectSchema)});var x=y=>{var x={};__webpack_require__.d(x,y);return x}
var y=x=>()=>x
const vueLib_namespaceObject=x({["computed"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.computed,["defineComponent"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.defineComponent,["getCurrentInstance"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.getCurrentInstance,["h"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.h,["inject"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.inject,["isRef"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.isRef,["markRaw"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.markRaw,["nextTick"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.nextTick,["onBeforeUnmount"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.onBeforeUnmount,["onMounted"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.onMounted,["provide"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.provide,["reactive"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.reactive,["ref"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.ref,["resolveDynamicComponent"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.resolveDynamicComponent,["toRef"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.toRef,["unref"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.unref,["warn"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.warn,["watch"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.watch,["watchEffect"]:()=>__WEBPACK_EXTERNAL_MODULE_c_vueLib_64e58294__.watchEffect});
/**
  * vee-validate v4.8.6
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */
function isCallable(fn){return typeof fn==='function'}
function isNullOrUndefined(value){return value===null||value===undefined}
const isObject=(obj)=>obj!==null&&!!obj&&typeof obj==='object'&&!Array.isArray(obj);function isIndex(value){return Number(value)>=0}
function toNumber(value){const n=parseFloat(value);return isNaN(n)?value:n}
const RULES={};function defineRule(id,validator){guardExtend(id,validator);RULES[id]=validator}
function resolveRule(id){return RULES[id]}
function guardExtend(id,validator){if(isCallable(validator)){return}
throw new Error(`Extension Error: The validator '${id}' must be a function.`)}
const FormContextKey=Symbol('vee-validate-form');const FieldContextKey=Symbol('vee-validate-field-instance');const IS_ABSENT=Symbol('Default empty value');const isClient=typeof window!=='undefined';function isLocator(value){return isCallable(value)&&!!value.__locatorRef}
function isTypedSchema(value){return!!value&&isCallable(value.parse)&&value.__type==='VVTypedSchema'}
function isYupValidator(value){return!!value&&isCallable(value.validate)}
function hasCheckedAttr(type){return type==='checkbox'||type==='radio'}
function isContainerValue(value){return isObject(value)||Array.isArray(value)}
function isEmptyContainer(value){if(Array.isArray(value)){return value.length===0}
return isObject(value)&&Object.keys(value).length===0}
function isNotNestedPath(path){return/^\[.+\]$/i.test(path)}
function isNativeMultiSelect(el){return isNativeSelect(el)&&el.multiple}
function isNativeSelect(el){return el.tagName==='SELECT'}
function isNativeMultiSelectNode(tag,attrs){const hasTruthyBindingValue=![!1,null,undefined,0].includes(attrs.multiple)&&!Number.isNaN(attrs.multiple);return tag==='select'&&'multiple' in attrs&&hasTruthyBindingValue}
function shouldHaveValueBinding(tag,attrs){return!isNativeMultiSelectNode(tag,attrs)&&attrs.type!=='file'&&!hasCheckedAttr(attrs.type)}
function isFormSubmitEvent(evt){return isEvent(evt)&&evt.target&&'submit' in evt.target}
function isEvent(evt){if(!evt){return!1}
if(typeof Event!=='undefined'&&isCallable(Event)&&evt instanceof Event){return!0}
if(evt&&evt.srcElement){return!0}
return!1}
function isPropPresent(obj,prop){return prop in obj&&obj[prop]!==IS_ABSENT}
function isEqual(a,b){if(a===b)
return!0;if(a&&b&&typeof a==='object'&&typeof b==='object'){if(a.constructor!==b.constructor)
return!1;var length,i,keys;if(Array.isArray(a)){length=a.length;if(length!=b.length)
return!1;for(i=length;i--!==0;)
if(!isEqual(a[i],b[i]))
return!1;return!0}
if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)
return!1;for(i of a.entries())
if(!b.has(i[0]))
return!1;for(i of a.entries())
if(!isEqual(i[1],b.get(i[0])))
return!1;return!0}
if(isFile(a)&&isFile(b)){if(a.size!==b.size)
return!1;if(a.name!==b.name)
return!1;if(a.lastModified!==b.lastModified)
return!1;if(a.type!==b.type)
return!1;return!0}
if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)
return!1;for(i of a.entries())
if(!b.has(i[0]))
return!1;return!0}
if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){length=a.length;if(length!=b.length)
return!1;for(i=length;i--!==0;)
if(a[i]!==b[i])
return!1;return!0}
if(a.constructor===RegExp)
return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)
return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)
return a.toString()===b.toString();keys=Object.keys(a);length=keys.length;if(length!==Object.keys(b).length)
return!1;for(i=length;i--!==0;)
if(!Object.prototype.hasOwnProperty.call(b,keys[i]))
return!1;for(i=length;i--!==0;){var key=keys[i];if(!isEqual(a[key],b[key]))
return!1}
return!0}
return a!==a&&b!==b}
function isFile(a){if(!isClient){return!1}
return a instanceof File}
function set(obj,key,val){if(typeof val.value==='object')val.value=klona(val.value);if(!val.enumerable||val.get||val.set||!val.configurable||!val.writable||key==='__proto__'){Object.defineProperty(obj,key,val)}else obj[key]=val.value}
function klona(x){if(typeof x!=='object')return x;var i=0,k,list,tmp,str=Object.prototype.toString.call(x);if(str==='[object Object]'){tmp=Object.create(x.__proto__||null)}else if(str==='[object Array]'){tmp=Array(x.length)}else if(str==='[object Set]'){tmp=new Set;x.forEach(function(val){tmp.add(klona(val))})}else if(str==='[object Map]'){tmp=new Map;x.forEach(function(val,key){tmp.set(klona(key),klona(val))})}else if(str==='[object Date]'){tmp=new Date(+x)}else if(str==='[object RegExp]'){tmp=new RegExp(x.source,x.flags)}else if(str==='[object DataView]'){tmp=new x.constructor(klona(x.buffer))}else if(str==='[object ArrayBuffer]'){tmp=x.slice(0)}else if(str.slice(-6)==='Array]'){tmp=new x.constructor(x)}
if(tmp){for(list=Object.getOwnPropertySymbols(x);i<list.length;i++){set(tmp,list[i],Object.getOwnPropertyDescriptor(x,list[i]))}
for(i=0,list=Object.getOwnPropertyNames(x);i<list.length;i++){if(Object.hasOwnProperty.call(tmp,k=list[i])&&tmp[k]===x[k])continue;set(tmp,k,Object.getOwnPropertyDescriptor(x,k))}}
return tmp||x}
function cleanupNonNestedPath(path){if(isNotNestedPath(path)){return path.replace(/\[|\]/gi,'')}
return path}
function getFromPath(object,path,fallback){if(!object){return fallback}
if(isNotNestedPath(path)){return object[cleanupNonNestedPath(path)]}
const resolvedValue=(path||'').split(/\.|\[(\d+)\]/).filter(Boolean).reduce((acc,propKey)=>{if(isContainerValue(acc)&&propKey in acc){return acc[propKey]}
return fallback},object);return resolvedValue}
function setInPath(object,path,value){if(isNotNestedPath(path)){object[cleanupNonNestedPath(path)]=value;return}
const keys=path.split(/\.|\[(\d+)\]/).filter(Boolean);let acc=object;for(let i=0;i<keys.length;i++){if(i===keys.length-1){acc[keys[i]]=value;return}
if(!(keys[i]in acc)||isNullOrUndefined(acc[keys[i]])){acc[keys[i]]=isIndex(keys[i+1])?[]:{}}
acc=acc[keys[i]]}}
function unset(object,key){if(Array.isArray(object)&&isIndex(key)){object.splice(Number(key),1);return}
if(isObject(object)){delete object[key]}}
function unsetPath(object,path){if(isNotNestedPath(path)){delete object[cleanupNonNestedPath(path)];return}
const keys=path.split(/\.|\[(\d+)\]/).filter(Boolean);let acc=object;for(let i=0;i<keys.length;i++){if(i===keys.length-1){unset(acc,keys[i]);break}
if(!(keys[i]in acc)||isNullOrUndefined(acc[keys[i]])){break}
acc=acc[keys[i]]}
const pathValues=keys.map((_,idx)=>{return getFromPath(object,keys.slice(0,idx).join('.'))});for(let i=pathValues.length-1;i>=0;i--){if(!isEmptyContainer(pathValues[i])){continue}
if(i===0){unset(object,keys[0]);continue}
unset(pathValues[i-1],keys[i-1])}}
function keysOf(record){return Object.keys(record)}
function injectWithSelf(symbol,def=undefined){const vm=(0,vueLib_namespaceObject.getCurrentInstance)();return(vm===null||vm===void 0?void 0:vm.provides[symbol])||(0,vueLib_namespaceObject.inject)(symbol,def)}
function warn(message){(0,vueLib_namespaceObject.warn)(`[vee-validate]: ${message}`)}
function normalizeField(field){if(Array.isArray(field)){return field[0]}
return field}
function resolveNextCheckboxValue(currentValue,checkedValue,uncheckedValue){if(Array.isArray(currentValue)){const newVal=[...currentValue];const idx=newVal.findIndex(v=>isEqual(v,checkedValue));idx>=0?newVal.splice(idx,1):newVal.push(checkedValue);return newVal}
return isEqual(currentValue,checkedValue)?uncheckedValue:checkedValue}
function throttle(func,limit){let inThrottle;let lastResult;return function(...args){const context=this;if(!inThrottle){inThrottle=!0;setTimeout(()=>(inThrottle=!1),limit);lastResult=func.apply(context,args)}
return lastResult}}
function debounceAsync(inner,ms=0){let timer=null;let resolves=[];return function(...args){if(timer){window.clearTimeout(timer)}
timer=window.setTimeout(()=>{const result=inner(...args);resolves.forEach(r=>r(result));resolves=[]},ms);return new Promise(resolve=>resolves.push(resolve))}}
function applyModelModifiers(value,modifiers){if(!isObject(modifiers)){return value}
if(modifiers.number){return toNumber(value)}
return value}
function withLatest(fn,onDone){let latestRun;return async function runLatest(...args){const pending=fn(...args);latestRun=pending;const result=await pending;if(pending!==latestRun){return result}
latestRun=undefined;onDone(result,args);return result}}
function computedDeep({get,set}){const baseRef=(0,vueLib_namespaceObject.ref)(klona(get()));(0,vueLib_namespaceObject.watch)(get,newValue=>{if(isEqual(newValue,baseRef.value)){return}
baseRef.value=klona(newValue)},{deep:!0,});(0,vueLib_namespaceObject.watch)(baseRef,newValue=>{if(isEqual(newValue,get())){return}
set(klona(newValue))},{deep:!0,});return baseRef}
function unravel(value){if(isCallable(value)){return value()}
return(0,vueLib_namespaceObject.unref)(value)}
function lazyToRef(value){return(0,vueLib_namespaceObject.computed)(()=>unravel(value))}
const normalizeChildren=(tag,context,slotProps)=>{if(!context.slots.default){return context.slots.default}
if(typeof tag==='string'||!tag){return context.slots.default(slotProps())}
return{default:()=>{var _a,_b;return(_b=(_a=context.slots).default)===null||_b===void 0?void 0:_b.call(_a,slotProps())},}};function getBoundValue(el){if(hasValueBinding(el)){return el._value}
return undefined}
function hasValueBinding(el){return'_value' in el}
function normalizeEventValue(value){if(!isEvent(value)){return value}
const input=value.target;if(hasCheckedAttr(input.type)&&hasValueBinding(input)){return getBoundValue(input)}
if(input.type==='file'&&input.files){const files=Array.from(input.files);return input.multiple?files:files[0]}
if(isNativeMultiSelect(input)){return Array.from(input.options).filter(opt=>opt.selected&&!opt.disabled).map(getBoundValue)}
if(isNativeSelect(input)){const selectedOption=Array.from(input.options).find(opt=>opt.selected);return selectedOption?getBoundValue(selectedOption):input.value}
return input.value}
function normalizeRules(rules){const acc={};Object.defineProperty(acc,'_$$isNormalized',{value:!0,writable:!1,enumerable:!1,configurable:!1,});if(!rules){return acc}
if(isObject(rules)&&rules._$$isNormalized){return rules}
if(isObject(rules)){return Object.keys(rules).reduce((prev,curr)=>{const params=normalizeParams(rules[curr]);if(rules[curr]!==!1){prev[curr]=buildParams(params)}
return prev},acc)}
if(typeof rules!=='string'){return acc}
return rules.split('|').reduce((prev,rule)=>{const parsedRule=parseRule(rule);if(!parsedRule.name){return prev}
prev[parsedRule.name]=buildParams(parsedRule.params);return prev},acc)}
function normalizeParams(params){if(params===!0){return[]}
if(Array.isArray(params)){return params}
if(isObject(params)){return params}
return[params]}
function buildParams(provided){const mapValueToLocator=(value)=>{if(typeof value==='string'&&value[0]==='@'){return createLocator(value.slice(1))}
return value};if(Array.isArray(provided)){return provided.map(mapValueToLocator)}
if(provided instanceof RegExp){return[provided]}
return Object.keys(provided).reduce((prev,key)=>{prev[key]=mapValueToLocator(provided[key]);return prev},{})}
const parseRule=(rule)=>{let params=[];const name=rule.split(':')[0];if(rule.includes(':')){params=rule.split(':').slice(1).join(':').split(',')}
return{name,params}};function createLocator(value){const locator=(crossTable)=>{const val=getFromPath(crossTable,value)||crossTable[value];return val};locator.__locatorRef=value;return locator}
function extractLocators(params){if(Array.isArray(params)){return params.filter(isLocator)}
return keysOf(params).filter(key=>isLocator(params[key])).map(key=>params[key])}
const DEFAULT_CONFIG={generateMessage:({field})=>`${field} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0,};let currentConfig=Object.assign({},DEFAULT_CONFIG);const getConfig=()=>currentConfig;const setConfig=(newConf)=>{currentConfig=Object.assign(Object.assign({},currentConfig),newConf)};const configure=setConfig;async function validate(value,rules,options={}){const shouldBail=options===null||options===void 0?void 0:options.bails;const field={name:(options===null||options===void 0?void 0:options.name)||'{field}',rules,label:options===null||options===void 0?void 0:options.label,bails:shouldBail!==null&&shouldBail!==void 0?shouldBail:!0,formData:(options===null||options===void 0?void 0:options.values)||{},};const result=await _validate(field,value);const errors=result.errors;return{errors,valid:!errors.length,}}
async function _validate(field,value){if(isTypedSchema(field.rules)||isYupValidator(field.rules)){return validateFieldWithTypedSchema(value,field.rules)}
if(isCallable(field.rules)||Array.isArray(field.rules)){const ctx={field:field.label||field.name,name:field.name,label:field.label,form:field.formData,value,};const pipeline=Array.isArray(field.rules)?field.rules:[field.rules];const length=pipeline.length;const errors=[];for(let i=0;i<length;i++){const rule=pipeline[i];const result=await rule(value,ctx);const isValid=typeof result!=='string'&&result;if(isValid){continue}
const message=typeof result==='string'?result:_generateFieldError(ctx);errors.push(message);if(field.bails){return{errors,}}}
return{errors,}}
const normalizedContext=Object.assign(Object.assign({},field),{rules:normalizeRules(field.rules)});const errors=[];const rulesKeys=Object.keys(normalizedContext.rules);const length=rulesKeys.length;for(let i=0;i<length;i++){const rule=rulesKeys[i];const result=await _test(normalizedContext,value,{name:rule,params:normalizedContext.rules[rule],});if(result.error){errors.push(result.error);if(field.bails){return{errors,}}}}
return{errors,}}
function isYupError(err){return!!err&&err.name==='ValidationError'}
function yupToTypedSchema(yupSchema){const schema={__type:'VVTypedSchema',async parse(values){var _a;try{const output=await yupSchema.validate(values,{abortEarly:!1});return{output,errors:[],}}catch(err){if(!isYupError(err)){throw err}
if(!((_a=err.inner)===null||_a===void 0?void 0:_a.length)&&err.errors.length){return{errors:[{path:err.path,errors:err.errors}]}}
const errors=err.inner.reduce((acc,curr)=>{const path=curr.path||'';if(!acc[path]){acc[path]={errors:[],path}}
acc[path].errors.push(...curr.errors);return acc},{});return{errors:Object.values(errors)}}},};return schema}
async function validateFieldWithTypedSchema(value,schema){const typedSchema=isTypedSchema(schema)?schema:yupToTypedSchema(schema);const result=await typedSchema.parse(value);const messages=[];for(const error of result.errors){if(error.errors.length){messages.push(...error.errors)}}
return{errors:messages,}}
async function _test(field,value,rule){const validator=resolveRule(rule.name);if(!validator){throw new Error(`No such validator '${rule.name}' exists.`)}
const params=fillTargetValues(rule.params,field.formData);const ctx={field:field.label||field.name,name:field.name,label:field.label,value,form:field.formData,rule:Object.assign(Object.assign({},rule),{params}),};const result=await validator(value,params,ctx);if(typeof result==='string'){return{error:result,}}
return{error:result?undefined:_generateFieldError(ctx),}}
function _generateFieldError(fieldCtx){const message=getConfig().generateMessage;if(!message){return'Field is invalid'}
return message(fieldCtx)}
function fillTargetValues(params,crossTable){const normalize=(value)=>{if(isLocator(value)){return value(crossTable)}
return value};if(Array.isArray(params)){return params.map(normalize)}
return Object.keys(params).reduce((acc,param)=>{acc[param]=normalize(params[param]);return acc},{})}
async function validateTypedSchema(schema,values){const typedSchema=isTypedSchema(schema)?schema:yupToTypedSchema(schema);const validationResult=await typedSchema.parse(values);const results={};const errors={};for(const error of validationResult.errors){const messages=error.errors;const path=(error.path||'').replace(/\["(\d+)"\]/g,(_,m)=>{return `[${m}]`});results[path]={valid:!messages.length,errors:messages};if(messages.length){errors[path]=messages[0]}}
return{valid:!validationResult.errors.length,results,errors,values:validationResult.value,}}
async function validateObjectSchema(schema,values,opts){const paths=keysOf(schema);const validations=paths.map(async(path)=>{var _a,_b,_c;const strings=(_a=opts===null||opts===void 0?void 0:opts.names)===null||_a===void 0?void 0:_a[path];const fieldResult=await validate(getFromPath(values,path),schema[path],{name:(strings===null||strings===void 0?void 0:strings.name)||path,label:strings===null||strings===void 0?void 0:strings.label,values:values,bails:(_c=(_b=opts===null||opts===void 0?void 0:opts.bailsMap)===null||_b===void 0?void 0:_b[path])!==null&&_c!==void 0?_c:!0,});return Object.assign(Object.assign({},fieldResult),{path})});let isAllValid=!0;const validationResults=await Promise.all(validations);const results={};const errors={};for(const result of validationResults){results[result.path]={valid:result.valid,errors:result.errors,};if(!result.valid){isAllValid=!1;errors[result.path]=result.errors[0]}}
return{valid:isAllValid,results,errors,}}
let ID_COUNTER=0;function useFieldState(path,init){const{value,initialValue,setInitialValue}=_useFieldValue(path,init.modelValue,init.form);const{errorMessage,errors,setErrors}=_useFieldErrors(path,init.form);const meta=_useFieldMeta(value,initialValue,errors);const id=ID_COUNTER>=Number.MAX_SAFE_INTEGER?0:++ID_COUNTER;function setState(state){var _a;if('value' in state){value.value=state.value}
if('errors' in state){setErrors(state.errors)}
if('touched' in state){meta.touched=(_a=state.touched)!==null&&_a!==void 0?_a:meta.touched}
if('initialValue' in state){setInitialValue(state.initialValue)}}
return{id,path,value,initialValue,meta,errors,errorMessage,setState,}}
function _useFieldValue(path,modelValue,form){const modelRef=(0,vueLib_namespaceObject.ref)((0,vueLib_namespaceObject.unref)(modelValue));function resolveInitialValue(){if(!form){return(0,vueLib_namespaceObject.unref)(modelRef)}
return getFromPath(form.meta.value.initialValues,(0,vueLib_namespaceObject.unref)(path),(0,vueLib_namespaceObject.unref)(modelRef))}
function setInitialValue(value){if(!form){modelRef.value=value;return}
form.stageInitialValue((0,vueLib_namespaceObject.unref)(path),value,!0)}
const initialValue=(0,vueLib_namespaceObject.computed)(resolveInitialValue);if(!form){const value=(0,vueLib_namespaceObject.ref)(resolveInitialValue());return{value,initialValue,setInitialValue,}}
const currentValue=resolveModelValue(modelValue,form,initialValue,path);form.stageInitialValue((0,vueLib_namespaceObject.unref)(path),currentValue,!0);const value=(0,vueLib_namespaceObject.computed)({get(){return getFromPath(form.values,(0,vueLib_namespaceObject.unref)(path))},set(newVal){form.setFieldValue((0,vueLib_namespaceObject.unref)(path),newVal)},});return{value,initialValue,setInitialValue,}}
function resolveModelValue(modelValue,form,initialValue,path){if((0,vueLib_namespaceObject.isRef)(modelValue)){return(0,vueLib_namespaceObject.unref)(modelValue)}
if(modelValue!==undefined){return modelValue}
return getFromPath(form.values,(0,vueLib_namespaceObject.unref)(path),(0,vueLib_namespaceObject.unref)(initialValue))}
function _useFieldMeta(currentValue,initialValue,errors){const meta=(0,vueLib_namespaceObject.reactive)({touched:!1,pending:!1,valid:!0,validated:!!(0,vueLib_namespaceObject.unref)(errors).length,initialValue:(0,vueLib_namespaceObject.computed)(()=>(0,vueLib_namespaceObject.unref)(initialValue)),dirty:(0,vueLib_namespaceObject.computed)(()=>{return!isEqual((0,vueLib_namespaceObject.unref)(currentValue),(0,vueLib_namespaceObject.unref)(initialValue))}),});(0,vueLib_namespaceObject.watch)(errors,value=>{meta.valid=!value.length},{immediate:!0,flush:'sync',});return meta}
function _useFieldErrors(path,form){function normalizeErrors(messages){if(!messages){return[]}
return Array.isArray(messages)?messages:[messages]}
if(!form){const errors=(0,vueLib_namespaceObject.ref)([]);return{errors,errorMessage:(0,vueLib_namespaceObject.computed)(()=>errors.value[0]),setErrors:(messages)=>{errors.value=normalizeErrors(messages)},}}
const errors=(0,vueLib_namespaceObject.computed)(()=>form.errorBag.value[(0,vueLib_namespaceObject.unref)(path)]||[]);return{errors,errorMessage:(0,vueLib_namespaceObject.computed)(()=>errors.value[0]),setErrors:(messages)=>{form.setFieldErrorBag((0,vueLib_namespaceObject.unref)(path),normalizeErrors(messages))},}}
function installDevtoolsPlugin(app){if((!1)){}}
const DEVTOOLS_FORMS={};const DEVTOOLS_FIELDS={};let API;const refreshInspector=throttle(()=>{setTimeout(async()=>{await(0,vueLib_namespaceObject.nextTick)();API===null||API===void 0?void 0:API.sendInspectorState(INSPECTOR_ID);API===null||API===void 0?void 0:API.sendInspectorTree(INSPECTOR_ID)},100)},100);function registerFormWithDevTools(form){const vm=getCurrentInstance();if(!API){const app=vm===null||vm===void 0?void 0:vm.appContext.app;if(!app){return}
installDevtoolsPlugin(app)}
DEVTOOLS_FORMS[form.formId]=Object.assign({},form);DEVTOOLS_FORMS[form.formId]._vm=vm;onUnmounted(()=>{delete DEVTOOLS_FORMS[form.formId];refreshInspector()});refreshInspector()}
function registerSingleFieldWithDevtools(field){const vm=getCurrentInstance();if(!API){const app=vm===null||vm===void 0?void 0:vm.appContext.app;if(!app){return}
installDevtoolsPlugin(app)}
DEVTOOLS_FIELDS[field.id]=Object.assign({},field);DEVTOOLS_FIELDS[field.id]._vm=vm;onUnmounted(()=>{delete DEVTOOLS_FIELDS[field.id];refreshInspector()});refreshInspector()}
const INSPECTOR_ID='vee-validate-inspector';const COLORS={error:0xbd4b4b,success:0x06d77b,unknown:0x54436b,white:0xffffff,black:0x000000,blue:0x035397,purple:0xb980f0,orange:0xf5a962,gray:0xbbbfca,};let SELECTED_NODE=null;function setupApiHooks(api){API=api;api.addInspector({id:INSPECTOR_ID,icon:'rule',label:'vee-validate',noSelectionText:'Select a vee-validate node to inspect',actions:[{icon:'done_outline',tooltip:'Validate selected item',action:async()=>{if(!SELECTED_NODE){console.error('There is not a valid selected vee-validate node or component');return}
await SELECTED_NODE.validate()},},{icon:'delete_sweep',tooltip:'Clear validation state of the selected item',action:()=>{if(!SELECTED_NODE){console.error('There is not a valid selected vee-validate node or component');return}
if('id' in SELECTED_NODE){SELECTED_NODE.resetField();return}
SELECTED_NODE.resetForm()},},],});api.on.getInspectorTree(payload=>{if(payload.inspectorId!==INSPECTOR_ID){return}
const forms=Object.values(DEVTOOLS_FORMS);const fields=Object.values(DEVTOOLS_FIELDS);payload.rootNodes=[...forms.map(mapFormForDevtoolsInspector),...fields.map(field=>mapFieldForDevtoolsInspector(field)),]});api.on.getInspectorState((payload,ctx)=>{if(payload.inspectorId!==INSPECTOR_ID||ctx.currentTab!==`custom-inspector:${INSPECTOR_ID}`){return}
const{form,field,type}=decodeNodeId(payload.nodeId);if(form&&type==='form'){payload.state=buildFormState(form);SELECTED_NODE=form;return}
if(field&&type==='field'){payload.state=buildFieldState(field);SELECTED_NODE=field;return}
SELECTED_NODE=null})}
function mapFormForDevtoolsInspector(form){const{textColor,bgColor}=getTagTheme(form);const formTreeNodes={};Object.values(form.fieldsByPath.value).forEach(field=>{const fieldInstance=Array.isArray(field)?field[0]:field;if(!fieldInstance){return}
setInPath(formTreeNodes,unref(fieldInstance.name),mapFieldForDevtoolsInspector(fieldInstance,form))});function buildFormTree(tree,path=[]){const key=[...path].pop();if('id' in tree){return Object.assign(Object.assign({},tree),{label:key||tree.label})}
if(isObject(tree)){return{id:`${path.join('.')}`,label:key||'',children:Object.keys(tree).map(key=>buildFormTree(tree[key],[...path,key])),}}
if(Array.isArray(tree)){return{id:`${path.join('.')}`,label:`${key}[]`,children:tree.map((c,idx)=>buildFormTree(c,[...path,String(idx)])),}}
return{id:'',label:'',children:[]}}
const{children}=buildFormTree(formTreeNodes);return{id:encodeNodeId(form),label:'Form',children,tags:[{label:'Form',textColor,backgroundColor:bgColor,},{label:`${Object.keys(form.fieldsByPath.value).length} fields`,textColor:COLORS.white,backgroundColor:COLORS.unknown,},],}}
function mapFieldForDevtoolsInspector(field,form){const fieldInstance=normalizeField(field);const{textColor,bgColor}=getTagTheme(fieldInstance);const isGroup=Array.isArray(field)&&field.length>1;return{id:encodeNodeId(form,fieldInstance,!isGroup),label:unref(fieldInstance.name),children:Array.isArray(field)?field.map(fieldItem=>mapFieldForDevtoolsInspector(fieldItem,form)):undefined,tags:[isGroup?undefined:{label:'Field',textColor,backgroundColor:bgColor,},!form?{label:'Standalone',textColor:COLORS.black,backgroundColor:COLORS.gray,}:undefined,!isGroup&&fieldInstance.type==='checkbox'?{label:'Checkbox',textColor:COLORS.white,backgroundColor:COLORS.blue,}:undefined,!isGroup&&fieldInstance.type==='radio'?{label:'Radio',textColor:COLORS.white,backgroundColor:COLORS.purple,}:undefined,isGroup?{label:'Group',textColor:COLORS.black,backgroundColor:COLORS.orange,}:undefined,].filter(Boolean),}}
function encodeNodeId(form,field,encodeIndex=!0){const fieldPath=form?unref(field===null||field===void 0?void 0:field.name):field===null||field===void 0?void 0:field.id;const fieldGroup=fieldPath?form===null||form===void 0?void 0:form.fieldsByPath.value[fieldPath]:undefined;let idx;if(encodeIndex&&field&&Array.isArray(fieldGroup)){idx=fieldGroup.indexOf(field)}
const idObject={f:form===null||form===void 0?void 0:form.formId,ff:fieldPath,idx,type:field?'field':'form'};return btoa(JSON.stringify(idObject))}
function decodeNodeId(nodeId){try{const idObject=JSON.parse(atob(nodeId));const form=DEVTOOLS_FORMS[idObject.f];if(!form&&idObject.ff){const field=DEVTOOLS_FIELDS[idObject.ff];if(!field){return{}}
return{type:idObject.type,field,}}
if(!form){return{}}
const fieldGroup=form.fieldsByPath.value[idObject.ff];return{type:idObject.type,form,field:Array.isArray(fieldGroup)?fieldGroup[idObject.idx||0]:fieldGroup,}}catch(err){}
return{}}
function buildFieldState(field){const{errors,meta,value}=field;return{'Field state':[{key:'errors',value:errors.value},{key:'initialValue',value:meta.initialValue,},{key:'currentValue',value:value.value,},{key:'touched',value:meta.touched,},{key:'dirty',value:meta.dirty,},{key:'valid',value:meta.valid,},],}}
function buildFormState(form){const{errorBag,meta,values,isSubmitting,submitCount}=form;return{'Form state':[{key:'submitCount',value:submitCount.value,},{key:'isSubmitting',value:isSubmitting.value,},{key:'touched',value:meta.value.touched,},{key:'dirty',value:meta.value.dirty,},{key:'valid',value:meta.value.valid,},{key:'initialValues',value:meta.value.initialValues,},{key:'currentValues',value:values,},{key:'errors',value:keysOf(errorBag.value).reduce((acc,key)=>{var _a;const message=(_a=errorBag.value[key])===null||_a===void 0?void 0:_a[0];if(message){acc[key]=message}
return acc},{}),},],}}
function getTagTheme(fieldOrForm){const isValid='id' in fieldOrForm?fieldOrForm.meta.valid:fieldOrForm.meta.value.valid;return{bgColor:isValid?COLORS.success:COLORS.error,textColor:isValid?COLORS.black:COLORS.white,}}
function useField(path,rules,opts){if(hasCheckedAttr(opts===null||opts===void 0?void 0:opts.type)){return useCheckboxField(path,rules,opts)}
return _useField(path,rules,opts)}
function _useField(path,rules,opts){const{initialValue:modelValue,validateOnMount,bails,type,checkedValue,label,validateOnValueUpdate,uncheckedValue,controlled,keepValueOnUnmount,modelPropName,syncVModel,form:controlForm,}=normalizeOptions(opts);const injectedForm=controlled?injectWithSelf(FormContextKey):undefined;const form=controlForm||injectedForm;const name=lazyToRef(path);let markedForRemoval=!1;const{id,value,initialValue,meta,setState,errors,errorMessage}=useFieldState(name,{modelValue,form,});if(syncVModel){useVModel({value,prop:modelPropName,handleChange})}
const handleBlur=()=>{meta.touched=!0};const normalizedRules=(0,vueLib_namespaceObject.computed)(()=>{let rulesValue=(0,vueLib_namespaceObject.unref)(rules);const schema=(0,vueLib_namespaceObject.unref)(form===null||form===void 0?void 0:form.schema);if(schema&&!isYupValidator(schema)&&!isTypedSchema(schema)){rulesValue=extractRuleFromSchema(schema,(0,vueLib_namespaceObject.unref)(name))||rulesValue}
if(isYupValidator(rulesValue)||isTypedSchema(rulesValue)||isCallable(rulesValue)||Array.isArray(rulesValue)){return rulesValue}
return normalizeRules(rulesValue)});async function validateCurrentValue(mode){var _a,_b;if(form===null||form===void 0?void 0:form.validateSchema){return(_a=(await form.validateSchema(mode)).results[(0,vueLib_namespaceObject.unref)(name)])!==null&&_a!==void 0?_a:{valid:!0,errors:[]}}
return validate(value.value,normalizedRules.value,{name:(0,vueLib_namespaceObject.unref)(name),label:(0,vueLib_namespaceObject.unref)(label),values:(_b=form===null||form===void 0?void 0:form.values)!==null&&_b!==void 0?_b:{},bails,})}
const validateWithStateMutation=withLatest(async()=>{meta.pending=!0;meta.validated=!0;return validateCurrentValue('validated-only')},result=>{if(markedForRemoval){result.valid=!0;result.errors=[]}
setState({errors:result.errors});meta.pending=!1;return result});const validateValidStateOnly=withLatest(async()=>{return validateCurrentValue('silent')},result=>{if(markedForRemoval){result.valid=!0}
meta.valid=result.valid;return result});function validate$1(opts){if((opts===null||opts===void 0?void 0:opts.mode)==='silent'){return validateValidStateOnly()}
return validateWithStateMutation()}
function handleChange(e,shouldValidate=!0){const newValue=normalizeEventValue(e);value.value=newValue;if(!validateOnValueUpdate&&shouldValidate){validateWithStateMutation()}}(0,vueLib_namespaceObject.onMounted)(()=>{if(validateOnMount){return validateWithStateMutation()}
if(!form||!form.validateSchema){validateValidStateOnly()}});function setTouched(isTouched){meta.touched=isTouched}
let unwatchValue;let lastWatchedValue=klona(value.value);function watchValue(){unwatchValue=(0,vueLib_namespaceObject.watch)(value,(val,oldVal)=>{if(isEqual(val,oldVal)&&isEqual(val,lastWatchedValue)){return}
const validateFn=validateOnValueUpdate?validateWithStateMutation:validateValidStateOnly;validateFn();lastWatchedValue=klona(val)},{deep:!0,})}
watchValue();function resetField(state){var _a;unwatchValue===null||unwatchValue===void 0?void 0:unwatchValue();const newValue=state&&'value' in state?state.value:initialValue.value;setState({value:klona(newValue),initialValue:klona(newValue),touched:(_a=state===null||state===void 0?void 0:state.touched)!==null&&_a!==void 0?_a:!1,errors:(state===null||state===void 0?void 0:state.errors)||[],});meta.pending=!1;meta.validated=!1;validateValidStateOnly();(0,vueLib_namespaceObject.nextTick)(()=>{watchValue()})}
function setValue(newValue){value.value=newValue}
function setErrors(errors){setState({errors:Array.isArray(errors)?errors:[errors]})}
const field={id,name,label,value,meta,errors,errorMessage,type,checkedValue,uncheckedValue,bails,keepValueOnUnmount,resetField,handleReset:()=>resetField(),validate:validate$1,handleChange,handleBlur,setState,setTouched,setErrors,setValue,};(0,vueLib_namespaceObject.provide)(FieldContextKey,field);if((0,vueLib_namespaceObject.isRef)(rules)&&typeof(0,vueLib_namespaceObject.unref)(rules)!=='function'){(0,vueLib_namespaceObject.watch)(rules,(value,oldValue)=>{if(isEqual(value,oldValue)){return}
meta.validated?validateWithStateMutation():validateValidStateOnly()},{deep:!0,})}
if((!1)){}
if(!form){return field}
form.register(field);(0,vueLib_namespaceObject.onBeforeUnmount)(()=>{markedForRemoval=!0;form.unregister(field)});const dependencies=(0,vueLib_namespaceObject.computed)(()=>{const rulesVal=normalizedRules.value;if(!rulesVal||isCallable(rulesVal)||isYupValidator(rulesVal)||isTypedSchema(rulesVal)||Array.isArray(rulesVal)){return{}}
return Object.keys(rulesVal).reduce((acc,rule)=>{const deps=extractLocators(rulesVal[rule]).map((dep)=>dep.__locatorRef).reduce((depAcc,depName)=>{const depValue=getFromPath(form.values,depName)||form.values[depName];if(depValue!==undefined){depAcc[depName]=depValue}
return depAcc},{});Object.assign(acc,deps);return acc},{})});(0,vueLib_namespaceObject.watch)(dependencies,(deps,oldDeps)=>{if(!Object.keys(deps).length){return}
const shouldValidate=!isEqual(deps,oldDeps);if(shouldValidate){meta.validated?validateWithStateMutation():validateValidStateOnly()}});return field}
function normalizeOptions(opts){var _a;const defaults=()=>({initialValue:undefined,validateOnMount:!1,bails:!0,label:undefined,validateOnValueUpdate:!0,keepValueOnUnmount:undefined,modelPropName:'modelValue',syncVModel:!0,controlled:!0,});const isVModelSynced=(_a=opts===null||opts===void 0?void 0:opts.syncVModel)!==null&&_a!==void 0?_a:!0;const initialValue=isVModelSynced&&!('initialValue' in(opts||{}))?getCurrentModelValue((0,vueLib_namespaceObject.getCurrentInstance)(),(opts===null||opts===void 0?void 0:opts.modelPropName)||'modelValue'):opts===null||opts===void 0?void 0:opts.initialValue;if(!opts){return Object.assign(Object.assign({},defaults()),{initialValue})}
const checkedValue='valueProp' in opts?opts.valueProp:opts.checkedValue;const controlled='standalone' in opts?!opts.standalone:opts.controlled;return Object.assign(Object.assign(Object.assign({},defaults()),(opts||{})),{initialValue,controlled:controlled!==null&&controlled!==void 0?controlled:!0,checkedValue})}
function extractRuleFromSchema(schema,fieldName){if(!schema){return undefined}
return schema[fieldName]}
function useCheckboxField(name,rules,opts){const form=!(opts===null||opts===void 0?void 0:opts.standalone)?injectWithSelf(FormContextKey):undefined;const checkedValue=opts===null||opts===void 0?void 0:opts.checkedValue;const uncheckedValue=opts===null||opts===void 0?void 0:opts.uncheckedValue;function patchCheckboxApi(field){const handleChange=field.handleChange;const checked=(0,vueLib_namespaceObject.computed)(()=>{const currentValue=(0,vueLib_namespaceObject.unref)(field.value);const checkedVal=(0,vueLib_namespaceObject.unref)(checkedValue);return Array.isArray(currentValue)?currentValue.findIndex(v=>isEqual(v,checkedVal))>=0:isEqual(checkedVal,currentValue)});function handleCheckboxChange(e,shouldValidate=!0){var _a;if(checked.value===((_a=e===null||e===void 0?void 0:e.target)===null||_a===void 0?void 0:_a.checked)){if(shouldValidate){field.validate()}
return}
let newValue=normalizeEventValue(e);if(!form){newValue=resolveNextCheckboxValue((0,vueLib_namespaceObject.unref)(field.value),(0,vueLib_namespaceObject.unref)(checkedValue),(0,vueLib_namespaceObject.unref)(uncheckedValue))}
handleChange(newValue,shouldValidate)}
return Object.assign(Object.assign({},field),{checked,checkedValue,uncheckedValue,handleChange:handleCheckboxChange})}
return patchCheckboxApi(_useField(name,rules,opts))}
function useVModel({prop,value,handleChange}){const vm=(0,vueLib_namespaceObject.getCurrentInstance)();if(!vm){if((!1)){}
return}
const propName=prop||'modelValue';const emitName=`update:${propName}`;if(!(propName in vm.props)){return}(0,vueLib_namespaceObject.watch)(value,newValue=>{if(isEqual(newValue,getCurrentModelValue(vm,propName))){return}
vm.emit(emitName,newValue)});(0,vueLib_namespaceObject.watch)(()=>getCurrentModelValue(vm,propName),propValue=>{if(propValue===IS_ABSENT&&value.value===undefined){return}
const newValue=propValue===IS_ABSENT?undefined:propValue;if(isEqual(newValue,applyModelModifiers(value.value,vm.props.modelModifiers))){return}
handleChange(newValue)})}
function getCurrentModelValue(vm,propName){if(!vm){return undefined}
return vm.props[propName]}
const FieldImpl=(0,vueLib_namespaceObject.defineComponent)({name:'Field',inheritAttrs:!1,props:{as:{type:[String,Object],default:undefined,},name:{type:String,required:!0,},rules:{type:[Object,String,Function],default:undefined,},validateOnMount:{type:Boolean,default:!1,},validateOnBlur:{type:Boolean,default:undefined,},validateOnChange:{type:Boolean,default:undefined,},validateOnInput:{type:Boolean,default:undefined,},validateOnModelUpdate:{type:Boolean,default:undefined,},bails:{type:Boolean,default:()=>getConfig().bails,},label:{type:String,default:undefined,},uncheckedValue:{type:null,default:undefined,},modelValue:{type:null,default:IS_ABSENT,},modelModifiers:{type:null,default:()=>({}),},'onUpdate:modelValue':{type:null,default:undefined,},standalone:{type:Boolean,default:!1,},keepValue:{type:Boolean,default:undefined,},},setup(props,ctx){const rules=(0,vueLib_namespaceObject.toRef)(props,'rules');const name=(0,vueLib_namespaceObject.toRef)(props,'name');const label=(0,vueLib_namespaceObject.toRef)(props,'label');const uncheckedValue=(0,vueLib_namespaceObject.toRef)(props,'uncheckedValue');const keepValue=(0,vueLib_namespaceObject.toRef)(props,'keepValue');const{errors,value,errorMessage,validate:validateField,handleChange,handleBlur,setTouched,resetField,handleReset,meta,checked,setErrors,}=useField(name,rules,{validateOnMount:props.validateOnMount,bails:props.bails,standalone:props.standalone,type:ctx.attrs.type,initialValue:resolveInitialValue(props,ctx),checkedValue:ctx.attrs.value,uncheckedValue,label,validateOnValueUpdate:!1,keepValueOnUnmount:keepValue,});const onChangeHandler=function handleChangeWithModel(e,shouldValidate=!0){handleChange(e,shouldValidate);ctx.emit('update:modelValue',value.value)};const handleInput=(e)=>{if(!hasCheckedAttr(ctx.attrs.type)){value.value=normalizeEventValue(e)}};const onInputHandler=function handleInputWithModel(e){handleInput(e);ctx.emit('update:modelValue',value.value)};const fieldProps=(0,vueLib_namespaceObject.computed)(()=>{const{validateOnInput,validateOnChange,validateOnBlur,validateOnModelUpdate}=resolveValidationTriggers(props);const baseOnBlur=[handleBlur,ctx.attrs.onBlur,validateOnBlur?validateField:undefined].filter(Boolean);const baseOnInput=[(e)=>onChangeHandler(e,validateOnInput),ctx.attrs.onInput].filter(Boolean);const baseOnChange=[(e)=>onChangeHandler(e,validateOnChange),ctx.attrs.onChange].filter(Boolean);const attrs={name:props.name,onBlur:baseOnBlur,onInput:baseOnInput,onChange:baseOnChange,};attrs['onUpdate:modelValue']=e=>onChangeHandler(e,validateOnModelUpdate);if(hasCheckedAttr(ctx.attrs.type)&&checked){attrs.checked=checked.value}
const tag=resolveTag(props,ctx);if(shouldHaveValueBinding(tag,ctx.attrs)){attrs.value=value.value}
return attrs});function slotProps(){return{field:fieldProps.value,value:value.value,meta,errors:errors.value,errorMessage:errorMessage.value,validate:validateField,resetField,handleChange:onChangeHandler,handleInput:onInputHandler,handleReset,handleBlur,setTouched,setErrors,}}
ctx.expose({setErrors,setTouched,reset:resetField,validate:validateField,handleChange,});return()=>{const tag=(0,vueLib_namespaceObject.resolveDynamicComponent)(resolveTag(props,ctx));const children=normalizeChildren(tag,ctx,slotProps);if(tag){return(0,vueLib_namespaceObject.h)(tag,Object.assign(Object.assign({},ctx.attrs),fieldProps.value),children)}
return children}},});function resolveTag(props,ctx){let tag=props.as||'';if(!props.as&&!ctx.slots.default){tag='input'}
return tag}
function resolveValidationTriggers(props){var _a,_b,_c,_d;const{validateOnInput,validateOnChange,validateOnBlur,validateOnModelUpdate}=getConfig();return{validateOnInput:(_a=props.validateOnInput)!==null&&_a!==void 0?_a:validateOnInput,validateOnChange:(_b=props.validateOnChange)!==null&&_b!==void 0?_b:validateOnChange,validateOnBlur:(_c=props.validateOnBlur)!==null&&_c!==void 0?_c:validateOnBlur,validateOnModelUpdate:(_d=props.validateOnModelUpdate)!==null&&_d!==void 0?_d:validateOnModelUpdate,}}
function resolveInitialValue(props,ctx){if(!hasCheckedAttr(ctx.attrs.type)){return isPropPresent(props,'modelValue')?props.modelValue:ctx.attrs.value}
return isPropPresent(props,'modelValue')?props.modelValue:undefined}
const Field=FieldImpl;let FORM_COUNTER=0;function resolveInitialValues(opts){const providedValues=(0,vueLib_namespaceObject.unref)(opts===null||opts===void 0?void 0:opts.initialValues)||{};const schema=(0,vueLib_namespaceObject.unref)(opts===null||opts===void 0?void 0:opts.validationSchema);if(schema&&isTypedSchema(schema)&&isCallable(schema.cast)){return klona(schema.cast(providedValues)||{})}
return klona(providedValues)}
function useForm(opts){var _a;const formId=FORM_COUNTER++;const controlledModelPaths=new Set();let RESET_LOCK=!1;const fieldsByPath=(0,vueLib_namespaceObject.ref)({});const isSubmitting=(0,vueLib_namespaceObject.ref)(!1);const submitCount=(0,vueLib_namespaceObject.ref)(0);const fieldArrays=[];const formValues=(0,vueLib_namespaceObject.reactive)(resolveInitialValues(opts));const{errorBag,setErrorBag,setFieldErrorBag}=useErrorBag(opts===null||opts===void 0?void 0:opts.initialErrors);const errors=(0,vueLib_namespaceObject.computed)(()=>{return keysOf(errorBag.value).reduce((acc,key)=>{const bag=errorBag.value[key];if(bag&&bag.length){acc[key]=bag[0]}
return acc},{})});function getFirstFieldAtPath(path){const fieldOrGroup=fieldsByPath.value[path];return Array.isArray(fieldOrGroup)?fieldOrGroup[0]:fieldOrGroup}
function fieldExists(path){return!!fieldsByPath.value[path]}
const fieldNames=(0,vueLib_namespaceObject.computed)(()=>{return keysOf(fieldsByPath.value).reduce((names,path)=>{const field=getFirstFieldAtPath(path);if(field){names[path]={name:(0,vueLib_namespaceObject.unref)(field.name)||'',label:(0,vueLib_namespaceObject.unref)(field.label)||''}}
return names},{})});const fieldBailsMap=(0,vueLib_namespaceObject.computed)(()=>{return keysOf(fieldsByPath.value).reduce((map,path)=>{var _a;const field=getFirstFieldAtPath(path);if(field){map[path]=(_a=field.bails)!==null&&_a!==void 0?_a:!0}
return map},{})});const initialErrors=Object.assign({},((opts===null||opts===void 0?void 0:opts.initialErrors)||{}));const keepValuesOnUnmount=(_a=opts===null||opts===void 0?void 0:opts.keepValuesOnUnmount)!==null&&_a!==void 0?_a:!1;const{initialValues,originalInitialValues,setInitialValues}=useFormInitialValues(fieldsByPath,formValues,opts);const meta=useFormMeta(fieldsByPath,formValues,originalInitialValues,errors);const controlledValues=(0,vueLib_namespaceObject.computed)(()=>{return[...controlledModelPaths,...keysOf(fieldsByPath.value)].reduce((acc,path)=>{const value=getFromPath(formValues,path);setInPath(acc,path,value);return acc},{})});const schema=opts===null||opts===void 0?void 0:opts.validationSchema;const debouncedSilentValidation=debounceAsync(_validateSchema,5);const debouncedValidation=debounceAsync(_validateSchema,5);const validateSchema=withLatest(async(mode)=>{return(await mode)==='silent'?debouncedSilentValidation():debouncedValidation()},(formResult,[mode])=>{const fieldsById=formCtx.fieldsByPath.value||{};const currentErrorsPaths=keysOf(formCtx.errorBag.value);const paths=[...new Set([...keysOf(formResult.results),...keysOf(fieldsById),...currentErrorsPaths]),];return paths.reduce((validation,path)=>{const field=fieldsById[path];const messages=(formResult.results[path]||{errors:[]}).errors;const fieldResult={errors:messages,valid:!messages.length,};validation.results[path]=fieldResult;if(!fieldResult.valid){validation.errors[path]=fieldResult.errors[0]}
if(!field){setFieldError(path,messages);return validation}
applyFieldMutation(field,f=>(f.meta.valid=fieldResult.valid));if(mode==='silent'){return validation}
const wasValidated=Array.isArray(field)?field.some(f=>f.meta.validated):field.meta.validated;if(mode==='validated-only'&&!wasValidated){return validation}
applyFieldMutation(field,f=>f.setState({errors:fieldResult.errors}));return validation},{valid:formResult.valid,results:{},errors:{}})});function makeSubmissionFactory(onlyControlled){return function submitHandlerFactory(fn,onValidationError){return function submissionHandler(e){if(e instanceof Event){e.preventDefault();e.stopPropagation()}
setTouched(keysOf(fieldsByPath.value).reduce((acc,field)=>{acc[field]=!0;return acc},{}));isSubmitting.value=!0;submitCount.value++;return validate().then(result=>{const values=klona(formValues);if(result.valid&&typeof fn==='function'){const controlled=klona(controlledValues.value);let submittedValues=onlyControlled?controlled:values;if(result.values){submittedValues=result.values}
return fn(submittedValues,{evt:e,controlledValues:controlled,setErrors,setFieldError,setTouched,setFieldTouched,setValues,setFieldValue,resetForm,resetField,})}
if(!result.valid&&typeof onValidationError==='function'){onValidationError({values,evt:e,errors:result.errors,results:result.results,})}}).then(returnVal=>{isSubmitting.value=!1;return returnVal},err=>{isSubmitting.value=!1;throw err})}}}
const handleSubmitImpl=makeSubmissionFactory(!1);const handleSubmit=handleSubmitImpl;handleSubmit.withControlled=makeSubmissionFactory(!0);const formCtx={formId,fieldsByPath,values:formValues,controlledValues,errorBag,errors,schema,submitCount,meta,isSubmitting,fieldArrays,keepValuesOnUnmount,validateSchema:(0,vueLib_namespaceObject.unref)(schema)?validateSchema:undefined,validate,register:registerField,unregister:unregisterField,setFieldErrorBag,validateField,setFieldValue,setValues,setErrors,setFieldError,setFieldTouched,setTouched,resetForm,resetField,handleSubmit,stageInitialValue,unsetInitialValue,setFieldInitialValue,useFieldModel,};function isFieldGroup(fieldOrGroup){return Array.isArray(fieldOrGroup)}
function applyFieldMutation(fieldOrGroup,mutation){if(Array.isArray(fieldOrGroup)){return fieldOrGroup.forEach(mutation)}
return mutation(fieldOrGroup)}
function mutateAllFields(mutation){Object.values(fieldsByPath.value).forEach(field=>{if(!field){return}
applyFieldMutation(field,mutation)})}
function setFieldError(field,message){setFieldErrorBag(field,message)}
function setErrors(fields){setErrorBag(fields)}
function setFieldValue(field,value,{force}={force:!1}){var _a;const fieldInstance=fieldsByPath.value[field];const clonedValue=klona(value);if(!fieldInstance){setInPath(formValues,field,clonedValue);return}
if(isFieldGroup(fieldInstance)&&((_a=fieldInstance[0])===null||_a===void 0?void 0:_a.type)==='checkbox'&&!Array.isArray(value)){const newValue=klona(resolveNextCheckboxValue(getFromPath(formValues,field)||[],value,undefined));setInPath(formValues,field,newValue);return}
let newValue=clonedValue;if(!isFieldGroup(fieldInstance)&&fieldInstance.type==='checkbox'&&!force&&!RESET_LOCK){newValue=klona(resolveNextCheckboxValue(getFromPath(formValues,field),value,(0,vueLib_namespaceObject.unref)(fieldInstance.uncheckedValue)))}
setInPath(formValues,field,newValue)}
function setValues(fields){keysOf(formValues).forEach(key=>{delete formValues[key]});keysOf(fields).forEach(path=>{setFieldValue(path,fields[path])});fieldArrays.forEach(f=>f&&f.reset())}
function createModel(path){const{value}=_useFieldValue(path,undefined,formCtx);(0,vueLib_namespaceObject.watch)(value,()=>{if(!fieldExists((0,vueLib_namespaceObject.unref)(path))){validate({mode:'validated-only'})}},{deep:!0,});controlledModelPaths.add((0,vueLib_namespaceObject.unref)(path));return value}
function useFieldModel(path){if(!Array.isArray(path)){return createModel(path)}
return path.map(createModel)}
function setFieldTouched(field,isTouched){const fieldInstance=fieldsByPath.value[field];if(fieldInstance){applyFieldMutation(fieldInstance,f=>f.setTouched(isTouched))}}
function setTouched(fields){keysOf(fields).forEach(field=>{setFieldTouched(field,!!fields[field])})}
function resetField(field,state){const fieldInstance=fieldsByPath.value[field];if(fieldInstance){applyFieldMutation(fieldInstance,f=>f.resetField(state))}}
function resetForm(state){RESET_LOCK=!0;mutateAllFields(f=>f.resetField());const newValues=(state===null||state===void 0?void 0:state.values)?state.values:originalInitialValues.value;setInitialValues(newValues);setValues(newValues);if(state===null||state===void 0?void 0:state.touched){setTouched(state.touched)}
setErrors((state===null||state===void 0?void 0:state.errors)||{});submitCount.value=(state===null||state===void 0?void 0:state.submitCount)||0;(0,vueLib_namespaceObject.nextTick)(()=>{RESET_LOCK=!1})}
function insertFieldAtPath(field,path){const rawField=(0,vueLib_namespaceObject.markRaw)(field);const fieldPath=path;if(!fieldsByPath.value[fieldPath]){fieldsByPath.value[fieldPath]=rawField;return}
const fieldAtPath=fieldsByPath.value[fieldPath];if(fieldAtPath&&!Array.isArray(fieldAtPath)){fieldsByPath.value[fieldPath]=[fieldAtPath]}
fieldsByPath.value[fieldPath]=[...fieldsByPath.value[fieldPath],rawField]}
function removeFieldFromPath(field,path){const fieldPath=path;const fieldAtPath=fieldsByPath.value[fieldPath];if(!fieldAtPath){return}
if(!isFieldGroup(fieldAtPath)&&field.id===fieldAtPath.id){delete fieldsByPath.value[fieldPath];return}
if(isFieldGroup(fieldAtPath)){const idx=fieldAtPath.findIndex(f=>f.id===field.id);if(idx===-1){return}
fieldAtPath.splice(idx,1);if(!fieldAtPath.length){delete fieldsByPath.value[fieldPath]}}}
function registerField(field){const fieldPath=(0,vueLib_namespaceObject.unref)(field.name);insertFieldAtPath(field,fieldPath);if((0,vueLib_namespaceObject.isRef)(field.name)){(0,vueLib_namespaceObject.watch)(field.name,async(newPath,oldPath)=>{await(0,vueLib_namespaceObject.nextTick)();removeFieldFromPath(field,oldPath);insertFieldAtPath(field,newPath);if(errors.value[oldPath]||errors.value[newPath]){setFieldError(oldPath,undefined);validateField(newPath)}
await(0,vueLib_namespaceObject.nextTick)();if(!fieldExists(oldPath)){unsetPath(formValues,oldPath)}})}
const initialErrorMessage=(0,vueLib_namespaceObject.unref)(field.errorMessage);if(initialErrorMessage&&(initialErrors===null||initialErrors===void 0?void 0:initialErrors[fieldPath])!==initialErrorMessage){validateField(fieldPath)}
delete initialErrors[fieldPath]}
function unregisterField(field){const fieldName=(0,vueLib_namespaceObject.unref)(field.name);const fieldInstance=fieldsByPath.value[fieldName];const isGroup=!!fieldInstance&&isFieldGroup(fieldInstance);removeFieldFromPath(field,fieldName);(0,vueLib_namespaceObject.nextTick)(()=>{var _a;const shouldKeepValue=(_a=(0,vueLib_namespaceObject.unref)(field.keepValueOnUnmount))!==null&&_a!==void 0?_a:(0,vueLib_namespaceObject.unref)(keepValuesOnUnmount);const currentGroupValue=getFromPath(formValues,fieldName);const isSameGroup=isGroup&&(fieldInstance===fieldsByPath.value[fieldName]||!fieldsByPath.value[fieldName]);if(isSameGroup&&!shouldKeepValue){if(Array.isArray(currentGroupValue)){const valueIdx=currentGroupValue.findIndex(i=>isEqual(i,(0,vueLib_namespaceObject.unref)(field.checkedValue)));if(valueIdx>-1){const newVal=[...currentGroupValue];newVal.splice(valueIdx,1);setFieldValue(fieldName,newVal,{force:!0})}}else if(currentGroupValue===(0,vueLib_namespaceObject.unref)(field.checkedValue)){unsetPath(formValues,fieldName)}}
if(!fieldExists(fieldName)){setFieldError(fieldName,undefined);if(shouldKeepValue){return}
if(isGroup&&Array.isArray(currentGroupValue)&&!isEmptyContainer(currentGroupValue)){return}
unsetPath(formValues,fieldName)}})}
async function validate(opts){const mode=(opts===null||opts===void 0?void 0:opts.mode)||'force';if(mode==='force'){mutateAllFields(f=>(f.meta.validated=!0))}
if(formCtx.validateSchema){return formCtx.validateSchema(mode)}
const validations=await Promise.all(Object.values(fieldsByPath.value).map(field=>{const fieldInstance=Array.isArray(field)?field[0]:field;if(!fieldInstance){return Promise.resolve({key:'',valid:!0,errors:[]})}
return fieldInstance.validate(opts).then((result)=>{return{key:(0,vueLib_namespaceObject.unref)(fieldInstance.name),valid:result.valid,errors:result.errors,}})}));const results={};const errors={};for(const validation of validations){results[validation.key]={valid:validation.valid,errors:validation.errors,};if(validation.errors.length){errors[validation.key]=validation.errors[0]}}
return{valid:validations.every(r=>r.valid),results,errors,}}
async function validateField(field){const fieldInstance=fieldsByPath.value[field];if(!fieldInstance){(0,vueLib_namespaceObject.warn)(`field with name ${field} was not found`);return Promise.resolve({errors:[],valid:!0})}
if(Array.isArray(fieldInstance)){return fieldInstance.map(f=>f.validate())[0]}
return fieldInstance.validate()}
function unsetInitialValue(path){unsetPath(initialValues.value,path)}
function stageInitialValue(path,value,updateOriginal=!1){setInPath(formValues,path,value);setFieldInitialValue(path,value);if(updateOriginal&&!(opts===null||opts===void 0?void 0:opts.initialValues)){setInPath(originalInitialValues.value,path,klona(value))}}
function setFieldInitialValue(path,value){setInPath(initialValues.value,path,klona(value))}
async function _validateSchema(){const schemaValue=(0,vueLib_namespaceObject.unref)(schema);if(!schemaValue){return{valid:!0,results:{},errors:{}}}
const formResult=isYupValidator(schemaValue)||isTypedSchema(schemaValue)?await validateTypedSchema(schemaValue,formValues):await validateObjectSchema(schemaValue,formValues,{names:fieldNames.value,bailsMap:fieldBailsMap.value,});return formResult}
const submitForm=handleSubmit((_,{evt})=>{if(isFormSubmitEvent(evt)){evt.target.submit()}});(0,vueLib_namespaceObject.onMounted)(()=>{if(opts===null||opts===void 0?void 0:opts.initialErrors){setErrors(opts.initialErrors)}
if(opts===null||opts===void 0?void 0:opts.initialTouched){setTouched(opts.initialTouched)}
if(opts===null||opts===void 0?void 0:opts.validateOnMount){validate();return}
if(formCtx.validateSchema){formCtx.validateSchema('silent')}});if((0,vueLib_namespaceObject.isRef)(schema)){(0,vueLib_namespaceObject.watch)(schema,()=>{var _a;(_a=formCtx.validateSchema)===null||_a===void 0?void 0:_a.call(formCtx,'validated-only')})}(0,vueLib_namespaceObject.provide)(FormContextKey,formCtx);if((!1)){}
return Object.assign(Object.assign({},formCtx),{handleReset:()=>resetForm(),submitForm})}
function useFormMeta(fieldsByPath,currentValues,initialValues,errors){const MERGE_STRATEGIES={touched:'some',pending:'some',valid:'every',};const isDirty=(0,vueLib_namespaceObject.computed)(()=>{return!isEqual(currentValues,(0,vueLib_namespaceObject.unref)(initialValues))});function calculateFlags(){const fields=Object.values(fieldsByPath.value).flat(1).filter(Boolean);return keysOf(MERGE_STRATEGIES).reduce((acc,flag)=>{const mergeMethod=MERGE_STRATEGIES[flag];acc[flag]=fields[mergeMethod](field=>field.meta[flag]);return acc},{})}
const flags=(0,vueLib_namespaceObject.reactive)(calculateFlags());(0,vueLib_namespaceObject.watchEffect)(()=>{const value=calculateFlags();flags.touched=value.touched;flags.valid=value.valid;flags.pending=value.pending});return(0,vueLib_namespaceObject.computed)(()=>{return Object.assign(Object.assign({initialValues:(0,vueLib_namespaceObject.unref)(initialValues)},flags),{valid:flags.valid&&!keysOf(errors.value).length,dirty:isDirty.value})})}
function useFormInitialValues(fields,formValues,opts){const values=resolveInitialValues(opts);const providedValues=opts===null||opts===void 0?void 0:opts.initialValues;const initialValues=(0,vueLib_namespaceObject.ref)(values);const originalInitialValues=(0,vueLib_namespaceObject.ref)(klona(values));function setInitialValues(values,updateFields=!1){initialValues.value=klona(values);originalInitialValues.value=klona(values);if(!updateFields){return}
keysOf(fields.value).forEach(fieldPath=>{const field=fields.value[fieldPath];const wasTouched=Array.isArray(field)?field.some(f=>f.meta.touched):field===null||field===void 0?void 0:field.meta.touched;if(!field||wasTouched){return}
const newValue=getFromPath(initialValues.value,fieldPath);setInPath(formValues,fieldPath,klona(newValue))})}
if((0,vueLib_namespaceObject.isRef)(providedValues)){(0,vueLib_namespaceObject.watch)(providedValues,value=>{setInitialValues(value,!0)},{deep:!0,})}
return{initialValues,originalInitialValues,setInitialValues,}}
function useErrorBag(initialErrors){const errorBag=(0,vueLib_namespaceObject.ref)({});function normalizeErrorItem(message){return Array.isArray(message)?message:message?[message]:[]}
function setFieldErrorBag(field,message){if(!message){delete errorBag.value[field];return}
errorBag.value[field]=normalizeErrorItem(message)}
function setErrorBag(fields){errorBag.value=keysOf(fields).reduce((acc,key)=>{const message=fields[key];if(message){acc[key]=normalizeErrorItem(message)}
return acc},{})}
if(initialErrors){setErrorBag(initialErrors)}
return{errorBag,setErrorBag,setFieldErrorBag,}}
const FormImpl=(0,vueLib_namespaceObject.defineComponent)({name:'Form',inheritAttrs:!1,props:{as:{type:String,default:'form',},validationSchema:{type:Object,default:undefined,},initialValues:{type:Object,default:undefined,},initialErrors:{type:Object,default:undefined,},initialTouched:{type:Object,default:undefined,},validateOnMount:{type:Boolean,default:!1,},onSubmit:{type:Function,default:undefined,},onInvalidSubmit:{type:Function,default:undefined,},keepValues:{type:Boolean,default:!1,},},setup(props,ctx){const initialValues=(0,vueLib_namespaceObject.toRef)(props,'initialValues');const validationSchema=(0,vueLib_namespaceObject.toRef)(props,'validationSchema');const keepValues=(0,vueLib_namespaceObject.toRef)(props,'keepValues');const{errors,errorBag,values,meta,isSubmitting,submitCount,controlledValues,validate,validateField,handleReset,resetForm,handleSubmit,setErrors,setFieldError,setFieldValue,setValues,setFieldTouched,setTouched,resetField,}=useForm({validationSchema:validationSchema.value?validationSchema:undefined,initialValues,initialErrors:props.initialErrors,initialTouched:props.initialTouched,validateOnMount:props.validateOnMount,keepValuesOnUnmount:keepValues,});const submitForm=handleSubmit((_,{evt})=>{if(isFormSubmitEvent(evt)){evt.target.submit()}},props.onInvalidSubmit);const onSubmit=props.onSubmit?handleSubmit(props.onSubmit,props.onInvalidSubmit):submitForm;function handleFormReset(e){if(isEvent(e)){e.preventDefault()}
handleReset();if(typeof ctx.attrs.onReset==='function'){ctx.attrs.onReset()}}
function handleScopedSlotSubmit(evt,onSubmit){const onSuccess=typeof evt==='function'&&!onSubmit?evt:onSubmit;return handleSubmit(onSuccess,props.onInvalidSubmit)(evt)}
function getValues(){return klona(values)}
function getMeta(){return klona(meta.value)}
function getErrors(){return klona(errors.value)}
function slotProps(){return{meta:meta.value,errors:errors.value,errorBag:errorBag.value,values,isSubmitting:isSubmitting.value,submitCount:submitCount.value,controlledValues:controlledValues.value,validate,validateField,handleSubmit:handleScopedSlotSubmit,handleReset,submitForm,setErrors,setFieldError,setFieldValue,setValues,setFieldTouched,setTouched,resetForm,resetField,getValues,getMeta,getErrors,}}
ctx.expose({setFieldError,setErrors,setFieldValue,setValues,setFieldTouched,setTouched,resetForm,validate,validateField,resetField,getValues,getMeta,getErrors,});return function renderForm(){const tag=props.as==='form'?props.as:(0,vueLib_namespaceObject.resolveDynamicComponent)(props.as);const children=normalizeChildren(tag,ctx,slotProps);if(!props.as){return children}
const formAttrs=props.as==='form'?{novalidate:!0,}:{};return(0,vueLib_namespaceObject.h)(tag,Object.assign(Object.assign(Object.assign({},formAttrs),ctx.attrs),{onSubmit,onReset:handleFormReset}),children)}},});const Form=FormImpl;function useFieldArray(arrayPath){const form=injectWithSelf(FormContextKey,undefined);const fields=(0,vueLib_namespaceObject.ref)([]);const noOp=()=>{};const noOpApi={fields,remove:noOp,push:noOp,swap:noOp,insert:noOp,update:noOp,replace:noOp,prepend:noOp,move:noOp,};if(!form){warn('FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly');return noOpApi}
if(!(0,vueLib_namespaceObject.unref)(arrayPath)){warn('FieldArray requires a field path to be provided, did you forget to pass the `name` prop?');return noOpApi}
const alreadyExists=form.fieldArrays.find(a=>(0,vueLib_namespaceObject.unref)(a.path)===(0,vueLib_namespaceObject.unref)(arrayPath));if(alreadyExists){return alreadyExists}
let entryCounter=0;function getCurrentValues(){return getFromPath(form===null||form===void 0?void 0:form.values,(0,vueLib_namespaceObject.unref)(arrayPath),[])||[]}
function initFields(){const currentValues=getCurrentValues();fields.value=currentValues.map(createEntry);updateEntryFlags()}
initFields();function updateEntryFlags(){const fieldsLength=fields.value.length;for(let i=0;i<fieldsLength;i++){const entry=fields.value[i];entry.isFirst=i===0;entry.isLast=i===fieldsLength-1}}
function createEntry(value){const key=entryCounter++;const entry={key,value:computedDeep({get(){const currentValues=getFromPath(form===null||form===void 0?void 0:form.values,(0,vueLib_namespaceObject.unref)(arrayPath),[])||[];const idx=fields.value.findIndex(e=>e.key===key);return idx===-1?value:currentValues[idx]},set(value){const idx=fields.value.findIndex(e=>e.key===key);if(idx===-1){warn(`Attempting to update a non-existent array item`);return}
update(idx,value)},}),isFirst:!1,isLast:!1,};return entry}
function afterMutation(){updateEntryFlags();form===null||form===void 0?void 0:form.validate({mode:'silent'})}
function remove(idx){const pathName=(0,vueLib_namespaceObject.unref)(arrayPath);const pathValue=getFromPath(form===null||form===void 0?void 0:form.values,pathName);if(!pathValue||!Array.isArray(pathValue)){return}
const newValue=[...pathValue];newValue.splice(idx,1);form===null||form===void 0?void 0:form.unsetInitialValue(pathName+`[${idx}]`);form===null||form===void 0?void 0:form.setFieldValue(pathName,newValue);fields.value.splice(idx,1);afterMutation()}
function push(value){const pathName=(0,vueLib_namespaceObject.unref)(arrayPath);const pathValue=getFromPath(form===null||form===void 0?void 0:form.values,pathName);const normalizedPathValue=isNullOrUndefined(pathValue)?[]:pathValue;if(!Array.isArray(normalizedPathValue)){return}
const newValue=[...normalizedPathValue];newValue.push(value);form===null||form===void 0?void 0:form.stageInitialValue(pathName+`[${newValue.length - 1}]`,value);form===null||form===void 0?void 0:form.setFieldValue(pathName,newValue);fields.value.push(createEntry(value));afterMutation()}
function swap(indexA,indexB){const pathName=(0,vueLib_namespaceObject.unref)(arrayPath);const pathValue=getFromPath(form===null||form===void 0?void 0:form.values,pathName);if(!Array.isArray(pathValue)||!(indexA in pathValue)||!(indexB in pathValue)){return}
const newValue=[...pathValue];const newFields=[...fields.value];const temp=newValue[indexA];newValue[indexA]=newValue[indexB];newValue[indexB]=temp;const tempEntry=newFields[indexA];newFields[indexA]=newFields[indexB];newFields[indexB]=tempEntry;form===null||form===void 0?void 0:form.setFieldValue(pathName,newValue);fields.value=newFields;updateEntryFlags()}
function insert(idx,value){const pathName=(0,vueLib_namespaceObject.unref)(arrayPath);const pathValue=getFromPath(form===null||form===void 0?void 0:form.values,pathName);if(!Array.isArray(pathValue)||pathValue.length<idx){return}
const newValue=[...pathValue];const newFields=[...fields.value];newValue.splice(idx,0,value);newFields.splice(idx,0,createEntry(value));form===null||form===void 0?void 0:form.setFieldValue(pathName,newValue);fields.value=newFields;afterMutation()}
function replace(arr){const pathName=(0,vueLib_namespaceObject.unref)(arrayPath);form===null||form===void 0?void 0:form.setFieldValue(pathName,arr);initFields();afterMutation()}
function update(idx,value){const pathName=(0,vueLib_namespaceObject.unref)(arrayPath);const pathValue=getFromPath(form===null||form===void 0?void 0:form.values,pathName);if(!Array.isArray(pathValue)||pathValue.length-1<idx){return}
form===null||form===void 0?void 0:form.setFieldValue(`${pathName}[${idx}]`,value);form===null||form===void 0?void 0:form.validate({mode:'validated-only'})}
function prepend(value){const pathName=(0,vueLib_namespaceObject.unref)(arrayPath);const pathValue=getFromPath(form===null||form===void 0?void 0:form.values,pathName);const normalizedPathValue=isNullOrUndefined(pathValue)?[]:pathValue;if(!Array.isArray(normalizedPathValue)){return}
const newValue=[value,...normalizedPathValue];form===null||form===void 0?void 0:form.stageInitialValue(pathName+`[${newValue.length - 1}]`,value);form===null||form===void 0?void 0:form.setFieldValue(pathName,newValue);fields.value.unshift(createEntry(value));afterMutation()}
function move(oldIdx,newIdx){const pathName=(0,vueLib_namespaceObject.unref)(arrayPath);const pathValue=getFromPath(form===null||form===void 0?void 0:form.values,pathName);const newValue=isNullOrUndefined(pathValue)?[]:[...pathValue];if(!Array.isArray(pathValue)||!(oldIdx in pathValue)||!(newIdx in pathValue)){return}
const newFields=[...fields.value];const movedItem=newFields[oldIdx];newFields.splice(oldIdx,1);newFields.splice(newIdx,0,movedItem);const movedValue=newValue[oldIdx];newValue.splice(oldIdx,1);newValue.splice(newIdx,0,movedValue);form===null||form===void 0?void 0:form.setFieldValue(pathName,newValue);fields.value=newFields;afterMutation()}
const fieldArrayCtx={fields,remove,push,swap,insert,update,replace,prepend,move,};form.fieldArrays.push(Object.assign({path:arrayPath,reset:initFields},fieldArrayCtx));(0,vueLib_namespaceObject.onBeforeUnmount)(()=>{const idx=form.fieldArrays.findIndex(i=>(0,vueLib_namespaceObject.unref)(i.path)===(0,vueLib_namespaceObject.unref)(arrayPath));if(idx>=0){form.fieldArrays.splice(idx,1)}});(0,vueLib_namespaceObject.watch)(getCurrentValues,formValues=>{const fieldsValues=fields.value.map(f=>f.value);if(!isEqual(formValues,fieldsValues)){initFields()}});return fieldArrayCtx}
const FieldArrayImpl=(0,vueLib_namespaceObject.defineComponent)({name:'FieldArray',inheritAttrs:!1,props:{name:{type:String,required:!0,},},setup(props,ctx){const{push,remove,swap,insert,replace,update,prepend,move,fields}=useFieldArray((0,vueLib_namespaceObject.toRef)(props,'name'));function slotProps(){return{fields:fields.value,push,remove,swap,insert,update,replace,prepend,move,}}
ctx.expose({push,remove,swap,insert,update,replace,prepend,move,});return()=>{const children=normalizeChildren(undefined,ctx,slotProps);return children}},});const FieldArray=FieldArrayImpl;const ErrorMessageImpl=(0,vueLib_namespaceObject.defineComponent)({name:'ErrorMessage',props:{as:{type:String,default:undefined,},name:{type:String,required:!0,},},setup(props,ctx){const form=(0,vueLib_namespaceObject.inject)(FormContextKey,undefined);const message=(0,vueLib_namespaceObject.computed)(()=>{return form===null||form===void 0?void 0:form.errors.value[props.name]});function slotProps(){return{message:message.value,}}
return()=>{if(!message.value){return undefined}
const tag=(props.as?(0,vueLib_namespaceObject.resolveDynamicComponent)(props.as):props.as);const children=normalizeChildren(tag,ctx,slotProps);const attrs=Object.assign({role:'alert'},ctx.attrs);if(!tag&&(Array.isArray(children)||!children)&&(children===null||children===void 0?void 0:children.length)){return children}
if((Array.isArray(children)||!children)&&!(children===null||children===void 0?void 0:children.length)){return(0,vueLib_namespaceObject.h)(tag||'span',attrs,message.value)}
return(0,vueLib_namespaceObject.h)(tag,attrs,children)}},});const ErrorMessage=ErrorMessageImpl;function useResetForm(){const form=injectWithSelf(FormContextKey);if(!form){warn('No vee-validate <Form /> or `useForm` was detected in the component tree')}
return function resetForm(state){if(!form){return}
return form.resetForm(state)}}
function useIsFieldDirty(path){const form=injectWithSelf(FormContextKey);let field=path?undefined:(0,vueLib_namespaceObject.inject)(FieldContextKey);return(0,vueLib_namespaceObject.computed)(()=>{if(path){field=normalizeField(form===null||form===void 0?void 0:form.fieldsByPath.value[(0,vueLib_namespaceObject.unref)(path)])}
if(!field){warn(`field with name ${(0,vueLib_namespaceObject.unref)(path)} was not found`);return!1}
return field.meta.dirty})}
function useIsFieldTouched(path){const form=injectWithSelf(FormContextKey);let field=path?undefined:(0,vueLib_namespaceObject.inject)(FieldContextKey);return(0,vueLib_namespaceObject.computed)(()=>{if(path){field=normalizeField(form===null||form===void 0?void 0:form.fieldsByPath.value[(0,vueLib_namespaceObject.unref)(path)])}
if(!field){warn(`field with name ${(0,vueLib_namespaceObject.unref)(path)} was not found`);return!1}
return field.meta.touched})}
function useIsFieldValid(path){const form=injectWithSelf(FormContextKey);let field=path?undefined:(0,vueLib_namespaceObject.inject)(FieldContextKey);return(0,vueLib_namespaceObject.computed)(()=>{if(path){field=normalizeField(form===null||form===void 0?void 0:form.fieldsByPath.value[(0,vueLib_namespaceObject.unref)(path)])}
if(!field){warn(`field with name ${(0,vueLib_namespaceObject.unref)(path)} was not found`);return!1}
return field.meta.valid})}
function useIsSubmitting(){const form=injectWithSelf(FormContextKey);if(!form){warn('No vee-validate <Form /> or `useForm` was detected in the component tree')}
return(0,vueLib_namespaceObject.computed)(()=>{var _a;return(_a=form===null||form===void 0?void 0:form.isSubmitting.value)!==null&&_a!==void 0?_a:!1})}
function useValidateField(path){const form=injectWithSelf(FormContextKey);let field=path?undefined:(0,vueLib_namespaceObject.inject)(FieldContextKey);return function validateField(){if(path){field=normalizeField(form===null||form===void 0?void 0:form.fieldsByPath.value[(0,vueLib_namespaceObject.unref)(path)])}
if(!field){warn(`field with name ${(0,vueLib_namespaceObject.unref)(path)} was not found`);return Promise.resolve({errors:[],valid:!0,})}
return field.validate()}}
function useIsFormDirty(){const form=injectWithSelf(FormContextKey);if(!form){warn('No vee-validate <Form /> or `useForm` was detected in the component tree')}
return(0,vueLib_namespaceObject.computed)(()=>{var _a;return(_a=form===null||form===void 0?void 0:form.meta.value.dirty)!==null&&_a!==void 0?_a:!1})}
function useIsFormTouched(){const form=injectWithSelf(FormContextKey);if(!form){warn('No vee-validate <Form /> or `useForm` was detected in the component tree')}
return(0,vueLib_namespaceObject.computed)(()=>{var _a;return(_a=form===null||form===void 0?void 0:form.meta.value.touched)!==null&&_a!==void 0?_a:!1})}
function useIsFormValid(){const form=injectWithSelf(FormContextKey);if(!form){warn('No vee-validate <Form /> or `useForm` was detected in the component tree')}
return(0,vueLib_namespaceObject.computed)(()=>{var _a;return(_a=form===null||form===void 0?void 0:form.meta.value.valid)!==null&&_a!==void 0?_a:!1})}
function useValidateForm(){const form=injectWithSelf(FormContextKey);if(!form){warn('No vee-validate <Form /> or `useForm` was detected in the component tree')}
return function validateField(){if(!form){return Promise.resolve({results:{},errors:{},valid:!0})}
return form.validate()}}
function useSubmitCount(){const form=injectWithSelf(FormContextKey);if(!form){warn('No vee-validate <Form /> or `useForm` was detected in the component tree')}
return(0,vueLib_namespaceObject.computed)(()=>{var _a;return(_a=form===null||form===void 0?void 0:form.submitCount.value)!==null&&_a!==void 0?_a:0})}
function useFieldValue(path){const form=injectWithSelf(FormContextKey);const field=path?undefined:(0,vueLib_namespaceObject.inject)(FieldContextKey);return(0,vueLib_namespaceObject.computed)(()=>{if(path){return getFromPath(form===null||form===void 0?void 0:form.values,(0,vueLib_namespaceObject.unref)(path))}
return(0,vueLib_namespaceObject.unref)(field===null||field===void 0?void 0:field.value)})}
function useFormValues(){const form=injectWithSelf(FormContextKey);if(!form){warn('No vee-validate <Form /> or `useForm` was detected in the component tree')}
return(0,vueLib_namespaceObject.computed)(()=>{return(form===null||form===void 0?void 0:form.values)||{}})}
function useFormErrors(){const form=injectWithSelf(FormContextKey);if(!form){warn('No vee-validate <Form /> or `useForm` was detected in the component tree')}
return(0,vueLib_namespaceObject.computed)(()=>{return((form===null||form===void 0?void 0:form.errors.value)||{})})}
function useFieldError(path){const form=injectWithSelf(FormContextKey);const field=path?undefined:(0,vueLib_namespaceObject.inject)(FieldContextKey);return(0,vueLib_namespaceObject.computed)(()=>{if(path){return form===null||form===void 0?void 0:form.errors.value[(0,vueLib_namespaceObject.unref)(path)]}
return field===null||field===void 0?void 0:field.errorMessage.value})}
function useSubmitForm(cb){const form=injectWithSelf(FormContextKey);if(!form){warn('No vee-validate <Form /> or `useForm` was detected in the component tree')}
const onSubmit=form?form.handleSubmit(cb):undefined;return function submitForm(e){if(!onSubmit){return}
return onSubmit(e)}}
var __webpack_exports__ErrorMessage=__webpack_exports__.Bc;var __webpack_exports__Field=__webpack_exports__.gN;var __webpack_exports__FieldArray=__webpack_exports__.F2;var __webpack_exports__FieldContextKey=__webpack_exports__.ZU;var __webpack_exports__Form=__webpack_exports__.l0;var __webpack_exports__FormContextKey=__webpack_exports__.Xy;var __webpack_exports__IS_ABSENT=__webpack_exports__.He;var __webpack_exports__configure=__webpack_exports__.jQ;var __webpack_exports__defineRule=__webpack_exports__.aH;var __webpack_exports__useField=__webpack_exports__.U$;var __webpack_exports__useFieldArray=__webpack_exports__.Dq;var __webpack_exports__useFieldError=__webpack_exports__.qk;var __webpack_exports__useFieldValue=__webpack_exports__.K4;var __webpack_exports__useForm=__webpack_exports__.cI;var __webpack_exports__useFormErrors=__webpack_exports__.VA;var __webpack_exports__useFormValues=__webpack_exports__.fq;var __webpack_exports__useIsFieldDirty=__webpack_exports__.x0;var __webpack_exports__useIsFieldTouched=__webpack_exports__.W3;var __webpack_exports__useIsFieldValid=__webpack_exports__.r7;var __webpack_exports__useIsFormDirty=__webpack_exports__._O;var __webpack_exports__useIsFormTouched=__webpack_exports__.AI;var __webpack_exports__useIsFormValid=__webpack_exports__.XH;var __webpack_exports__useIsSubmitting=__webpack_exports__.yL;var __webpack_exports__useResetForm=__webpack_exports__.W6;var __webpack_exports__useSubmitCount=__webpack_exports__.g9;var __webpack_exports__useSubmitForm=__webpack_exports__._J;var __webpack_exports__useValidateField=__webpack_exports__.TF;var __webpack_exports__useValidateForm=__webpack_exports__.D4;var __webpack_exports__validate=__webpack_exports__.Gu;var __webpack_exports__validateObject=__webpack_exports__.FF;export{__webpack_exports__ErrorMessage as ErrorMessage,__webpack_exports__Field as Field,__webpack_exports__FieldArray as FieldArray,__webpack_exports__FieldContextKey as FieldContextKey,__webpack_exports__Form as Form,__webpack_exports__FormContextKey as FormContextKey,__webpack_exports__IS_ABSENT as IS_ABSENT,__webpack_exports__configure as configure,__webpack_exports__defineRule as defineRule,__webpack_exports__useField as useField,__webpack_exports__useFieldArray as useFieldArray,__webpack_exports__useFieldError as useFieldError,__webpack_exports__useFieldValue as useFieldValue,__webpack_exports__useForm as useForm,__webpack_exports__useFormErrors as useFormErrors,__webpack_exports__useFormValues as useFormValues,__webpack_exports__useIsFieldDirty as useIsFieldDirty,__webpack_exports__useIsFieldTouched as useIsFieldTouched,__webpack_exports__useIsFieldValid as useIsFieldValid,__webpack_exports__useIsFormDirty as useIsFormDirty,__webpack_exports__useIsFormTouched as useIsFormTouched,__webpack_exports__useIsFormValid as useIsFormValid,__webpack_exports__useIsSubmitting as useIsSubmitting,__webpack_exports__useResetForm as useResetForm,__webpack_exports__useSubmitCount as useSubmitCount,__webpack_exports__useSubmitForm as useSubmitForm,__webpack_exports__useValidateField as useValidateField,__webpack_exports__useValidateForm as useValidateForm,__webpack_exports__validate as validate,__webpack_exports__validateObject as validateObject}
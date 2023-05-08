import { LightningElement, api } from 'lwc';
import vueApp from './vue-instance.js';

export default class VueAppComponent extends LightningElement {
    @api title = '';

    renderedCallback() {
        const el = this.template.querySelector('.vue-application');
        vueApp.provide('$vueEl', el);
        vueApp.mount(el);
    }

    disconnectedCallback() {
        vueApp.unmount();
    }
}

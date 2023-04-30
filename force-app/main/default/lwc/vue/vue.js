import { LightningElement, api } from 'lwc';
import vueApp from './vue-instance.js';

export default class VueAppComponent extends LightningElement {
    @api title = '';

    renderedCallback() {
        const el = this.template.querySelector('.vue-application');
        vueApp.provide('$lwc', this);
        vueApp.mount(el);
    }

    disconnectedCallback() {
        // vueApp.destroy(); // TODO: clarify how to properly destroy
    }
}

import { LightningElement, api, track } from 'lwc';
import template from './vue.template.js';

import { createApp } from 'c/vueLib'; 

export default class VueApp extends LightningElement {
    // invoke the loaders in connectedCallback() to ensure that
    // the page loads and renders the container before the map is created
    @api title = '';
    @track loadCompleted = false;

    // async connectedCallback() {}

    renderedCallback() {
        // const _this = this; // Save context
        const el = this.template.querySelector('.vue-app');
        const vueApp = createApp({
            data: () => {
                return {
                    title: this.title,
                    name: 'Vue!'
                }
            },
            methods: {
                triggerEvent: () => {
                    const evt = new CustomEvent("sendaccount", {
                        detail: { accountId: 'testAcc' },
                        bubbles: true,
                        composed: true
                    });
                    // Here we reference the `accountList` ref to dispatch the native event.
                    this.dispatchEvent(evt);
                }
            },
            render: template
        }).mount(el);

        console.log('Vue App instance: ', vueApp);

        const evt = new CustomEvent("vueinit", {
            detail: { instance: vueApp },
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(evt);
    }
}
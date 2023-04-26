import { LightningElement, api } from 'lwc';
import vueApp from 'c/vue';
import appTemplate from './vueApp-template.js';

const getAppComponent = (lwcContext) => ({
    data() {
        return {
            items: [{id: 'id-1', 'title': 'first'}, {id: 'id-2', 'title': 'second'}],
            title: lwcContext.title,
            name: 'Vue!',
        }
    },
    methods: {
        triggerEvent(event, ...args) {
            console.log('Example of template arguments: ', event, args)
            lwcContext.dispatchEvent(new CustomEvent("sendaccount", {
                detail: { accountId: `testAcc${Number(new Date())}` },
                bubbles: true,
                composed: true
            }));
        }
    },
    created() {
        lwcContext.dispatchEvent(new CustomEvent("vueinit", {
            detail: { instance: this },
            bubbles: true,
            composed: true
        }));
    },
    render: appTemplate
});

export default class VueAppComponent extends LightningElement {
    @api title = '';

    renderedCallback() {
        const el = this.template.querySelector('.vue-app'); 
        vueApp.component('App', getAppComponent(this));
        vueApp.mount(el);
    }
}
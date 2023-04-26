import { LightningElement, api } from 'lwc';
import vueApp from 'c/vue';
import appTemplate from './vueApp-template.js';

const getAppComponent = (context) => ({
    data() {
        return {
            items: [{id: 'id-1', 'title': 'first'}, {id: 'id-2', 'title': 'second'}],
            title: context.title,
            name: 'Vue!',
        }
    },
    methods: {
        triggerEvent(event, ...args) {
            console.log('Example of template arguments: ', event, args)
            context.dispatchEvent(new CustomEvent("sendaccount", {
                detail: { accountId: `testAcc${Number(new Date())}` },
                bubbles: true,
                composed: true
            }));
        }
    },
    render: appTemplate
});

export default class VueAppComponent extends LightningElement {
    // invoke the loaders in connectedCallback() to ensure that
    // the page loads and renders the container before the map is created
    @api title = '';

    renderedCallback() {
        const el = this.template.querySelector('.vue-app'); 
        vueApp.component('App', getAppComponent(this));
        vueApp.mount(el);

        this.dispatchEvent(new CustomEvent("vueinit", {
            detail: { instance: vueApp },
            bubbles: true,
            composed: true
        }));
    }
}
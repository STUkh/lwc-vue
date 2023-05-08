import { LightningElement } from "lwc";
import { useConterStore } from 'c/store';
import { withPinia } from 'c/lwcMixins';

const counterStore = useConterStore();

export default class ContainerVue extends withPinia({ counterStore }, LightningElement) {
    counterStore = counterStore.$state;

    // Class property to hold the instance of the framework
    vueAppTitle;

    // Class property to hold the event value sent from the 3rd party framework
    eventValue;

    // Class property to hold the (inital) title value
    titleValue = "Vue App";

    // Key up handler for the outer property input field
    handleKeyUp(event) {
        // This looks a bit hacky, and it is. We can set the reactive
        // property on the Vue component, but first we have to get the
        // handle on the first (and only) child element.
        this.vueAppTitle.value = event.target.value;
    }

    handleVueInstance(event) {
        // This looks a bit hacky, and it is. We can set the reactive
        // property on the Vue component, but first we have to get the
        // handle on the first (and only) child element.
        this.vueAppTitle = event.detail.title;
    }

    // Event handler for receiving the account Id from Preact
    handleSendAccount(event) {
        event.stopPropagation();
        this.eventValue = event.detail.accountId;
    }

    // Pinia related methods
    connectedCallback() {
        super.connectedCallback();
    }

    handleIncrement() {
        counterStore.increment();
    }

    handleDecrement() {
        counterStore.decrement();
    }
}
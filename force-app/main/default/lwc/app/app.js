import { LightningElement } from "lwc";

export default class ContainerPreact extends LightningElement {
    // Class property to hold the instance of the framework
    vueApp;

    // Class property to hold the event value sent from the 3rd party framework
    eventValue;

    // Class property to hold the (inital) title value
    titleValue = "Vue App";

    // Key up handler for the outer property input field
    handleKeyUp(event) {
        // This looks a bit hacky, and it is. We can set the reactive
        // property on the Vue component, but first we have to get the
        // handle on the first (and only) child element.
        this.vueApp.title = event.target.value;

        // console.log(234, this.vueApp)
    }

    handleVueInstance(event) {
        // This looks a bit hacky, and it is. We can set the reactive
        // property on the Vue component, but first we have to get the
        // handle on the first (and only) child element.
        this.vueApp = event.detail.instance;
    }

    // Event handler for receiving the account Id from Preact
    handleSendAccount(event) {
        event.stopPropagation();
        this.eventValue = event.detail.accountId;
    }
}
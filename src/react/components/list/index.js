// `h` doesn't seemed to be used, but it is key for the Babel transform.
import React, { Component, createRef } from "react";
// import getAccounts from "@salesforce/apex/AccountController.getAccounts";

export default class List extends Component {
    // Using a ref is the important element for event dispatching,
    // as this allows us to send a native CustomEvent from a list
    // entry.
    ref = createRef();

    state = {
        accounts: []
    };

    componentDidMount() {
        setTimeout(() => {
            const result = [{ Id: 'acc1Id', Name: 'First Account' }, { Id: 'acc2Id', Name: 'Second Account' }]
            this.setState({ accounts: result });
        }, 1000);
    }

    sendAccount(accountId) {
        const evt = new CustomEvent("sendaccount", {
            detail: {
                accountId
            },
            bubbles: true,
            composed: true
        });
        this.ref.current.dispatchEvent(evt);
    }

    render() {
        if (this.state.accounts) {
            const listItems = this.state.accounts.map((account) => (
                <li
                    style={{ cursor: "pointer" }}
                    key={account.Id.toString()}
                    onClick={() => {
                        this.sendAccount(account.Id);
                    }}
                >
                    {account.Id} - {account.Name}
                </li>
            ));
            return (
                <div>
                    {this.props.title}
                    <ul ref={this.ref}>{listItems}</ul>
                </div>
            );
        }
        return <div />;
    }
}
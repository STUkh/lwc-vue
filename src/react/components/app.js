// `h` doesn't seemed to be used, but it is key for the Babel transform.
import React, { Component } from "react";

// import List from "./list";

export default class App extends Component {
    render() {
        return (
            <div id="app">
                Data from outer property: {this.props.title}
                <br />
                <br />
                {/* <List />  */}
            </div>
        );
    }
}

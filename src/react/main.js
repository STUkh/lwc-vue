import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom';

function createApp(el, data) {
    const app = <App title={data.title} />; // We're using a component with lifecycles for this example.
    ReactDOM.render(app, el);
    return app;
}

export default createApp;
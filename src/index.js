import '@lwc/synthetic-shadow';
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import { createElement } from 'lwc';
import App from '../force-app/main/default/lwc/app/app';

const app = createElement('c-app', { is: App });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.body.appendChild(app);

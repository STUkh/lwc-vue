import { createPinia } from 'c/pinia';
export { default as useConterStore } from './counter-store.js';
export { default as useDateStore } from './date-store.js';

export const pinia = createPinia();

export default pinia;

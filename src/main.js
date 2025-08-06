// import { createApp } from 'vue'
// import App from './App.vue'
// import './assets/styles.css'

// createApp(App).mount('#app')

import { createApp, defineCustomElement, h, getCurrentInstance } from 'vue';
// import { createPinia } from 'pinia';
import App from "./App.vue";
import s from "./assets/styles.css?inline";
import a from "./style.css?inline";


export const createElementInstance = ({ component = null } = {}) => {
    return defineCustomElement ({
        setup(props) {
            const app = createApp(component);
            // app.use(createPinia());
            const inst = getCurrentInstance();
            Object.assign(inst.appContext, app._context);
            Object.assign(inst.provides, app._context.provides);
        },
        render: () => h(component),
        styles : [s, a],
    });
};

customElements.define("component-one", createElementInstance({ component: App}))
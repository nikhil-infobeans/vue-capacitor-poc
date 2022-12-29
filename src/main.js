import { createApp } from 'vue';
import App from "./App.vue";
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/dist/vuetify.min.css';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).mount('#app');
defineCustomElements(window);
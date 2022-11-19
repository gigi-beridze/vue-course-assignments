import { createApp } from 'vue';
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import Basebutton from './components/UI/BaseButton.vue'
import BaseDialog from './components/UI/BaseDialog.vue'

const app = createApp(App)
app.component('base-card', BaseCard)
app.component('base-button', Basebutton)
app.component('base-dialog', BaseDialog)
app.mount('#app');

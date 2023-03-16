import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';

const app = createApp(App);
app.component('Loading', LoadingSpinner);
app.mount('#app');

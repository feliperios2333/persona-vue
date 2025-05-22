import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import {faBank, faBuilding, faPencil, faPhone, faPlus, faTag, faTrash, faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

library.add(faPhone);
library.add(faUser);
library.add(faBuilding);
library.add(faBank);
library.add(faPencil);
library.add(faPlus);
library.add(faTag);
library.add(faTrash);

createApp(App)
.use(router)
.mount('#app')

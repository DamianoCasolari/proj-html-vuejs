import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import * as bootstrap from 'bootstrap'




import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faClock, faCircle, faStar, faSearch, faBell, faSun, faCloudMoon, faMoon, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUser, faEnvelope, faClock, faCircle, faStar, faFacebook, faTwitter, faInstagram, faLinkedin, faSearch, faBell, faSun, faCloudMoon, faMoon, faChevronLeft, faChevronRight);


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

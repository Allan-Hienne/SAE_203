import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDgDEeNv3Hn9PYtIZ9uSu1UnhjoIgg_yWw",
    authDomain: "sae203-c08b1.firebaseapp.com",
    projectId: "sae203-c08b1",
    storageBucket: "sae203-c08b1.appspot.com",
    messagingSenderId: "534994170795",
    appId: "1:534994170795:web:db6448a335a7fde58258ee"
  };

  const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')

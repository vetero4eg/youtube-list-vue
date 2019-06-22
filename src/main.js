import 'current-script-polyfill';
import Vue from 'vue';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyC8WRDJL2XoDbuCgWjV9G-BS9HM-TvV90I',
  authDomain: 'test-ytvideolist.firebaseapp.com',
  databaseURL: 'https://test-ytvideolist.firebaseio.com',
  projectId: 'test-ytvideolist',
  storageBucket: 'test-ytvideolist.appspot.com',
  messagingSenderId: '364132080225',
  appId: '1:364132080225:web:c7341a5bd0efd357',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

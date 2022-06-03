<template>


  <RouterView />
</template>

<script>

import {  } from "@heroicons/vue/outline";
// Fonctions Firestore
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
// Fonctions Storage
import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
export default {
  components: { },
};
</script>
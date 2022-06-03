<template>
  <div class="container">


    <form>
      <h3 class="m-3 font-bold dark:bg-grey dark:text-white">Nouvel artiste</h3>
      <div class="input-group m-3">
        <div class="input-group-prepend">
          <span class="input-group-text"></span>
        </div>
        <input type="text" class="form-control" v-model="nom" required />
        <button
          class="btn btn-light rounded-sm bg-black text-white"
          type="button"
          @click="createArtiste()"
          title="Création"
        >
          Ajouter
        </button>
      </div>
    </form>

    <div class="card-body table-responsive">
      <table class="text-light table">
        <thead>
          <tr>
            <th scope="col">
              <div class="float-left ml-3 mt-3">Liste des artistes actuels</div>
              <span>
                <div class="input-group">
                  <div class="input-group-prepend m-3">
                    <span class="input-group-text">Filtrage</span>
                  </div>
                  <input type="text" class="form-control" v-model="filter" />
                  <button
                    class="btn btn-light rounded-sm bg-black text-white"
                    type="button"
                    title="Filtrage"
                  >
                    Recherche
                  </button>
                </div>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <form>
                <div class="input-group m-3">
                  <div
                    class="mx-auto grid max-w-5xl grid-flow-row-dense gap-7 sm:grid-cols-[repeat(auto-fit,minmax(22rem,auto))] lg:grid-cols-[repeat(auto-fit,minmax(15rem,auto))]"
                  >
                    <div v-for="artiste in filterByNom" :key="artiste.id">
                      <input
                        type="text"
                        class="form-control w-3/4 rounded-lg bg-red-100 text-center font-homenaje text-3xl uppercase text-white"
                        v-model="artiste.nom"
                        required
                      />
                      <button
                        class="btn btn-light"
                        type="submit"
                        @click.prevent="updateArtiste(artiste)"
                        title="Modification"
                      >
                        <i class="fa fa-save fa-lg"></i>
                      </button>
                      <button
                        class="btn btn-light focus:shadow-outline m-1 h-7 rounded-xl border-2 border-black bg-white px-5 font-homenaje text-lg text-black transition-colors duration-150 hover:bg-red-700 hover:text-white"
                        type="submit"
                        @click.prevent="deleteArtiste(artiste)"
                        title="Suppression"
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex flex-col justify-center items-center mt-20 bg-black">
     <img src="/logo.png" alt="" class="w-10">
     <img src="/text_logo.svg" alt="" class="w-44 mt-6">
     <div class="flex items-center mt-8">
       <img src="/Rectangle10.png" alt="" class="mx-4">
       <img src="/twitter-logo-silhouette1.png" alt="" class="mx-4">
       <img src="/logo-instagram-blanc1.png" alt="" class="mx-4">
       <img src="/logo-facebook-blanc1.png" alt="" class="mx-4">
       <img src="/twitter-logo-silhouette1.png" alt="" class="mx-4">
       <img src="/youtube1.png" alt="" class="mx-4">
       <img src="/Rectangle10.png" alt="" class="mx-4">
     </div>
     <div class="text-white grid grid-cols-5 justify-center items-center mt-12 mb-24">
       <div class="lg:hidden">
          <MenuIcon class="w-8 cursor-pointer" @click="MenuOpen = !MenuOpen" />
        </div>
       <RouterLink to="/listeArtiste" @click="MenuOpen = !MenuOpen"
              class="col-start-2 col-end-2 row-start-1 items-center mt-3">-> LISTE ARTISTE</RouterLink>
       <RouterLink to="/Contact" @click="MenuOpen = !MenuOpen"
              class="col-start-2 col-end-2 row-start-2 items-center mt-3">-> CONTACT</RouterLink>
       <p class="col-start-2 col-end-2 row-start-3 items-center mt-3">-> MENTIONS LEGALES</p>
       <RouterLink to="/Artiste" @click="MenuOpen = !MenuOpen"
              class="col-start-4 col-end-4 row-start-1 items-center">-> ARTISTES</RouterLink>
       <RouterLink to="/Artiste" @click="MenuOpen = !MenuOpen"
              class="col-start-4 col-end-4 row-start-2 items-center">-> FESTIVAL</RouterLink>
       <RouterLink to="/Programmation" @click="MenuOpen = !MenuOpen"
              class="col-start-4 col-end-4 row-start-3 items-center mt-3">-> PROGRAMMATION</RouterLink>
     </div>
     </div>
    </div>
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  name: "ListeView",
  data() {
    return {
      nom: null, // Pour la création d'une catégorie
      listeArtisteSynchro: [],
      filter: "",
    };
  },

  computed: {
    //Tri des catégories par ordre alpha
    orderByNom: function () {
      return this.listeArtisteSynchro.sort(function (a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        return 0;
      });
    },

    filterByNom: function () {
      if (this.filter.length > 0) {
        let filter = this.filter.toLowerCase();
        return this.orderByNom.filter(function (artiste) {
          return artiste.nom.toLowerCase().includes(filter);
        });
      } else {
        return this.orderByNom;
      }
    },
  },

  mounted() {
    this.getArtisteSynchro();
  },
  methods: {
    async getArtisteSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtiste = collection(firestore, "artiste");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbArtiste, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeArtisteSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },
    async createArtiste() {
      const firestore = getFirestore();
      const dbArtiste = collection(firestore, "artiste");
      const docRef = await addDoc(dbArtiste, {
        nom: this.nom,
      });
      console.log("document crée avec le id : ", docRef.id);
    },

    async updateArtiste(artiste) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", artiste.id);
      await updateDoc(docRef, {
        nom: artiste.nom,
      });
    },

    async deleteArtiste(artiste) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", artiste.id);
      await deleteDoc(docRef);
    },
  },
};
</script>
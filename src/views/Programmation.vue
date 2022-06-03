<template>
<div class="bg-black">
  <div class="bg-[url('/image2flou.png')] w-screen h-screen bg-cover bg-no-repeat ">
    <header class="sticky top-0 z-40 h-16 w-full px-3">
      <div class="flex h-full w-full items-center justify-between">
        <div class="flex items-center">
          <img src="/logo.png " alt="logo_fest" class="" />
        </div>
        <div class="lg:hidden">
          <MenuIcon class="w-8 cursor-pointer" @click="MenuOpen = !MenuOpen" />
        </div>
        <nav
          class="
            absolute
            left-0
            top-16
            text-lg
            w-full
            -translate-y-[200%]
            bg-slate-300
            pl-2
            lg:relative lg:top-0 lg:w-fit lg:translate-y-0 lg:bg-transparent
          "
          :class="MenuOpen && 'translate-y-0'"
        >
          <ul class="flex flex-col gap-8 py-4 font-bold lg:flex-row text-white m-24 mt-28">
            <RouterLink to="/Programmation" @click="MenuOpen = !MenuOpen"
              >PROGRAMMATION</RouterLink>
            <RouterLink to="/Artiste" @click="MenuOpen = !MenuOpen"
              >ARTISTES</RouterLink>
            <RouterLink to="/Festival" @click="MenuOpen = !MenuOpen"
              >FESTIVAL</RouterLink>
          </ul>
        </nav>

        

      </div>
    </header>

    <div class="flex justify-center mr-96 mt-16">
  <p class="text-white font-prompt font-bold border-b-2 border-white m-6 mr-96 text-2xl">Liste des concerts</p>
  </div>
  <p class="text-white font-prompt font-light m-6 mr-96 text-xl ml-80">POPULAIRE</p>
  <div class="flex justify-center items-center">


  <card-concert
image="/marshmellocard.png"
artiste="Futur Bass Concert"
jour="30 JUILLET 2022 / PARTIE 1"/>
<card-concert
image="/davidg.png"
artiste="Dance Electronic"
jour="30 JUILLET 2022 / PARTIE 2"/>
<card-concert
image="/marting.png"
artiste="House / Futur Bass"
jour="31 JUILLET 2022 / PARTIE 1"/>
<card-concert
image="/calvinh.png"
artiste="Electro"
jour="31 JUILLET 2022 / PARTIE 2"/>
</div>
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
       <RouterLink to="/listeArtiste" @click="MenuOpen = !MenuOpen"
              class="col-start-2 col-end-2 row-start-1 items-center mt-3">-> LISTE ARTISTE</RouterLink>
       <RouterLink to="/Contact" @click="MenuOpen = !MenuOpen"
              class="col-start-2 col-end-2 row-start-2 items-center mt-3">-> CONTACT</RouterLink>
       <p class="col-start-2 col-end-2 row-start-3 items-center mt-3">-> MENTIONS LEGALES</p>
       <RouterLink to="/Artiste" @click="MenuOpen = !MenuOpen"
              class="col-start-4 col-end-4 row-start-1 items-center">-> ARTISTES</RouterLink>
       <RouterLink to="/Artiste" @click="MenuOpen = !MenuOpen"
              class="col-start-4 col-end-4 row-start-2 items-center mt-3">-> FESTIVAL</RouterLink>
       <RouterLink to="/Programmation" @click="MenuOpen = !MenuOpen"
              class="col-start-4 col-end-4 row-start-3 items-center mt-3">-> PROGRAMMATION</RouterLink>
     </div>
   </div>
</div>

</div>
</template>

<script>
import cardConcert from "../components/cardConcert.vue"

export default {
  components:{
    cardConcert
  }
};
</script>

<style>
</style>
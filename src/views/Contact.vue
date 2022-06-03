<template>
<div class="bg-black">
  <div class="bg-[url('/HeaderContact.png')] w-screen h-screen bg-cover bg-no-repeat bg-black">
    <header class="sticky top-0 z-40 h-16 w-full px-3">
      <div class="flex h-full w-full items-center justify-between">
        <div class="flex items-center">
          <img src="../../public/logo.png " alt="logo_fest" class="" />
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
  <p class="text-white font-prompt font-bold border-b-2 border-white m-6 text-3xl ">CONTACT</p>
  </div>
  <div class="flex flex-col justify-center items-center mr-64 mt-16">
  <p class="text-zinc-100 font-prompt font-medium">VOUS POUVEZ NOUS RETROUVER SUR</p>
  <p class="text-red-500 font-prompt font-bold mt-6">speedfire@gmail.com</p>
  <p class="text-zinc-100 font-prompt font-medium mt-12">AINSI QUE SUR NOS RESEAUX SOCIAUX</p>
  </div>


</div>




  <div class="flex flex-col justify-center items-center bg-black mt-[-200px]">
     <img src="logo.png" alt="" class="w-10">
     <img src="text_logo.svg" alt="" class="w-44 mt-6">
     <div class="flex items-center mt-8">
       <img src="../../public/Rectangle 10.png" alt="" class="mx-4">
       <img src="../../public/twitter-logo-silhouette 1.png" alt="" class="mx-4">
       <img src="../../public/logo-instagram-blanc 1.png" alt="" class="mx-4">
       <img src="../../public/logo-facebook-blanc 1.png" alt="" class="mx-4">
       <img src="../../public/twitter-logo-silhouette 1.png" alt="" class="mx-4">
       <img src="../../public/youtube 1.png" alt="" class="mx-4">
       <img src="../../public/Rectangle 10.png" alt="" class="mx-4">
     </div>
     <div class="text-white grid grid-cols-5 justify-center items-center mt-12 mb-24">
       <p class="col-start-2 col-end-2 row-start-1 items-center">-> BILLETS</p>
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
</template>

<script>
import card from "../components/card.vue"
import cardConcert from "../components/cardConcert.vue"

export default {
  components:{
      card,
    cardConcert
  }
};
</script>

<style>
</style>
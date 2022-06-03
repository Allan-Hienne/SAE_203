<template>
<div class="bg-black">
  <div class="bg-[url('/image2.png')] w-screen h-screen bg-cover bg-no-repeat">
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
     <div class="flex flex-col justify-center items-center pt-64">
      <img src="/text_logo.svg" class="w-72">
    <div class="mx-44  text-center">
      <p class="mt-44 font-bold text-white text-5xl">Faster and faster music that sets the world on fire</p>
    </div>
    </div>
  </div>
  <div class="flex justify-center mr-96">
  <p class="text-white font-prompt font-bold border-b-2 border-white m-6">CONCERTS</p>
  </div>
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-row items-center">
      <img src="/Vector-1.png" alt="flêche gauche">
    <card 
    img="/public/Marshmello.png"
    genre="JOUR 1 / PARTIE 1"
    nom="Futur Bass Concert"/>
    <img src="/Vector.png" alt="flêche droite">
    </div>
    
  <div class="flex justify-center mr-96 mt-16">
  <p class="text-white font-prompt font-bold border-b-2 border-white m-6">ARTISTES</p>
  </div>
<div class="flex flex-row items-center">
  <img src="/Vector-1.png" alt="">
    <card 
    img="/public/Martin_garrix.png"
    genre="DISK-JOCKEY"
    nom="Martin Garrix"/>
    <img src="/Vector.png" alt="">
      </div>
    </div>
    <div class="flex flex-col justify-center">

   
      <div class="flex justify-center mr-96 mt-16">
  <p class="text-white font-prompt font-bold border-b-2 border-white m-6 ">GALERIE D'IMAGES</p>
  </div>
  <div class=" grid grid-cols-5 justify-center items-center">
    <img class="col-start-2 col-end-2 row-start-1 items-center " src="/image6.png" alt="dfv">
    <img class="col-start-2 col-end-2 row-start-2 items-center " src="/image7.png" alt="vdf">
    <img class="col-start-2 col-end-2 row-start-3 items-center " src="/image8.png" alt="vdf">
    <img class="col-start-2 col-end-2 row-start-4 items-center " src="/image9.png" alt="vd">
    <img class="col-start-4 col-end-4 row-start-1 items-center " src="/image10.png" alt="te">
    <img class="col-start-4 col-end-4 row-start-2 items-center" src="/image11.png" alt="bd">
    <img class="col-start-4 col-end-4 row-start-3 items-center " src="/image12.png" alt="sbs">
    <img class="col-start-4 col-end-4 row-start-4 items-center " src="/image13.png" alt="">
  </div>
          
   </div>
   <div class="flex flex-col justify-center items-center mt-20">
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
       <p class="col-start-2 col-end-2 row-start-1 items-center">-> BILLETS</p>
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






  
  
</template>

<script>
import card from "../components/card.vue"

export default {
  components:{
    card
  }
};
</script>

<style>
</style>
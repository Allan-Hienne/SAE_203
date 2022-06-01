<template>
<div class="bg-black">
  <div class="bg-[url('/image2.png')] w-screen h-screen bg-cover bg-no-repeat ">
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
            <li>PROGRAMMATION</li>
            <li>ARTISTES</li>
            <li>FESTIVAL</li>
          </ul>
        </nav>

        

      </div>
    </header>
    <div class="flex flex-col justify-center items-center pt-64">
      <img src="/text_logo.svg" class="w-72">
    <div class="mx-8  text-center">
      <p class="mt-44 font-bold text-white text-3xl">Faster and faster music that sets the world on fire</p>
    </div>
    </div>
    
  </div>
  
  <p class="text-white">CONCERTS</p>
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-row items-center">
      <img src="../../public/Vector-1.png" alt="flêche gauche">
    <card 
    img="/public/Marshmello.png"
    genre="disk-jockey"
    nom="Marshello"/>
    <img src="../../public/Vector.png" alt="flêche droite">
    </div>
    

<div class="flex flex-row items-center">
  <img src="../../public/Vector-1.png" alt="">
    <card 
    img="/public/Martin_garrix.png"
    genre="disk-jockey"
    nom="Martin Garrix"/>
    <img src="../../public/Vector.png" alt="">
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
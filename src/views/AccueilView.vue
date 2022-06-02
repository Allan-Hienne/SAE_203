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
  <div class="flex justify-center mr-96">
  <p class="text-white font-prompt font-bold">CONCERTS</p>
  </div>
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-row items-center">
      <img src="../../public/Vector-1.png" alt="flêche gauche">
    <card 
    img="/public/Marshmello.png"
    genre="JOUR 1 / PARTIE 1"
    nom="Futur Bass Concert"/>
    <img src="../../public/Vector.png" alt="flêche droite">
    </div>
    
  <div class="flex justify-center mr-96 mt-16">
  <p class="text-white font-prompt font-bold">ARTISTES</p>
  </div>
<div class="flex flex-row items-center">
  <img src="../../public/Vector-1.png" alt="">
    <card 
    img="/public/Martin_garrix.png"
    genre="DISK-JOCKEY"
    nom="Martin Garrix"/>
    <img src="../../public/Vector.png" alt="">
      </div>
    </div>
    <div class="flex flex-col justify-center">

   
      <div class="flex justify-center mr-96 mt-16">
  <p class="text-white font-prompt font-bold border-b-4 border-white m-6">GALERIE D'IMAGES</p>
  </div>
  <div class=" grid grid-cols-5 justify-center items-center">
    <img class="col-start-2 col-end-2 row-start-1 items-center " src="../../public/image6.png" alt="">
    <img class="col-start-2 col-end-2 row-start-2 items-center " src="../../public/image7.png" alt="">
    <img class="col-start-2 col-end-2 row-start-3 items-center " src="../../public/image8.png" alt="">
    <img class="col-start-2 col-end-2 row-start-4 items-center " src="../../public/image9.png" alt="">
    <img class="col-start-4 col-end-4 row-start-1 items-center " src="../../public/image10.png" alt="">
    <img class="col-start-4 col-end-4 row-start-2 items-center" src="../../public/image11.png" alt="">
    <img class="col-start-4 col-end-4 row-start-3 items-center " src="../../public/image12.png" alt="">
    <img class="col-start-4 col-end-4 row-start-4 items-center " src="../../public/image13.png" alt="">
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
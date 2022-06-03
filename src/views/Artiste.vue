<template>
<div class="bg-black">
  <div class="bg-[url('/image2flou.png')] w-screen h-screen bg-cover bg-no-repeat bg-black">
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
</div>
    <div class="flex justify-center mr-96 mt-[-550px]">
  <p class="text-white font-prompt font-bold border-b-2 border-white m-6 mr-96 text-2xl">Découvrez nos artistes !</p>
  </div>
  <div class="flex justify-center mr-96 mt-2">
  <p class="text-white font-prompt font-light m-6 mr-96 text-2xl">GENRE</p>
  </div>
  <div class="grid grid-cols-7">
<div class="col-start-3 col-end-3 row-start-1 items-center">
    <img  src="/image14.png" alt="" class="rounded-2xl">
    <p class="font-prompt font-extrabold text-amber-500">HOUSE MUSIC</p>
</div>
<div class="col-start-5 col-end-5 row-start-1 items-center">
    <img src="/image15.png" alt="" class="rounded-2xl">
    <p class="font-prompt font-extrabold text-amber-500">ELECTRO MUSIC</p>
</div>
<div class="col-start-3 col-end-3 row-start-2 items-center">
    <img src="/image16.png" alt="" class="rounded-2xl">
    <p class="font-prompt font-extrabold text-amber-500">FUTUR BASS</p>
</div>
<div class="col-start-5 col-end-5 row-start-2 items-center">
    <img src="/image17.png" alt="" class="rounded-2xl">
    <p class="font-prompt font-extrabold text-amber-500">DANCE ELECTRO</p>
</div>

</div>

 <div class="flex justify-center mr-96 mt-12">
  <p class="text-white font-prompt font-light m-6 mr-96 text-2xl">NOS ARTISTES</p>
  </div>

  <div class="grid grid-cols-7">
    <card class="col-start-3 col-end-3 row-start-1 items-center"
    img="/public/MARTINgarrix.png"
    genre="DISK-JOCKEY"
    nom="Martin Garrix"/>
    <card class="col-start-5 col-end-5 row-start-1 items-center"
    img="/public/DAVIDguetta.png"
    genre="DISK-JOCKEY"
    nom="Davis Guetta"/>
    <card class="col-start-3 col-end-3 row-start-2 items-center"
    img="/public/DJsnake.png"
    genre="DISK-JOCKEY"
    nom="DJ Snake"/>
    <card class="col-start-5 col-end-5 row-start-2 items-center"
    img="/public/Marsh.png"
    genre="DISK-JOCKEY"
    nom="Marshmello"/>
    <card class="col-start-3 col-end-3 row-start-3 items-center"
    img="/public/CALVINharris.png"
    genre="DISK-JOCKEY"
    nom="Calvin Harris"/>
    <card class="col-start-5 col-end-5 row-start-3 items-center"
    img="/public/petitBiscuit.png"
    genre="DISK-JOCKEY"
    nom="Petit Biscuit"/>

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
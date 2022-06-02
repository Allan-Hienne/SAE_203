<template>
<div class="bg-black">
  <div class="bg-[url('/image28.png')] w-screen h-screen bg-cover bg-no-repeat bg-black">
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


</div>

 <div class="flex justify-center mr-96 mt-[-550px]">
  <p class="text-white font-prompt font-bold border-b-2 border-white m-6 mr-96 text-2xl">A propos du Festival</p>
  </div>
  <div>
    <p class="flex text-white mx-80 font-prompt font-bold text-lg mt-16">Notre Festival SPEEDFIRE à été crée dans le but de rassembler bon nombre d’entre vous afin de vous faire passer le week-end le plus dingue de votre vie, afin de permettre à l’ensemble des festivaliers de faire de nouvelles rencontres.</p>
    <p class="flex text-white mx-80 font-prompt font-bold text-lg mt-16">Cette année nous nous sommes surpassés, nous avons l’honneur d’avoir pour cette évênement des mastodontes de la musique, merci à David Guetta, Martin Garrix, DJ Snake, Petit Biscuit, Calvin Harris ainsi que Marshmello d’avoir répondu à l’appel et ainsi pouvoir passer un Festival qui sera plus que mémorable !</p>
    <p class="flex text-white mx-80 font-prompt font-bold text-lg mt-16">C’est grâce à vous si cet évênement peut avoir lieu ! Sans vous, ce week-end n’existerais probablement pas...</p>
    <p class="flex text-white mx-80 font-prompt font-bold text-lg mt-16">C’est grâce à vous si cet évênement peut avoir lieu ! Sans vous, ce week-end n’existerais probablement pas...</p>
</div>



  <div class="flex flex-col justify-center items-center mt-20 bg-black">
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
       <p class="col-start-2 col-end-2 row-start-2 items-center mt-3">-> CONTACT</p>
       <p class="col-start-2 col-end-2 row-start-3 items-center mt-3">-> MENTIONS LEGALES</p>
       <p class="col-start-4 col-end-4 row-start-1 items-center ">-> ARTISTES</p>
       <p class="col-start-4 col-end-4 row-start-2 items-center mt-3">-> FESTIVALS</p>
       <p class="col-start-4 col-end-4 row-start-3 items-center mt-3">-> PROGRAMMATION</p>
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
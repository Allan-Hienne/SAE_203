<template>
 <div class="mt-5">
      <div>
        <div class="line mx-auto"></div>
      </div>
      <!-- artiste -->
      <div class="flex mt-2 justify-between ml-3 mr-3 gap-4">
        <div class="flex flex-col  shadow-box">
          <div>
            <img :src="img" alt="" class="w-48">
          </div>
          <div class="carre_artiste mt-[-30px] bg-white rounded-2xl m-4">
            <h4 class="text-left font-prompt font-semibold text-red-600 mt-1 ml-2 shadow_text text-xs">{{ genre }}</h4>
            <h3 class="text-left font-prompt font-extrabold color-text-black mt-1 ml-2 shadow_text text-base">{{ nom }}</h3>
          </div>
        </div>
      </div>
      <RouterLink to="prog" class="">
        <div class="flex justify-end mr-5">
          <p class="font-prompt font-bold text-white shadow_text">En savoir plus</p>
        </div>
      </RouterLink>
      <div class="flex justify-end mr-3">
        <div class="line2 "></div>
      </div>  
    </div>
</template>

<script>
export default {
  props:{
    img:{
      type: String,
    },
    nom:{
      type: String,
    },
    genre:{
      type: String,
    },
  },
};
</script>
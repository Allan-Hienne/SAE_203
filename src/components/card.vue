<template>
 <div class="mt-5">
      <div>
        <div class="line mx-auto"></div>
      </div>
      <!-- artiste -->
      <div class="flex mt-2 justify-between ml-3 mr-3 gap-4">
        <div class="flex flex-col  shadow-box">
          <div>
            <img :src="img" alt="">
          </div>
          <div class="carre_artiste mt-[-15px] bg-white rounded-3xl m-4">
            <h4 class="text-center font-prompt font-semibold color-text-black mt-1 shadow_text">{{ genre }}</h4>
            <h3 class="text-center font-prompt font-semibold color-text-black mt-1 shadow_text">{{ nom }}</h3>
          </div>
        </div>
      </div>
      <RouterLink to="prog" class="">
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
<template>
  <figure
    class="m-10 grid grid-flow-row-dense grid-cols-1 rounded-lg bg-white"
  >
    <img
      class="col-span-3 hover:blur-sm h-48 w-full rounded-t-lg object-cover"
      :src="image"
      alt=""
    />

    <figcaption
      class="relative contents w-full rounded-lg border-2 border-t-0 border-indigo-100 p-5 pt-8"
    >
      <section class="w-full">
        <div class="w-full text-center">
          <h3 class="font-prompt font-bold text-xl text-zinc-900">{{ artiste }}</h3>
          <p class="font-prompt text-xs font-bold text-red-600">{{ jour }}</p>
        </div>
      </section>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    artiste: String,
    image: String,
    heure: String,
    jour: String,
},
  components: {},
};
</script>
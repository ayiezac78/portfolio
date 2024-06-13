<template>
  <div class="columns-2 md:columns-4 gap-4 space-y-4">
    <img alt="images" class="w-full object-cover aspect-video mb-6" src="https://picsum.photos/500/300?random=1" />
    <img alt="images" class="w-full object-cover aspect-square mb-6" src="https://picsum.photos/500/300?random=2" />
    <img alt="images" class="w-full object-cover aspect-square mb-6" src="https://picsum.photos/500/300?random=3" />
    <img alt="images" class="w-full object-cover aspect-square mb-6" src="https://picsum.photos/500/300?random=4" />
    <img alt="images" class="w-full object-cover aspect-video mb-6" src="https://picsum.photos/500/300?random=10" />
    <img alt="images" class="w-full object-cover aspect-video mb-6" src="https://picsum.photos/500/300?random=6" />
    <img alt="images" class="w-full object-cover aspect-square mb-6" src="https://picsum.photos/500/300?random=7" />
    <img alt="images" class="w-full object-cover aspect-video mb-6" src="https://picsum.photos/500/300?random=8" />
    <img alt="images" class="w-full object-cover aspect-square mb-6" src="https://picsum.photos/500/300?random=9" />
  </div>
</template>

<script setup>
import axios from 'axios';
import { watchEffect } from 'vue';

watchEffect(async () => {
  try {
    const access_token = import.meta.env.VITE_APP_INSTAGRAM_ACCESS_TOKEN;
    const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink,thumbnail_url,timestamp&access_token=${access_token}`)

    console.log(response.data.data);
  } catch (error) {
    console.log(error);
  }
})

</script>

<style lang="scss" scoped></style>
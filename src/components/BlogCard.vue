<script setup>
import { Blog } from '../models/Blog.js';

defineProps({
  blogProp: { type: Blog, required: true }
})
</script>

<template>
  <div class="card mb-3" style="height: 60vh;">
    <img :src="blogProp.imgUrl" :alt="blogProp.title" class="card-img-top" style="max-height: 20vh;">
    <div class="card-body">
      <h2 class="card-title">{{ blogProp.title }}</h2>
      <p class="fs-4 card-text">{{ blogProp.body.slice(0, 100) }}...</p>

      <div class="d-flex justify-content-between">
        <router-link :to="{ 'name': 'Blog', params: { blogId: blogProp.id } }">
          <button class="btn btn-primary"><i class="mdi mdi-magnify-plus"></i></button>
        </router-link>
        <router-link :to="{ 'name': 'Profile', params: { profileId: blogProp.creator.id } }">
          <img :src="blogProp.creator.picture" :alt="blogProp.creator.name" class="profile-img">
        </router-link>
      </div>


    </div>
  </div>
</template>


<style lang="scss" scoped>
.profile-img {
  aspect-ratio: 1/1;
  height: 8vh;
  border-radius: 50%;
}
</style>

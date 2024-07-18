<script setup>
import { computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { blogService } from '../services/BlogService.js';
import Pop from '../utils/Pop.js';

const route = useRoute()
watchEffect(() => {
  const blogId = route.params.blogId
  getBlogById(blogId)
})

async function getBlogById(blogId) {
  try {
    await blogService.getBlogById(blogId)
  } catch (error) {
    Pop.error(error)
  }
}

const activeBlog = computed(() => AppState.activeBlog)
</script>


<template>
  <div class="card mb-3">
    <img :src="activeBlog.imgUrl" class="card-img-top" :alt="activeBlog.title">
    <div class="card-body">
      <h5 class="card-title">{{ activeBlog.title }}</h5>
      <p class="card-text">{{ activeBlog.body }}</p>
      <p>{{ activeBlog.published?'this was published' : 'this was not published' }}</p>

    </div>
  </div>
</template>


<style lang="scss" scoped></style>

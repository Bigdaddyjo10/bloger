<script setup>
import { computed, onMounted } from 'vue';
import { blogService } from '../services/BlogService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';

onMounted(() => { getBlogs() })
const blogs = computed(() => AppState.blogs)

async function getBlogs() {
  try {
    await blogService.getBlogs()
  } catch (error) {
    Pop.error(error)
  }
}
</script>

<template>
  <section class="container">
    <h1>Blogs</h1>
  </section>
  <div class="container">
  <div class="row">
    <div v-for="blog in blogs " :key="blog.id" class="col-6">
      <BlogCard :blogProp=blog />
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss"></style>

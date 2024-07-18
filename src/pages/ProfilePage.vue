<script setup>
import { computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { profileService } from '../services/ProfileService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';

const route = useRoute()
const activeProfile = computed(() => AppState.activeProfile)

watchEffect(() => {
  const id = route.params.profileId
  getProfileById(id)
})


async function getProfileById(id) {
  try {
    await profileService.getProfileById(id)
  }
  catch (error){
    Pop.error(error);
  }
}
</script>


<template>
  {{ activeProfile?.name }}
</template>


<style lang="scss" scoped></style>

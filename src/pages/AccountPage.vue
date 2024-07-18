<script setup>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState.js';
import { accountService } from '../services/AccountService.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';

const account = computed(() => AppState.account)
const editableUserData = ref({
  name: '',
  picture: '',
  coverImg: '',
  bio: '',
})

onMounted(() => { editableUserData.value = { ...AppState.account } }
)
async function updatedAccount() {
  try {
    logger.log('this id OUR data', editableUserData.value)
    await accountService.upAccount(editableUserData.value);
  } catch (error) {
    Pop.error(error)
  }
}

</script>

<template>
  <div class="about text-center">
    <div v-if="account">
      <h1>Welcome {{ account.name }}</h1>
      <img class="rounded" :src="account.picture" alt="" />
      <p>{{ account.email }}</p>
      <form @submit.prevent="updatedAccount()">
        <div class="mb-3">
          <label for="Name" class="form-label">Name</label>
          <input v-model="editableUserData.name" type="text" class="form-control" id="name" aria-describedby="name">
          <div id="name" class="form-text"></div>
          <div class="mb-3">
            <label for="picture" class="picture-form-label">profile picture</label>
            <input v-model="editableUserData.picture" type="text" class="form-control" id="picture"
              aria-describedby="imageHelp">
          </div>
          <div class="mb-3">
            <label for="bio" class="bio-form-label">Bio</label>
            <input v-model="editableUserData.bio" type="text" class="form-control" id="bio" aria-describedby="bioLabel">
          </div>
          <div class="mb-3">
            <label for="coverImg" class="coverImg-form-label">Cover Image</label>
            <input v-model="editableUserData.coverImg" type="text" class="form-control" id="coverImg"
              aria-describedby="coverImgLabel">
          </div>
        </div>
        <button class="btn btn-primary">submit</button>
      </form>
    </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  max-width: 100px;
}
</style>

<template>
  <main class="home container">
    <h1 class="home__title">Youtube Video List</h1>
    <VideoList/>
  </main>
</template>

<script>
import VideoList from '@/components/VideoList.vue';

export default {
  name: 'Home',
  components: {
    VideoList,
  },
};
</script>

<style lang="scss">
.home {
  &__title {
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 425px) {
      font-size: 28px;
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }
}
</style>

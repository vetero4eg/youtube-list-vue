<template>
  <div class="item__box">
    <iframe
      :src="url"
      class="player"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    url: '',
  }),
  beforeMount() {
    this.url = `http://www.youtube.com/embed/${this.id}?autoplay=1&muted=1`;
  },
  beforeDestroy() {},
};
</script>

<style lang="scss">
.player {
  width: 100%;
  height: 100%;
}
</style>

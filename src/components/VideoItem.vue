<template>
  <transition name="toggle">
    <component :is="status" :id="id" @toggleShow="startVideo"></component>
  </transition>
</template>

<script>
const VideoPlayerLazy = () => import('@/components/VideoPlayer.vue');
const VideoPreviewLazy = () => import('@/components/VideoPreview.vue');

export default {
  name: 'VideoItem',
  components: {
    VideoPlayerLazy,
    VideoPreviewLazy,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    start: {
      type: Boolean,
      required: false,
    },
  },
  data: () => ({
    play: false,
  }),
  methods: {
    startVideo() {
      this.play = true;
      this.$emit('isPlay', this.id);
    },
    stopVideo() {
      this.play = false;
    },
  },
  computed: {
    status() {
      return this.start && this.play
        ? 'VideoPlayerLazy'
        : 'VideoPreviewLazy';
    },
  },
  watch: {
    status() {
      if (!this.status) {
        this.play = false;
      }
    },
  },
};
</script>

<style lang="scss">
.item__box {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.toggle-leave-active {
  animation: togglePreview 0.5s;

  .preview__title {
    opacity: 0;
  }
}

.toggle-enter-active {
  animation: togglePreview 0.75s reverse;

  .preview__title {
    opacity: 1;
  }
}

@keyframes togglePreview {
  0% {
    transform: scale(1, 1);
    opacity: 1;
  }

  100% {
    transform: scale(0, 0);
    opacity: 0;
  }
}
</style>

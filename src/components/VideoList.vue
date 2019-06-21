<template>
  <section class="video">
    <p v-if="!hasVideo" class="video__list video__list--empty">No video to show</p>
    <ul v-else class="video__list">
      <li v-for="id in partArrayVideoId" :key="id" class="video__item">
        <VideoItemLazy :id="id" :status="id === isPlay" @isPlay="setStatus"/>
      </li>
    </ul>
    <button v-if="showMoreButton" class="video__more" @click="showMore(countMore)">More</button>
  </section>
</template>

<script>
const VideoItemLazy = () => import('@/components/VideoItem.vue');

export default {
  name: 'VideoList',
  components: {
    VideoItemLazy,
  },
  data: () => ({
    hasVideo: false,
    isPlay: false,
    part: 5,
    countMore: 5,
  }),
  methods: {
    checkCorrectlyId(id) {
      return /^[a-zA-Z0-9-]{11,}$/.test(id);
    },
    setStatus(eventId) {
      this.isPlay = eventId;
    },
    showMore(num) {
      this.part += num;
    },
  },
  computed: {
    arrayVideoId() {
      if (this.$route.query.id) {
        const arrInQuery = this.$route.query.id.replace(/,/g, ' ').split(' ');
        const arrayCorrectlyId = arrInQuery.filter(id => this.checkCorrectlyId(id));
        return Array.from(new Set(arrayCorrectlyId));
      }
      return null;
    },
    partArrayVideoId() {
      if (this.arrayVideoId) {
        const count = this.part;
        return this.arrayVideoId.slice(0, count);
      }
      return null;
    },
    showMoreButton() {
      if (this.arrayVideoId) {
        const arrayVideoIdLen = this.arrayVideoId.length;
        const partArrayVideoIdLen = this.partArrayVideoId.length;

        return !(arrayVideoIdLen === partArrayVideoIdLen);
      }
      return false;
    },
  },
  beforeMount() {
    if (this.arrayVideoId) {
      this.hasVideo = true;
    }
  },
};
</script>

<style lang="scss">
.video {
  width: 100%;
  min-height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    min-height: calc(100vh - 80px);
  }

  &__list {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px 0 10px;
    margin: 0 -20px;

    &--empty {
      font-size: 20px;
      letter-spacing: 2px;
      font-weight: normal;
      color: red;
    }
  }

  &__item {
    display: flex;
    flex-direction: center;
    align-items: center;
    margin-bottom: 40px;
    margin-left: 20px;
    margin-right: 20px;
    position: relative;
    width: calc((100% - 120px) / 3);
    max-width: 480px;
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    @media (max-width: 1200px) {
      width: calc((100% - 80px) / 2);
    }

    @media (max-width: 800px) {
      width: calc((100% - 40px) / 1);
    }

    &:before {
      content: "";
      display: block;
      margin-top: 56.25%;
    }
  }

  &__more {
    margin: 25px auto;
    padding: 8px 15px;
    font-size: 20px;
    color: #fff;
    text-transform: uppercase;
    border: none;
    background-color: rgb(28, 143, 236);
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);
    }
  }
}
</style>

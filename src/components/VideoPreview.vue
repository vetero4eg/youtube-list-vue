<template>
  <div class="item__box preview">
    <img class="preview__img" :src="info.preview" :alt="info.title" @click="hidePreview">
    <p class="preview__title">{{ info.title }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'VideoPreview',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    info: {
      preview: '',
      title: '',
    },
  }),
  methods: {
    hidePreview() {
      this.$emit('toggleShow', this.id);
    },
  },
  async created() {
    const key = process.env.VUE_APP_API_KEY_YOUTUBE;
    const target = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${
      this.id
    }&key=${key}&fields=items(snippet(title,thumbnails))`;

    /** *
     * К сожалению у меня так и не получилось уговорить IE11
     * понимать fetch поэтому я решила использовать axios
     * я знаю, что это не лучшая практика, но так как нам нужно
     * делать только один запрос, я использую его непосредственно
     * в компоненте
     */

    axios
      .get(target)
      .then((response) => {
        const { snippet } = response.data.items[0];
        this.info.preview = snippet.thumbnails.high.url;
        this.info.title = snippet.title;
      })
      // eslint-disable-next-line
      .catch(e => console.log(e));
  },
};
</script>

<style lang="scss">
.preview {
  &:hover {
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    position: absolute;
    left: 5%;
    right: 5%;
    bottom: 0;
    padding: 5px 10px;
    font-size: 14px;
    text-align: center;
    color: #fff;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.4);
    transition: opacity 0.3s ease;
  }
}
</style>

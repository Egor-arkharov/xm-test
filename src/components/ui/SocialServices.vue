<template>
  <div class="social">
    <div class="social__text">Follow us on</div>
    <ul class="social__list">
      <li v-for="(item, idx) in social" :key="idx" class="social__item">
        <a class="social__link" :href="item.link" target="_blank">
          <inline-svg
            :src="require(`@/assets/icons/social/${item.name}.svg`)"
            class="social__icon"
            :width="item.width"
            :height="item.height"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
  components: {
    InlineSvg,
  },
  setup() {
    const social = [
      {
        name: "facebook",
        link: "https://github.com/Egor-arkharov",
        width: 11,
        height: 20,
      },
      {
        name: "twitter",
        link: "https://github.com/Egor-arkharov",
        width: 17,
        height: 20,
      },
      {
        name: "youtube",
        link: "https://github.com/Egor-arkharov",
        width: 18,
        height: 20,
      },
      {
        name: "instagram",
        link: "https://github.com/Egor-arkharov",
        width: 16,
        height: 20,
      },
      {
        name: "linkedin",
        link: "https://github.com/Egor-arkharov",
        width: 16,
        height: 20,
      },
    ];

    return {
      social,
    };
  },
};
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  align-items: center;
  gap: 20px;


  &__list {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__link {
    display: flex;

    svg :deep(path) {
      fill: #BDBDBD;
      transition: all 0.1s;

      @include hover {
        fill: red;
      }
    }
  }

  &__text {
    color: #888888;
  }
}
</style>
<template>
  <section class="gallery">
    <div class="gallery__wrapper">
      <p class="gallery__title">Event Gallery</p>
      <div class="gallery__swiper">
        <swiper
          :slides-per-view="5"
          :centered-slides="true"
          :grab-cursor="true"
          :navigation="true"
          :loop="true"
        >
          <swiper-slide v-for="i in 10" :key="i">
            <div class="gallery__img">
              {{ i }}
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  background-color: #f4f4f4;
  padding: 50px var(--big-padding-x);

  &__title {
    font-family: $main-font-bold;
    font-size: clamp(24px, 5vw, 30px);
    line-height: 1.2;

    margin: 0 auto 50px;
    text-align: center;
    color: #252525;
  }

  &__img {
    --size: 164px;

    width: var(--size);
    height: var(--size);

    background-color: #dadada;
    border: 2px solid $color-white;

    color: black;
    font-size: 50px;
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
}
</style>

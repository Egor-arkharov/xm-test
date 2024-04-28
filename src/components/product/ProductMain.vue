<template>
  <section class="product">
    <div class="product__decor decor">
      <div class="decor__circle-1 front" />
      <div class="decor__circle-2 middle" />
      <div class="decor__circle-3 middle" />
      <div class="decor__circle-4 back" />
      <div class="decor__cube-1 middle" />
      <div class="decor__cube-2 middle" />
      <div class="decor__line back" />
      <div class="decor__pin middle" />
      <div class="decor__shadow-1 back" />
      <div class="decor__shadow-2 back" />
    </div>

    <ProductOffer />
    <ProductRate />
    <ProductBenefits />
  </section>
</template>

<script>
import { onMounted } from "vue";
import ProductOffer from "./ProductOffer";
import ProductRate from "./ProductRate";
import ProductBenefits from "./ProductBenefits";

export default {
  components: {
    ProductOffer,
    ProductRate,
    ProductBenefits,
  },
  setup() {
    const handleDecor = (evt) => {
      const imgs = document.querySelectorAll(".decor > div");
      const xImg = (window.innerWidth - evt.pageX) / 40;
      const yImg = (window.innerHeight - evt.pageY) / 40;

      imgs.forEach((img) => {
        const speedCoefficient = img.classList.contains("front")
          ? 1.5
          : img.classList.contains("middle")
          ? 0.7
          : 0.4;

        let translateY = yImg * speedCoefficient;
        if (img.classList.contains("decor__circle-1")) {
          translateY = 0;
        }

        img.style.transform = `translate(${xImg * speedCoefficient}px, ${translateY}px)`;
      });
    };

    onMounted(() => {
      document.addEventListener("mousemove", (evt) => handleDecor(evt));
    });
  },
};
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  background-color: #201d27;

  overflow: hidden;

	z-index: 0;
}

.decor {
  > div {
    position: absolute;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;


    @media (max-width: #{map-get($breakpoints, 'xs')}) {
      &:not([class^="decor__shadow"]) {
        opacity: 0.3;
      }
    }
  }

  &__circle-1 {
    top: 0;
    left: 0;

    width: 30vw;
    height: 20vw;

    opacity: 0.4;

    background-image: url("@/assets/images/decor/circle-1.png");
  }

  &__circle-2 {
    top: 50svh;
    left: 15vw;

    width: 10vw;
    height: 10vw;

    opacity: 0.5;

    background-image: url("@/assets/images/decor/circle-2.png");
  }

  &__circle-3 {
    top: 30svh;
    right: -6vw;

    width: 18vw;
    height: 18vw;

    opacity: 0.8;

    background-image: url("@/assets/images/decor/circle-3.png");
  }

  &__circle-4 {
    top: 120svh;
    left: -13vw;

    width: 40vw;
    height: 730px;

    opacity: 0.4;

    background-image: url("@/assets/images/decor/circle-4.png");
  }

  &__cube-1 {
    top: 31svh;
    left: -5vw;

    width: 15vw;
    height: 15vw;

    opacity: 0.7;

    background-image: url("@/assets/images/decor/cube-1.png");
  }

  &__cube-2 {
    top: 40svh;
    right: 10vw;

    width: 17vw;
    height: 17vw;

    opacity: 0.8;

    background-image: url("@/assets/images/decor/cube-2.png");

    @media (max-width: #{map-get($breakpoints, 'md')}) {
      top: 50svh;
      opacity: 0.4;
    }
  }

  &__line {
    top: 40svh;
    left: 23vw;

    width: 40vw;
    height: 40vw;

    opacity: 0.8;

    background-image: url("@/assets/images/decor/line.png");
  }

  &__pin {
    top: 0;
    right: 15vw;

    width: 7vw;
    height: 7vw;

    opacity: 0.8;

    background-image: url("@/assets/images/decor/pin.png");
  }

  &__shadow-1 {
    top: 70svh;
    left: 0;

    width: 60vw;
    height: 60vw;

    background-image: url("@/assets/images/decor/shadow-1.png");

    @media (max-width: #{map-get($breakpoints, 'md')}) {
      top: 100svh;
    }
  }

  &__shadow-2 {
    top: 30svh;
    right: -20vw;

    width: 65vw;
    height: 65vw;

    background-image: url("@/assets/images/decor/shadow-2.png");

    @media (max-width: #{map-get($breakpoints, 'md')}) {
      top: 70svh;
    }
  }
}
</style>
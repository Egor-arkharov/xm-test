<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__top">
        <div class="footer__sponsors">
          <sponsors-list />
        </div>
        <div class="footer__social">
          <social-services />
        </div>
      </div>
      <div class="footer__bottom">
        <nav class="footer__nav nav">
          <ul class="nav__list">
            <li class="nav__item">
              <router-link
                to="/privacy"
                class="nav__link"
              >
                Privacy Policy
              </router-link>
            </li>
            <li class="nav__item">
              <router-link
                to="/cookie"
                class="nav__link"
              >
                Cookie Policy
              </router-link>
            </li>
            <li class="nav__item">
              <router-link
                to="/terms"
                class="nav__link"
              >
                Terms and Conditions
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="footer__logo">
          <inline-svg
            :src="require('@/assets/logo/tp.svg')"
            width="182"
            height="57"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialServices from "@/components/ui/SocialServices";
import SponsorsList from "@/components/ui/SponsorsList";
import InlineSvg from "vue-inline-svg";

export default {
  components: {
    SponsorsList,
    SocialServices,
    InlineSvg,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: auto;

  &__wrapper {
    padding: 20px var(--small-padding-x);
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;

    border-bottom: 1px solid $color-grey;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
  }

  @media (max-width: #{map-get($breakpoints, 'md')}) {
    &__top {
      flex-direction: column;
      gap: 25px;
      padding: 5px 0 20px;
    }

    &__bottom {
      flex-direction: column;
      gap: 15px;
      padding: 20px 0 5px;
    }
  }
}

.nav {
  &__list {
    display: flex;
    gap: 10px;
  }

  &__item {
    padding-right: 10px;
    border-right: 1px solid #888888;
    white-space: nowrap;

    &:last-child {
      padding-right: 0;
      border-right: none;
    }
  }

  &__link {
    font-size: clamp(12px, 3vw, 16px);
    color: #888888;
    transition: all 0.3s;

    @include hover {
      color: red;
    }

    &:active {
      color: blue;
    }
  }

  @media (max-width: #{map-get($breakpoints, 'xs')}) {
    &__list {
      gap: 5px;
    }

    &__item {
      padding-right: 5px;
    }
  }
}
</style>
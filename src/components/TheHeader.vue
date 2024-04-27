<template> 
  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <inline-svg
          :src="require('@/assets/logo/xm.svg')"
          width="140"
          height="48"
        />
      </div>
      <nav class="header__nav nav">
        <button
          v-if="mobileView"
          class="btn btn--burger"
        >
          <span />
          <span />
          <span />
        </button>
        <ul class="nav__list">
          <li class="nav__item">
            <router-link
              to="/"
              class="nav__link"
            >
              XM Homepage
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              to="/support"
              class="nav__link"
            >
              Support
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
  components: {
		InlineSvg,
	},
	setup() {
	},
};
</script>

<style lang="scss" scoped>
.header {
  &__wrapper {
    padding: 10px var(--small-padding-x);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.nav {
  &__list {
    display: flex;
    gap: 15px;
  }

  &__link {
    color: $color-white;
    transition: all 0.3s;

    @include hover {
      color: red;
    }

    &:active {
      color: blue;
    }
  }
}
</style>
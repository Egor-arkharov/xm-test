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
          class="nav__btn"
          @click.prevent="toggleMenu"
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
		const toggleMenu = () => {
			document.body.classList.toggle("menu-open");
		};

    return {
      toggleMenu
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    position: relative;
    height: var(--header-h);

    padding: 10px var(--small-padding-x);
  }

  @media (max-width: #{map-get($breakpoints, 'xs')}) {
    position: fixed;
    left: 0;
    top: 0;

    background-color: $color-black;
    width: 100%;
    z-index: 2;
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

  &__btn {
    flex-direction: column;
    justify-content: space-between;

    height: 20px;
    width: 30px;

    background-color: transparent;

    display: none;

    span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: $color-white;

      transition: all 0.25s ease-in-out;
    }

    .menu-open & {
      span {
        &:nth-child(1) {
          transform: translateY(9px) rotate(-45deg);
        }

        &:nth-child(2) {
          transform: scaleX(0);
        }

        &:nth-child(3) {
          transform: translateY(-9px) rotate(45deg);
        }
      }
    }
  }

  @media (max-width: #{map-get($breakpoints, 'xs')}) {
    &__btn {
      display: flex;
    }

    &__list {
      gap: 15px;
      position: absolute;
      right: 0;
      top: 100%;
      z-index: 1;
      background-color: $color-black;
      width: 100%;
      padding: 10px var(--small-padding-x);
      justify-content: flex-end;

      translate: 100% 0;
      transition: all 0.3s;

      .menu-open & {
        translate: 0 0;
      }
    }
  }
}
</style>
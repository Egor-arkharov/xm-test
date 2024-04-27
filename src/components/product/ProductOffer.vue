<template>
  <div class="offer">
    <div class="offer__wrapper">
      <p class="offer__trade">
        Trade with
      </p>
      <p class="offer__swaps">
        <span>Zero Swaps</span> on&nbsp;All XM&nbsp;Ultra Low Accounts for more
        than 25&nbsp;instruments!
      </p>
      <p class="offer__spreads">
        Enjoy spreads as&nbsp;low <span>as&nbsp;0.6 pips</span> and
        <span>leverage up&nbsp;to&nbsp;1000:1&nbsp;</span>on instruments like
        <span>EURUSD, USDJPY, EURJPY, GBPUSD,</span> and <span>Gold</span>.
      </p>
      <button class="offer__btn">
        Open account
      </button>
      <p class="offer__demo">
        New to&nbsp;trading? Try a&nbsp;<a
          class="offer__link"
          href="https://github.com/Egor-arkharov/xm-test"
          target="_blank"
        >Demo account</a>.
      </p>
      <p class="offer__terms">
        Terms and Conditions apply <span>*</span>. To&nbsp;read the full
        T&amp;Cs,
        <router-link
          to="/terms"
        >
          click here.
        </router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.offer {
  padding: 15svh 0 19svh;

  p {
    text-wrap: balance;
  }

  &__wrapper {
    width: 40vw;
    margin: 0 auto;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  &__trade {
    font-size: clamp(14px, 5vw, 16px);
    line-height: 1;
    text-transform: uppercase;
  }

  &__swaps {
    font-family: $main-font-medium;
    font-size: clamp(26px, 5vw, 40px);
    line-height: 1.4;

    span {
      font-family: $main-font-bold;
    }
  }

  &__spreads {
    font-size: clamp(18px, 5vw, 20px);

    span {
      font-family: $main-font-bold;
    }
  }

  &__btn {
    text-align: center;
    width: 345px;
    padding: 10px 20px;

    font-family: $sub-font;
    font-size: clamp(20px, 5vw, 24px);
    line-height: 1;

    color: $color-white;
    background-color: $color-green;
    border: none;
    text-transform: uppercase;
    transition: all 0.3s;

    @include hover {
      background-color: darken($color-green, 20%);
    }
  }

  &__demo {
    a {
      color: $color-white;
      text-decoration: underline;
      transition: all 0.3s;

      @include hover {
        color: lighten($color-red, 25%);
      }

      &:active {
        color: lighten($color-red, 10%);
      }
    }
  }

  &__link {
  }

  &__terms {
		font-size: 14px;

		span {
			color: $color-red;
		}

    a {
      color: $color-red;
      transition: all 0.3s;

      @include hover {
        color: lighten($color-red, 25%);
      }

      &:active {
        color: lighten($color-red, 10%);
      }
    }
  }
}
</style>
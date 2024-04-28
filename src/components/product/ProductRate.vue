<template>
  <div class="rate">
    <ul class="rate__list">
      <li v-for="(item, idx) in coins" :key="idx" class="rate__item coin">
        <div class="coin__top">
          <div class="coin__icon">
            <inline-svg
              :src="require(`@/assets/icons/coins/${item.name}.svg`)"
              class="rate__icon"
              width="33"
              height="33"
            />
          </div>
          <p class="coin__name">
            {{ item.name }}
          </p>
          <p class="coin__name-full">
            {{ item.nameFull }}
          </p>
        </div>
        <p class="coin__price">${{ item.price }}</p>
        <p
          class="coin__percent"
          :class="{
            'coin__percent--up': item.trend === 'up',
            'coin__percent--down': item.trend === 'down',
          }"
        >
          {{ item.percent }}%
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import InlineSvg from "vue-inline-svg";

export default {
  components: {
    InlineSvg,
  },
  setup() {
    const coins = ref([]);

    const fetchedCoins = [
      {
        name: "btc",
        text: "BTC",
        nameFull: "BITCOIN",
        uuid: "Qwsogvtv82FCd",
      },
      {
        name: "eth",
        text: "ETH",
        nameFull: "ETHEREUM",
        uuid: "razxDUgYGNAdQ",
      },
      {
        name: "xrp",
        text: "XRP",
        nameFull: "RIPPLE",
        uuid: "-l8Mn2pVlRs-p",
      },
      {
        name: "ltc",
        text: "LTC",
        nameFull: "LITECOIN",
        uuid: "D7B1x_ks7WhV5",
      },
      {
        name: "bch",
        text: "BCH",
        nameFull: "BITCOIN CASH",
        uuid: "ZlZpzOJo43mIo",
      },
    ];

    const fetchCryptoData = async () => {
      for (const coin of fetchedCoins) {
        try {
          const response = await axios.get(
            `https://api.coinranking.com/v2/coin/${coin.uuid}`
          );
          const coinData = response.data.data.coin;

          coin.price = Number(coinData.price).toFixed(2);
          coin.percent = coinData.change;
          coin.trend = coinData.change > 0 ? "up" : "down";
        } catch (error) {
          console.error(`Error with ${coin.name} data:`, error);
          coin.price = "Not Found";
          coin.percent = "Not Found";
        }
      }

      coins.value = fetchedCoins;
    };

    onMounted(fetchCryptoData);

    return {
      coins,
    };
  },
};
</script>

<style lang="scss" scoped>
.rate {
  padding: 0 var(--big-padding-x);

  &__list {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 40px;
  }

  &__item {
    padding: 10px 15px;
    border-radius: 20px;
    border: 1px solid #a7a7a7;
  }

  @media (max-width: #{map-get($breakpoints, 'xl')}) {
    &__list {
      display: grid;
      gap: 40px 30px;

      grid-template-areas:
        "first first second second third third"
        ". fourth fourth fifth fifth .";
    }

    &__item {
      &:nth-child(1) {
        grid-area: first;
      }
      &:nth-child(2) {
        grid-area: second;
      }
      &:nth-child(3) {
        grid-area: third;
      }
      &:nth-child(4) {
        grid-area: fourth;
      }
      &:nth-child(5) {
        grid-area: fifth;
      }
    }
  }

  @media (max-width: #{map-get($breakpoints, 'xs')}) {
    &__list {
      grid-template: unset;
      grid-auto-flow: unset;
      grid-auto-columns: unset;
    }

    &__item {
      grid-area: unset !important;
      width: 70%;
      margin: 0 auto;
    }
  }

  @media (max-width: #{map-get($breakpoints, 'xxs')}) {
    &__item {
      width: 100%;
    }
  }
}

.coin {
  &__top {
    display: flex;
    align-items: center;
    gap: 10px;

    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba($color-white, 0.4);
  }

  &__icon {
  }

  &__name {
    font-family: $main-font-medium;
    line-height: 1;
    text-transform: uppercase;
  }

  &__name-full {
    font-family: $main-font-medium;
    font-size: 14px;
    line-height: 1;

    padding: 5px 13px;

    text-transform: uppercase;
    background-color: #fff8d6;
    color: $color-black;
    border-radius: 10px;
  }

  &__price {
    font-family: $main-font-bold;
    font-size: clamp(18px, 6vw, 20px);
    margin-bottom: 10px;
  }

  &__percent {
    font-size: 14px;
    line-height: 1;

    position: relative;
    padding-left: 16px;

    &::before {
      content: "";
      position: absolute;

      width: 13px;
      height: 13px;
      top: 50%;
      left: 0;
      translate: 0 -50%;

      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    &--up {
      color: #b1ffc2;

      &::before {
        background-image: url("@/assets/icons/up.svg");
      }
    }

    &--down {
      color: #ffa3a6;

      &:before {
        background-image: url("@/assets/icons/down.svg");
      }
    }
  }

  @media (max-width: #{map-get($breakpoints, 'sm')}) {
    &__top {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    &__name-full {
      flex-basis: 100%;
      text-align: center;
    }
  }

  @media (max-width: #{map-get($breakpoints, 'xs')}) {
    &__top {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }

    &__name-full {
      flex-basis: unset;
      text-align: left;
    }
  }
}
</style>
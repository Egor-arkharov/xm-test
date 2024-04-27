<template>
  <section class="features">
    <div class="features__wrapper">
      <div class="features__highlights">
        <p class="features__title">
          <span>Big</span>
          <span>Fair</span>
          <span>Human</span>
        </p>
        <p class="features__lead">
          Learn why <span>over 5&nbsp;million clients choose XM&nbsp;</span>as
          their trusted online broker.
        </p>
      </div>
      <div class="features__benefits benefits">
        <ul class="benefits__list">
          <li
            v-for="(item, idx) in benefits"
            :key="idx"
            class="benefits__item"
          >
            <div class="benefits__icon">
              <inline-svg
                :src="require(`@/assets/icons/red/${idx + 1}.svg`)"
                class="benefits__icon"
                width="56"
                height="56"
              />
            </div>
            <p class="benefits__title">
              {{ item.title }}
            </p>
            <p
              class="benefits__text"
              v-html="item.text"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
	components: {
		InlineSvg,
	},
	setup() {
		const benefits = [
			{
				title: "Authorised and Regulated",
				text: "At&nbsp;XM, we&nbsp;adhere to&nbsp;all regulatory standards and are fully authorised and regulated by&nbsp;FSC.",
			},
			{
				title: "Committed and Fair",
				text: "We&nbsp;operate with complete transparency and adhere to&nbsp;the highest professional and ethical standards.",
			},
			{
				title: "Multi-Award-Winning",
				text: "Over the years we&nbsp;have received over 40&nbsp;awards for the quality of&nbsp;our products and services.",
			},
			{
				title: "24/7 Support",
				text: "Our support agents are on&nbsp;hand 24/7 to&nbsp;answer your questions or&nbsp;assist you with any issues.",
			},
		];

		return {
			benefits,
		};
	},
};
</script>

<style lang="scss" scoped>
.features {
	background-color: $color-white;
	padding: 100px var(--big-padding-x);
	color: $color-black;

	&__wrapper {
		display: flex;
		justify-content: space-between;
	}

	&__highlights {
		padding-top: 15px;
		position: relative;

		&::before {
			content: "";
			position: absolute;

			top: 0;
			left: 0;

			width: 72px;
			height: 4px;

			background-color: $color-red;
		}
	}

	&__title {
		font-family: $main-font-black;
		font-size: clamp(50px, 5vw, 80px);
		line-height: 1.1;
		color: $color-grey;
		margin-bottom: 45px;

		span {
			display: block;
			width: fit-content;
			position: relative;

			&::after {
				content: "";
				position: absolute;

				bottom: 0;
				right: 0;

				width: 10px;
				height: 10px;

				background-color: $color-red;
				border-radius: 50%;
				translate: 100% -100%;
			}
		}
	}

	&__lead {
		font-size: clamp(14px, 5vw, 17px);
		color: $color-grey;
		width: 70%;
		text-wrap: balance;

		span {
			font-family: $main-font-bold;
			color: $color-black;
		}
	}
}

.benefits {
	width: 60%;

	&__list {
		display: grid;
		grid-template: repeat(2, 50%) / repeat(2, 50%);
		height: 100%;

		position: relative;

		&::before {
			content: "";
			position: absolute;

			width: 5px;
			height: 5px;

			top: 50%;
			left: 50%;
			translate: -3px -3px;

			background-color: $color-red;
			border-radius: 50%;

			z-index: 1;
		}
	}

	&__item {
		--padding-x: 20%;
		$decor-big-h: 70%;
		$decor-small-h: 10%;

		display: flex;
		flex-direction: column;
		gap: 15px;

    padding: 40px 20px;

		position: relative;

		&:nth-child(even) {
			padding-left: var(--padding-x);
		}

		&:nth-child(odd) {
			padding-right: var(--padding-x);
		}

		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			background-color: #ebebeb;
		}

		&::after {
			background-color: #cdcdcd;
		}

		&:nth-child(1) {
			&::before,
			&::after {
				width: 1px;

				bottom: 0;
				right: 0;
			}

			&::before {
				height: $decor-big-h;
			}

			&::after {
				height: $decor-small-h;
			}
		}

		&:nth-child(2) {
			&::before,
			&::after {
				height: 1px;

				bottom: 0;
				left: 0;
			}

			&::before {
				width: $decor-big-h;
			}

			&::after {
				width: $decor-small-h;
			}
		}

		&:nth-child(3) {
			&::before,
			&::after {
				height: 1px;

				top: -1px;
				right: 0;
			}

			&::before {
				width: $decor-big-h;
			}

			&::after {
				width: $decor-small-h;
			}
		}

		&:nth-child(4) {
			&::before,
			&::after {
				width: 1px;

				top: 0;
				left: -1px;
			}

			&::before {
				height: $decor-big-h;
			}

			&::after {
				height: $decor-small-h;
			}
		}
	}

	&__title {
		font-family: $main-font-bold;
		font-size: clamp(20px, 5vw, 25px);
		color: $color-grey;
	}

	&__text {
		color: $color-grey;
		text-wrap: balance;
	}
}
</style>

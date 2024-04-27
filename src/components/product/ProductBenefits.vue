<template>
  <div class="benefits">
    <div class="benefits__wrapper">
      <p class="benefits__title">
        Why <span>Trade</span> with XM?
      </p>
      <p class="benefits__lead">
        We&nbsp;have been providing traders around the world with the same
        <span>premium experience</span> for over a&nbsp;decade.
        As&nbsp;an&nbsp;<span>industry-leader</span> , we&nbsp;know what the
        modern trader needs to&nbsp;be&nbsp;<span>successful</span> in&nbsp;the
        markets.
      </p>
      <ul class="benefits__list">
        <li class="benefits__item item">
          <p class="item__title">
            Superior Trade Execution
          </p>
          <p class="item__text">
            99% of&nbsp;trades are executed in&nbsp;<span>less than a&nbsp;second</span>, with no&nbsp;requotes
            or&nbsp;rejections.
          </p>
        </li>
        <li class="benefits__item item">
          <p class="item__title">
            Competitive Pricing
          </p>
          <p class="item__text">
            We&nbsp;offer some of&nbsp;the <span>lowest spreads</span> and
            we&nbsp;don&rsquo;t charge commissions.
          </p>
        </li>
        <li class="benefits__item item">
          <p class="item__title">
            Advanced Technology
          </p>
          <p class="item__text">
            Trade on&nbsp;<span>MT4&nbsp;or MT5</span>, with expert tools,
            across desktop, web and mobile.
          </p>
        </li>
        <li class="benefits__item item">
          <p class="item__title">
            Start with $5
          </p>
          <p class="item__text">
            Start trading your preferred instruments with as&nbsp;little
            as&nbsp;a&nbsp;<span>$5&nbsp;minimum deposit</span>.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.benefits {
	padding: 15svh calc(var(--big-padding-x) + 15px);

	&__wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__title {
		position: relative;
		font-family: $main-font-light;
		font-size: clamp(26px, 6vw, 35px);

		padding-bottom: 20px;
		margin-bottom: 20px;
		text-align: center;

		span {
			font-family: $main-font-bold;
		}

		&::before {
			content: "";
			position: absolute;

			bottom: 0;
			left: 50%;
			translate: -50% 0;

			width: 70px;
			height: 2px;

			background-color: #29a643;
		}
	}

	&__lead {
		width: 55vw;
		text-align: center;
		text-wrap: balance;
		line-height: 1.4;
		margin-bottom: 30px;

		span {
			font-family: $main-font-bold;
		}
	}

	&__list {
		display: grid;
		grid-auto-columns: 1fr;
		grid-auto-rows: 1fr;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 40px 30px;
		grid-template-areas:
			"Superior Pricing Pricing"
			"Superior . .";

		width: 100%;
		height: 570px;
	}

	&__item {
		&:nth-child(1) {
			grid-area: Superior;
		}

		&:nth-child(2) {
			grid-area: Pricing;
		}
	}
}

.item {
	position: relative;
	padding: 30px 50px;
	background-color: #0b0819;
	border-radius: 20px;

	&__title {
		position: relative;
		font-family: $main-font-bold;
		font-size: clamp(20px, 6vw, 25px);

		padding-bottom: 20px;
		margin-bottom: 20px;

		&::before {
			content: "";
			position: absolute;

			bottom: 0;
			left: 0;

			width: 50px;
			height: 2px;

			background-color: #29a643;
		}
	}

	&__text {
		text-wrap: balance;
		line-height: 1.4;

		span {
			font-family: $main-font-bold;
		}
	}

	&::before {
		content: "";
		position: absolute;

		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}

	&:nth-child(3),
	&:nth-child(4) {
		padding-top: 50px;
	}

	&:nth-child(1)::before {
		width: 205px;
		height: 205px;

		bottom: 50px;
		left: 30px;

		background-image: url("@/assets/images/benefits/lightning.png");
	}

	&:nth-child(2)::before {
		width: 90px;
		height: 90px;
		top: 30px;
		right: 50px;

		background-image: url("@/assets/images/benefits/percent.png");
	}

	&:nth-child(3)::before {
		width: 70px;
		height: 70px;

		top: 30px;
		right: 30px;

		background-image: url("@/assets/images/benefits/tech.png");
	}

	&:nth-child(4)::before {
		width: 70px;
		height: 70px;

		top: 30px;
		right: 30px;

		background-image: url("@/assets/images/benefits/dollar.png");
	}
}
</style>
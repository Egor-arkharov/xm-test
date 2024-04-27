<template>
  <div class="sponsors">
    <ul class="sponsors__list">
      <li
        v-for="(item, idx) in sponsors"
        :key="idx"
        class="sponsors__item"
      >
        <inline-svg
          :src="require(`@/assets/icons/sponsors/${item.name}.svg`)"
          class="sponsors__icon"
          :width="item.width"
          :height="item.height"
        />
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
		const sponsors = [
			{
				name: "metaquotes",
				width: 136,
				height: 25
			},
			{
				name: "verisign",
				width: 131,
				height: 37
			},
			{
				name: "unicef",
				width: 110,
				height: 39
			},
			{
				name: "investors",
				width: 195,
				height: 38
			},
		];

		return {
			sponsors,
		};
	},
};
</script>

<style lang="scss" scoped>
.sponsors {
	&__list {
		display: flex;
		align-items: center;
		gap: 20px;

		@media (max-width: #{map-get($breakpoints, 'xs')}) {
			flex-direction: column;
			gap: 15px;
    }
	}

	&__item {
		display: flex;

		@media (max-width: #{map-get($breakpoints, 'sm')}) {
			width: 120px;

			&:last-child {
				width: 140px;
			}
    }
	}
}
</style>
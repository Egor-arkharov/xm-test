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
				link: "https://github.com/Egor-arkharov",
				width: 136,
				height: 25
			},
			{
				name: "verisign",
				link: "https://github.com/Egor-arkharov",
				width: 131,
				height: 37
			},
			{
				name: "unicef",
				link: "https://github.com/Egor-arkharov",
				width: 110,
				height: 39
			},
			{
				name: "investors",
				link: "https://github.com/Egor-arkharov",
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
	}

	&__item {
		display: flex;
	}
}
</style>
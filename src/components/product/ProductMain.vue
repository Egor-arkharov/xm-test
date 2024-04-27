<template>
	<section class="product">
		<ProductOffer />
		<ProductRate />
		<ProductBenefits />
	</section>
</template>

<script>
import ProductOffer from "./ProductOffer";
import ProductRate from "./ProductRate";
import ProductBenefits from "./ProductBenefits";

export default {
	components: {
    ProductOffer,
		ProductRate,
		ProductBenefits
	},
	setup() {
	},
};
</script>

<style lang="scss" scoped>
.product {
	background-color: #202E47;
	// background: linear-gradient(180deg, rgba(32, 46, 71, 0.65) 18.3%, rgba(32, 46, 71, 0.6175) 39.45%, rgba(32, 46, 71, 0.585) 60.61%, rgba(32, 46, 71, 0) 81.77%);
}
</style>
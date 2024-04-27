<template>
  <main class="home">
    <ProductMain />
    <EventGallery />
    <FeauturesBlock />
  </main>
</template>

<script>
import ProductMain from "@/components/product/ProductMain";
import EventGallery from "@/components/ui/EventGallery";
import FeauturesBlock from "@/components/ui/FeauturesBlock";

export default {
	components: {
    ProductMain,
    EventGallery,
		FeauturesBlock,
	},
	setup() {
	},
};
</script>
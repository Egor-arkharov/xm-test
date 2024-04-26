<template>
  <the-header />
  <router-view />
  <the-footer />
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export default {
	components: {
		TheHeader,
    TheFooter
	},
	setup() {
	},
};
</script>
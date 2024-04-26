const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
		loaderOptions: {
			sass: {
				additionalData: '@import "@/assets/style/global/variables.scss";',
			},
		},
	},
});

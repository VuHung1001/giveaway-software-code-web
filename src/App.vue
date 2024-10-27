<script setup>
import { RouterView } from 'vue-router';
import HeaderComponent from './components/header/HeaderComponent.vue';
import NavComponent from './components/nav/NavComponent.vue';
import DisclosureComponent from './components/disclosure/DisclosureComponent.vue';
import FooterComponent from './components/footer/FooterComponent.vue';
import OtherComponent from './components/others/OtherComponent.vue';
</script>

<template>
	<div class="rh-outer-wrap">
		<div id="top_ankor"></div>
		<header
			id="main_header"
			class="dark_style width-100p position-relative"
		>
			<div class="header_wrap">
				<HeaderComponent />
				<NavComponent />
			</div>
		</header>

		<RouterView />

		<DisclosureComponent />
		<FooterComponent />
	</div>

	<OtherComponent />
</template>

<style scoped lang="scss"></style>

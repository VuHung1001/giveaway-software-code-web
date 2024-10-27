<script setup>
import SliderComponent from '../components/slider/SliderComponent.vue';
import FeatureComponent from '../components/feature/FeatureComponent.vue';
import ProductListComponent from '../components/productList/ProductListComponent.vue';
import BrandsComponent from '../components/brands/BrandsComponent.vue';
import QuestionsComponent from '../components/questions/QuestionsComponent.vue';
</script>

<template>
	<div class="rh-container full_post_area">
		<div class="rh-content-wrap clearfix">
			<div
				class="main-side page clearfix visual_page_builder full_width"
				id="content"
			>
				<div class="rh-fullbrowser">
					<article class="post mb0" id="page-1686">
						<SliderComponent />
						<FeatureComponent />
						<ProductListComponent />
						<BrandsComponent />
						<QuestionsComponent />
					</article>
				</div>
			</div>
		</div>
	</div>
</template>

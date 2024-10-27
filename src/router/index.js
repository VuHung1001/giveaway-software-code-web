import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(''),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		// {
		// 	path: '/about',
		// 	name: 'about',
		// 	// route level code-splitting
		// 	// this generates a separate chunk (About.[hash].js) for this route
		// 	// which is lazy-loaded when the route is visited.
		// 	component: () => import('../views/AboutView.vue'),
		// },
		{
			path: '/product/coolmuster-pdf-creator-pro',
			name: 'Coolmuster PDF',
			component: () =>
				import('../views/product/Coolmuster_PDF_Creator_Pro.vue'),
		},
	],
	scrollBehavior(to, from, savedPosition) {
		// Nếu có vị trí cuộn đã lưu, chuyển đến vị trí đó
		if (savedPosition) {
			return savedPosition;
		} else {
			// Nếu không, cuộn đến đầu trang
			return { top: 0 };
		}
	},
});

export default router;

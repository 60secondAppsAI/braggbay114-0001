import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Users from  '@/pages/Users.vue';
import UserDetail from  '@/pages/UserDetail.vue';
import Products from  '@/pages/Products.vue';
import ProductDetail from  '@/pages/ProductDetail.vue';
import Bids from  '@/pages/Bids.vue';
import BidDetail from  '@/pages/BidDetail.vue';
import Orders from  '@/pages/Orders.vue';
import OrderDetail from  '@/pages/OrderDetail.vue';
import Categorys from  '@/pages/Categorys.vue';
import CategoryDetail from  '@/pages/CategoryDetail.vue';
import ProductCategorys from  '@/pages/ProductCategorys.vue';
import ProductCategoryDetail from  '@/pages/ProductCategoryDetail.vue';
import Reviews from  '@/pages/Reviews.vue';
import ReviewDetail from  '@/pages/ReviewDetail.vue';
import ShoppingCarts from  '@/pages/ShoppingCarts.vue';
import ShoppingCartDetail from  '@/pages/ShoppingCartDetail.vue';
import CartItems from  '@/pages/CartItems.vue';
import CartItemDetail from  '@/pages/CartItemDetail.vue';
import Payments from  '@/pages/Payments.vue';
import PaymentDetail from  '@/pages/PaymentDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
			redirect: '/users',
										  },
  {
    path: "/pricing",
    name: "PricingView",
    component: () => import("../views/PricingView.vue"),
  },
  {
    path: "/arts-gallery",
    name: "ArtsGalleryView",
    component: () => import("../views/ArtsGalleryView.vue"),
  },
  {
    path: "/checkout/:id",
    name: "CheckoutView",
    component: () => import("../views/CheckoutView.vue"),
  },
  {
    path: "/stripe-checkout",
    name: "StripeCheckoutView",
    component: () => import("../views/StripeCheckoutView.vue"),
  },
	{
		path: '/users',
		name: 'Users',
		layout: DefaultLayout,
		component: Users,
	},
	{
	    path: '/user/:userId', 
	    name: 'UserDetail',
		layout: DefaultLayout,
	    component: UserDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/products',
		name: 'Products',
		layout: DefaultLayout,
		component: Products,
	},
	{
	    path: '/product/:productId', 
	    name: 'ProductDetail',
		layout: DefaultLayout,
	    component: ProductDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/bids',
		name: 'Bids',
		layout: DefaultLayout,
		component: Bids,
	},
	{
	    path: '/bid/:bidId', 
	    name: 'BidDetail',
		layout: DefaultLayout,
	    component: BidDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/orders',
		name: 'Orders',
		layout: DefaultLayout,
		component: Orders,
	},
	{
	    path: '/order/:orderId', 
	    name: 'OrderDetail',
		layout: DefaultLayout,
	    component: OrderDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/categorys',
		name: 'Categorys',
		layout: DefaultLayout,
		component: Categorys,
	},
	{
	    path: '/category/:categoryId', 
	    name: 'CategoryDetail',
		layout: DefaultLayout,
	    component: CategoryDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/productCategorys',
		name: 'ProductCategorys',
		layout: DefaultLayout,
		component: ProductCategorys,
	},
	{
	    path: '/productCategory/:productCategoryId', 
	    name: 'ProductCategoryDetail',
		layout: DefaultLayout,
	    component: ProductCategoryDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/reviews',
		name: 'Reviews',
		layout: DefaultLayout,
		component: Reviews,
	},
	{
	    path: '/review/:reviewId', 
	    name: 'ReviewDetail',
		layout: DefaultLayout,
	    component: ReviewDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/shoppingCarts',
		name: 'ShoppingCarts',
		layout: DefaultLayout,
		component: ShoppingCarts,
	},
	{
	    path: '/shoppingCart/:shoppingCartId', 
	    name: 'ShoppingCartDetail',
		layout: DefaultLayout,
	    component: ShoppingCartDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/cartItems',
		name: 'CartItems',
		layout: DefaultLayout,
		component: CartItems,
	},
	{
	    path: '/cartItem/:cartItemId', 
	    name: 'CartItemDetail',
		layout: DefaultLayout,
	    component: CartItemDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/payments',
		name: 'Payments',
		layout: DefaultLayout,
		component: Payments,
	},
	{
	    path: '/payment/:paymentId', 
	    name: 'PaymentDetail',
		layout: DefaultLayout,
	    component: PaymentDetail,
	    props: true // Pass route params as props to the component
  	},
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;

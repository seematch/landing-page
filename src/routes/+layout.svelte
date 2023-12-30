<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<nav class="sticky top-0 w-full bg-base-100 z-50">
	<div role="alert" class="alert alert-warning rounded-none">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="stroke-current shrink-0 h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
			/></svg
		>
		<span>This website is in very early development. But we're working on it!</span>
	</div>
	<Navbar />
</nav>
{#key data.url}
	<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}>
		<slot />
	</div>
{/key}
<footer>
	<Footer />
</footer>

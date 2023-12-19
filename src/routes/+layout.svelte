<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	import Navbar from '../components/Navbar.svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<nav class="sticky top-0 w-full bg-base-100 z-50">
	<Navbar />
</nav>
{#key data.url}
	<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}>
		<slot />
	</div>
{/key}

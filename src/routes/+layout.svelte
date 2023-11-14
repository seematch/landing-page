<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	import Navbar from '../components/Navbar.svelte';
</script>

<nav class="sticky top-0 w-full bg-base-100">
	<Navbar />
</nav>
<slot />

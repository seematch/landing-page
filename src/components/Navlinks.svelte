<script>
	//get the current url from store
	import { page } from '$app/stores';

	$: url = $page.route.id;

	//create event dispatcher to close the sidebar
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function closeSidebar() {
		dispatch('close');
	}
</script>

<a
	class:btn-neutral={url?.includes('/team') ?? false}
	class:btn-ghost={!url?.includes('/team') ?? true}
	href="/team"
	class="btn"
	on:click={closeSidebar}
	aria-current="page">Meet the team</a
>

<a
	on:click={closeSidebar}
	class:btn-neutral={url?.includes('/support') ?? false}
	class:btn-ghost={!url?.includes('/support') ?? true}
	href="/support"
	class="btn"
	aria-current="page">Support</a
>
<a
	on:click={closeSidebar}
	class:btn-neutral={url?.includes('/news') ?? false}
	class:btn-ghost={!url?.includes('/news') ?? true}
	href="/news"
	class="btn"
	aria-current="page">News</a
>

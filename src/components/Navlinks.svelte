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
	class:btn-neutral={url === '/team'}
	class:btn-ghost={url !== '/team'}
	href="/team"
	class="btn"
	on:click={closeSidebar}
	aria-current="page">Meet the team</a
>

<a
	on:click={closeSidebar}
	class:btn-neutral={url === '/support'}
	class:btn-ghost={url !== '/support'}
	href="/support"
	class="btn"
	aria-current="page">Support</a
>
<a
	on:click={closeSidebar}
	class:btn-neutral={url === '/news'}
	class:btn-ghost={url !== '/news'}
	href="/news"
	class="btn"
	aria-current="page">News</a
>

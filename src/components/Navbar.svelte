<script>
	import { slide } from 'svelte/transition';
	import Navlinks from './Navlinks.svelte';
	let show = false;
	import Logo from '$lib/img/logo.png';
</script>

<div class="mx-auto px-2 md:px-6 lg:px-8">
	<div class="flex h-16 items-center justify-between">
		<div class="flex items-center md:hidden">
			<label class="btn btn-circle swap swap-rotate">
				<!-- this hidden checkbox controls the state -->
				<input type="checkbox" on:click={() => (show = !show)} />

				<!-- hamburger icon -->
				<svg
					class="swap-off fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 512 512"
					><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
				>

				<!-- close icon -->
				<svg
					class="swap-on fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 512 512"
					><polygon
						points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
					/></svg
				>
			</label>
		</div>
		<a aria-current="page" href="/">
			<div class="flex flex-shrink-0 gap-2 items-center">
				<img class="h-8 w-auto" src={Logo} alt="Your Company" />
				<span class="text-lg font-bold text-white">SeeMatch</span>
			</div>
		</a>
		<div class="flex items-center justify-center md:items-stretch md:justify-star">
			<div class="hidden md:ml-6 md:block">
				<div class="flex space-x-4">
					<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
					<Navlinks
						on:close={() => {
							show = false;
						}}
					/>
				</div>
			</div>
		</div>

		<a href="/download" class="btn btn-primary lg:btn-wide"> Try the beta </a>
	</div>
</div>

<!-- Mobile menu, show/hide based on menu state. -->
{#if show}
	<div class="md:hidden" transition:slide={{ duration: 500 }} id="mobile-menu ">
		<div class="flex flex-col">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			<Navlinks
				on:close={() => {
					show = false;
				}}
			/>
		</div>
	</div>
{/if}

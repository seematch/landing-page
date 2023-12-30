<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="w-full bg-[url(lib/img/pattern-1.png)] bg-no-repeat bg-cover bg-center min-h-screen">
	<article class="flex py-32 flex-col px-4">
		<h1 class="mx-auto text-5xl">Who are we?</h1>
		<p class="mt-16 max-w-xl mx-auto text-center">
			We are a small team of software developers. We had an idea for an app, that we thoutgh the
			world could really use. We are currently working on the app, and we are hoping to release it
			very soon. We are currently in the beta stage, and we are looking for beta testers. If you are
			interested in beta testing, please contact us via <a
				class="underline"
				href="mailto:info@instamatch.dk">e-mail</a
			>. We aprichiate that you take the time to help us improve our app.
		</p>
	</article>
</main>

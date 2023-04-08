<script>
	import '../app.postcss';
	import Navbar from '../components/navbar.svelte';
</script>

<Navbar />

<main class="bg-slate-800 gap-8 grid grid-cols-4 min-h-screen min-w-screen py-12 p-2">
	<slot />
</main>

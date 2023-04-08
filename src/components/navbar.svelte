<script>
	import Home from './icons/home.svelte';
	import About from './icons/about.svelte';
	import Contact from './icons/contact.svelte';
	import Feed from './icons/feed.svelte';
	import { onMount } from 'svelte';
	let menu = [
		{
			label: 'Home',
			icon: Home,
			desktop: true,
			href: '/'
		},
		{
			label: 'people',
			icon: About,
			desktop: true,
			href: '/people'
		},
		{
			label: 'Posts',
			icon: Feed,
			desktop: true,
			href: '/posts'
		},
		{
			label: 'Contact',
			icon: Contact,
			desktop: false,
			href: '/contact'
		}
	];
	let activePage = 'Home';
	let loggedIn = false;
	let csrfToken = '';
	onMount(() => {
		let path = window.location.pathname;
		for (let item of menu) {
			if (item.href === path) {
				activePage = item.label;
				break;
			}
		}
		// if logged in (csrf token exists), set loggedIn to true
		document.cookie.split(';').forEach((cookie) => {
			if (cookie.includes('token')) {
				loggedIn = true;
				csrfToken = cookie.split('=')[1];
			}
			console.log(cookie)
		});
	});

	// if logged in, attempt to validate token
	$: if (loggedIn) {
		fetch('http://localhost:8800/validate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ token: csrfToken }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					loggedIn = false;
					console.log(data);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
</script>

<header class="navbar bg-slate-800/90 text-white shadow-lg z-50 sticky top-0 backdrop-blur-lg">
	<nav class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content bg-slate-800/80 mt-3 p-2 shadow rounded-box w-52 backdrop-blur-xl"
			>
				{#each menu as item}
					<li class="menu-item">
						<a
							href={item.href}
							class={`btn btn-ghost grid grid-cols-2 ${
								activePage === item.label ? 'text-slate-400' : ''
							}`}
						>
							{#if item.icon}
								<svelte:component this={item.icon} />
							{/if}
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl" href="/">Knightly</a>
	</nav>
	<nav class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each menu as item}
				{#if item.desktop}
					<li>
						<a
							href={item.href}
							class={`btn btn-ghost ${activePage === item.label ? 'text-slate-400' : ''}`}
						>
							{#if item.icon}
								<svelte:component this={item.icon} />
							{/if}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
	<div class="navbar-end">
		{#if loggedIn}
			<a class="btn" href="/logout">Logout</a>
		{:else}
			<a class="btn" href="/login">Login</a>
		{/if}
	</div>
</header>

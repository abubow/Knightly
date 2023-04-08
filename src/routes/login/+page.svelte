<script lang="ts">
	import Infinity from '../../components/icons/infinity.svelte';
	let email = '';
	let password = '';
	let error = '';
	let loading = false;
	let success = false;
	let valid = false;
	$: valid = email !== '' && password !== '';

	let token = '';

	function submit(e: Event) {
		e.preventDefault();
		if (valid) {
			loading = true;
			fetch('http://localhost:8800/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password
				})
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.error) {
						error = data.error;
					} else {
						token = data.token;
						success = true;
					}
					loading = false;
				})
				.catch((err) => {
					console.log(err);
					loading = false;
				});
		}
	}

	// if success, redirect to home page
	$: if (success) {
		document.cookie = `token=${token}; path=/;`;
		window.location.href = '/';
	}
</script>

<main class="min-h-screen min-w-screen flex flex-col justify-center items-center">
	<section
		class="bg-slate-700/80 text-primary-content shadow-2xl w-full max-w-sm lg:max-w-2xl rounded-2xl overflow-hidden grid lg:grid-cols-2 gap-4"
	>
		<main class="card-body">
			<h1 class="card-title">Log in</h1>
			<form class="flex flex-col gap-2">
				<label for="email" class="label">
					<span class="label-text">Email</span>
				</label>
				<input
					bind:value={email}
					type="email"
					name="email"
					id="email"
					class="input input-bordered input-sm w-full max-w-xs text-primary-500"
					placeholder="Email"
				/>
				<label for="password" class="label">
					<span class="label-text">Password</span>
				</label>
				<input
					bind:value={password}
					type="password"
					name="password"
					id="password"
					class="input input-bordered input-sm w-full max-w-xs"
					placeholder="Password"
				/>
				<button
					type="submit"
					class={`btn mt-6 btn-md btn-primary ${
						valid ? '' : 'btn-disabled'
					} grid gap-3 grid-cols-3`}
					disabled={!valid}
					on:click={submit}
				>
					<span>
						{#if loading}
							<Infinity />
						{:else if success}
							<svg
								class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1zm1.293 1.293l-1.414 1.414A8 8 0 0112 20v-1a7 7 0 00-6.707-6.707z"
								/>
							</svg>
						{/if}
					</span>
					<span class="flex items-center grid-span-2 grid-start-2">
						{#if success}
							Success
						{:else}
							Log in
						{/if}
					</span>
				</button>
			</form>
		</main>
		<figure class="card-side bg-primary-500 hidden md:block">
			<img src="https://picsum.photos/300/300" alt="Login" class="object-cover w-full h-full" />
		</figure>
	</section>
</main>

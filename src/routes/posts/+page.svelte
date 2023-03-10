<script lang="ts">
	import PostCard from '../../components/post-card.svelte';
	import Navbar from '../../components/navbar.svelte';
	import type { Post } from '../../utils/type';
	/** @type {import('./$types').PageData} */
	export let data: any;
	// Sort posts in reverse chronological order
	let posts: Post[] = data.posts.sort((a: Post, b: Post) => {
		return a.id < b.id ? 1 : -1;
	});
	let currentPage = 1;
	let dataPerPage = 6;
	let totalPages = posts.length / dataPerPage;
	let start = (currentPage - 1) * dataPerPage;
	let end = start + dataPerPage;

	$: posts = data.posts.slice(start, end);
	$: totalPages = data.posts.length / (dataPerPage * 1.0);
	$: start = (currentPage - 1) * dataPerPage;
	$: end = start + dataPerPage;
</script>

<Navbar />
<main class="bg-slate-800 gap-8 grid grid-cols-4 min-h-screen min-w-screen my-12 p-2">
	<section class="col-span-4 lg:col-span-2 lg:col-start-2">
		<h1 class="text-4xl text-center text-primary-content">Posts</h1>
		{#if posts.length === 0}
			<h1 class="text-4xl text-center text-primary-content">No posts yet</h1>
		{:else}
			{#each posts as post}
				<PostCard
					title={post.title}
					body={post.body}
					createdAt={post.created_at}
					updatedAt={post.updated_at}
					username={post.author.username}
				/>
			{/each}
		{/if}
	</section>
	<section class="min-w-full col-span-4 lg:col-span-2 lg:col-start-2 items-center justify-end flex">
		<main aria-label="pagination" class="btn-group col-span-4 lg:col-span-2 lg:col-start-2">
			<button
				class="btn btn-ghost btn-sm"
				disabled={currentPage === 1 || totalPages === 0}
				on:click={() => (currentPage = currentPage - 1)}
			>
				Previous
			</button>
			{#each Array.from({ length: totalPages + 1 }, (_, i) => i + 1) as page}
				{#if page === currentPage - 2 || page === currentPage - 1 || page === currentPage || page === currentPage + 1 || page === currentPage + 2}
					<button
						class={`btn btn-ghost btn-sm ${currentPage === page ? 'btn-active' : ''}`}
						on:click={() => (currentPage = page)}
					>
						{page}
					</button>
				{/if}
			{/each}
			<button
				class="btn btn-ghost btn-sm"
				disabled={currentPage >= totalPages || totalPages === 0}
				on:click={() => (currentPage = currentPage + 1)}
			>
				Next
			</button>
		</main>
	</section>
</main>

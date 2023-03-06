<script lang="ts">
	import PostCard from '../../components/post-card.svelte';
	import type { Post } from '../../utils/type';
	/** @type {import('./$types').PageData} */
	export let data: any;
	// Sort posts in reverse chronological order
	let posts: Post[] = data.posts.sort((a: Post, b: Post) => {
		return a.id < b.id ? 1 : -1;
	});
</script>

<main class="container mx-auto bg-slate-800 gap-2 grid grid-cols-1 lg:grid-cols-2">
	{#each posts as post}
		<PostCard
			title={post.title}
			body={post.body}
			createdAt={post.created_at}
			updatedAt={post.updated_at}
		/>
	{/each}
</main>

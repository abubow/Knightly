<script lang="ts">
	export let title = 'Untitled';
	export let body = 'No content';
	export let username = '';
	export let createdAt = '';
	export let updatedAt = '';
	let currentTime = new Date().getTime();
	let timePassed: number;
	if (typeof createdAt === 'string') {
		timePassed = currentTime - new Date(createdAt).getTime();
	}
</script>

<section class="card bg-slate-700 text-primary-content m-2 min-w-1/2 lg:min-w-1/3">
	<header class="card-body grid grid-cols-10">
		<div class="flex flex-col items-center">
			<img
				src="https://placehold.co/100x100"
				class="rounded-full w-10 h-10"
				width="50"
				height="50"
				alt="avatar"
			/>
			<p class="text-xs">{username}</p>
		</div>
		<h3 class="card-title col-span-9">
			{title}
		</h3>
	</header>
	<div class="divider m-0" />
	<article class="card-body">
		<span class="badge badge-accent text-xs">
			{timePassed > 86400000
				? new Date(createdAt).toLocaleDateString()
				: new Date(createdAt).toLocaleTimeString()}
		</span>
		<span aria-label="content" class="text-sm">
			{body.length > 100 ? body.slice(0, 100) + '...' : body}
		</span>
	</article>
</section>

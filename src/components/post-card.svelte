<script lang="ts">
	export let title = 'Untitled';
	export let body = 'No content';
	export let username = '';
	export let createdAt = '';
	export let updatedAt = '';
	let currentTime = new Date().getTime();
	let timePassed: number;
	if (typeof createdAt === 'string') {
		if (updatedAt !== createdAt) {
			timePassed = currentTime - new Date(updatedAt).getTime();
		} else timePassed = currentTime - new Date(createdAt).getTime();
	}
</script>

<section class="card bg-slate-700 text-slate-300 m-2 min-w-1/2 lg:min-w-1/3 shadow-lg">
	<header class="card-body grid grid-cols-10">
		<div class="avatar online col-span-1 w-10 h-10">
			<span class="rounded-full w-10 h-10 shadow-2xl">
				<img
					src="https://placehold.co/100x100"
					class="rounded-full w-10 h-10"
					width="50"
					height="50"
					alt="avatar"
				/>
			</span>
			<p class="text-xs">{username}</p>
		</div>
		<h3 class="col-span-9 grid grid-rows-2">
			<span class="card-title">
				{title}
			</span>
		</h3>
	</header>
	<div class="divider m-0" />
	<article class="card-body">
		<span aria-label="content" class="text-sm">
			<span class="badge badge-info shadow-2xl text-xs opacity-90 backdrop-blur-3xl">
				{updatedAt !== createdAt
					? 'Updated ' +
					  (timePassed > 86400000
							? new Date(updatedAt).toLocaleDateString()
							: new Date(updatedAt).toLocaleTimeString())
					: timePassed > 86400000
					? new Date(createdAt).toLocaleDateString()
					: new Date(createdAt).toLocaleTimeString()}
			</span>
			{body.length > 350 ? body.slice(0, 350) + '...' : body}
		</span>
	</article>
</section>

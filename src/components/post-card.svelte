<script lang="ts">
	export let title = 'Untitled';
	export let body = 'No content';
	export let createdAt = '';
	export let updatedAt = '';
    let currentTime = new Date().getTime();
    let timePassed: number;
    if (typeof createdAt === 'string') {
        timePassed = currentTime - new Date(createdAt).getTime();
    }
</script>

<section class="card bg-slate-700 text-primary-content m-2 min-w-1/2 lg:min-w-1/3">
	<header class="card-body">
		<h3 class="card-title">
			{title}
		</h3>
		<p class="badge badge-secondary">
            {
                timePassed > 86400000
                ? new Date(createdAt).toLocaleDateString()
                : new Date(createdAt).toLocaleTimeString()
            }
		</p>
	</header>
	<article class="card-body">
		<p>{body}</p>
	</article>
</section>

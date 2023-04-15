<script lang="ts">
	import PersonCard from '../../components/person-card.svelte';
	import type { User } from '../../utils/type';

    export let data: any;
	let people: User[] = data.users;

    let currentPage = 1;
    let dataPerPage = 5;
    let totalPages = Math.floor(people.length / dataPerPage);
</script>

<section class="col-span-4 lg:col-span-2 lg:col-start-2 gird grid-cols-1">
	<header>
		<h1 class="text-2xl text-center text-slate-300">People Recommended for You</h1>
	</header>
	<main class="bg-slate-800 gap-8 grid grid-cols-1 grid-rows-5 min-h-screen min-w-screen py-12 p-2">
		{#each people.slice((currentPage - 1) * dataPerPage, currentPage * dataPerPage) as person}
            <PersonCard
                username={person.username}
                email={person.email}
                avatar={ 'https://i.pravatar.cc/150?img=1'}
            />
        {/each}
	</main>
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
					class={`btn btn-ghost btn-sm ${currentPage === page ? 'btn-outline' : ''}`}
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

<script lang="ts">
	export let username: string;
	export let email: string;
	export let avatar: string;
</script>

<div
	class="card bg-slate-700 text-slate-300 m-2 min-w-1/2 lg:min-w-1/3 shadow-lg grid grid-cols-10 gap-1 px-3 overflow-hidden"
>
	<span class="col-span-1 p-3 overflow-hidden">
		<img
			class="avatar online w-16 h-16 rounded-full shadow-2xl overflow-hidden"
			src={avatar}
			alt={username}
		/>
	</span>
	<span class="col-span-9 p-3 card-body">
		<h3 class="card-title">{username}</h3>
		<p class="text-xs">{email}</p>
	</span>
</div>

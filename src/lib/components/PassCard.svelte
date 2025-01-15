<script lang="ts">
	import type { Pass } from '$lib/types';
	import type { SelectedAttractions } from '$lib/types';
    import { ticketData } from '$lib/data';


	const { pass, selectedAttractions } = $props<{ pass: Pass; selectedAttractions: SelectedAttractions }>();

</script>

<div
	class="transform rounded-lg bg-white p-6 shadow-lg transition-all duration-500 hover:scale-105"
>
	<h3 class="mb-4 text-xl font-bold">{pass.name}</h3>

	<div class="mb-4">
		<span class="text-sm font-semibold text-gray-600">Type: {pass.type}</span>
	</div>

	<div class="space-y-2">
		<h4 class="font-semibold">Included Attractions:</h4>
		<ul class="list-disc space-y-1 pl-5">
			{#each pass.attractions as attraction}
				<li
					class={selectedAttractions.includes(attraction.id)
						? 'font-semibold text-blue-600'
						: 'text-gray-600'}
				>
					{ticketData.attractions.find((a) => a.id === attraction.id)?.name}
				</li>
			{/each}
		</ul>
	</div>

	{#if pass.choices}
		<div class="mt-4 space-y-2">
			<h4 class="font-semibold">Choose from:</h4>
			{#each pass.choices as choice}
				<div class="pl-5">
					<span class="text-sm text-gray-600">Pick from:</span>
					<ul class="list-disc space-y-1 pl-5">
						{#each choice.attractions as attraction}
							<li
								class={selectedAttractions.includes(attraction.id)
									? 'font-semibold text-blue-600'
									: 'text-gray-600'}
							>
								{ticketData.attractions.find((a) => a.id === attraction.id)?.name}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	{/if}
</div>

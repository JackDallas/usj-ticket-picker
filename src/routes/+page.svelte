<script lang="ts">
	import { ticketData } from '$lib/data';
	import AttractionCheckbox from '$lib/components/AttractionCheckbox.svelte';
	import PassCard from '$lib/components/PassCard.svelte';

	let selectedAttractions = $state<string[]>([]);

	let filteredPasses = $derived.by(() => {
		console.log('Filtering passes with selected attractions:', selectedAttractions);

		if (selectedAttractions.length === 0) {
			console.log('No attractions selected, returning all passes');
			return ticketData.passes;
		}

		return ticketData.passes.filter((pass) => {
			console.log('\nChecking pass:', pass.name);
			
			const baseAttractions = pass.attractions.map(a => a.id);
			let remainingSelected = selectedAttractions.filter(id => !baseAttractions.includes(id));

			if (remainingSelected.length === 0) {
				return true;
			}

			if (!pass.choices) {
				return false;
			}

			for (const choice of pass.choices) {
				console.log('\nChecking choice group:', choice.group);
				const choiceAttractions = choice.attractions.map(a => a.id);
				const selectedInChoice = remainingSelected.filter(id => choiceAttractions.includes(id));
				
				if (selectedInChoice.length > 0 && selectedInChoice.length !== 1) {
					console.log('Invalid number of selections for choice group');
					return false;
				}
				
				remainingSelected = remainingSelected.filter(id => !choiceAttractions.includes(id));
			}

			return remainingSelected.length === 0;
		});
	});

	const toggleAttraction = (id: string) => {
		if (selectedAttractions.includes(id)) {
			selectedAttractions = selectedAttractions.filter(attractionId => attractionId !== id);
		} else {
			selectedAttractions = [...selectedAttractions, id];
		}
	};
</script>

<div class="min-h-screen bg-gray-100 p-8">
	<!-- Attractions Grid -->
	<div class="mb-8 rounded-lg bg-white p-6 shadow-lg">
		<h2 class="mb-4 text-2xl font-bold">Select Your Desired Attractions</h2>
		<div class="grid grid-cols-4 gap-4">
			{#each ticketData.attractions as attraction}
				<AttractionCheckbox
					{attraction}
					onclick={() => toggleAttraction(attraction.id)}
				/>
			{/each}
		</div>
	</div>

	<!-- Passes Grid -->
	<div class="grid grid-cols-3 gap-6">
		{#each filteredPasses as pass (pass.id)}
			<PassCard {pass} {selectedAttractions} />
		{/each}
	</div>
</div>

<style>
	/* Add transitions for the cards */
	:global(.grid) {
		@apply transition-all duration-500 ease-in-out;
	}
</style>

<script lang="ts">
	import type { Attraction } from '$lib/types';

	interface Props {
		attraction: Attraction;
		onclick: () => void;
	}

	let { attraction, onclick }: Props = $props();
</script>

<label
	class="flex cursor-pointer items-center space-x-3 rounded p-2 transition-colors duration-200 hover:bg-gray-50"
>
	<input
		type="checkbox"
        {onclick}
		class="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
	/>
	<span class="text-sm font-medium text-gray-700">{attraction.name}</span>
</label>

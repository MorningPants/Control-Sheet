<script>
	import * as data from '$lib/data/tables.json';
	let tables = data.default;
	function addColumn(table){
		table.titles.push("");
		for (let i =0; i<table.data.length; i++){
			table.data[i].push("");
		}
		console.log(table)
	};
	function addRow(table){};
	function addTable(){};
</script>

<header class="paper">
	<h1>codeBuds()</h1>
	<h2>Learning Web Development, Together!</h2>
</header>
<section class="paper page">
	{#each tables as table}
		<h3 contenteditable="true" bind:innerHTML={table.name} />
		<table>
			{#each table.titles as title}
				<th contenteditable="true" bind:innerHTML={title} />
			{/each}
			<button on:click={addColumn(table)}>Add Column</button>
			{#each table.data as row}
				<tr>
					{#each row as item}
						<td> <input bind:value={item} /></td>
					{/each}
				</tr>
			{/each}
			<tr><button on:click={addRow(table)}>Add Row</button></tr>
		</table>
		<hr />
	{/each}
	<div class="center">
		<button on:click={addTable()}>Add Table</button>
	</div>
	<h3>Output:</h3>
	<p>{JSON.stringify(tables)}</p>
</section>

<style>
	.paper {
		padding: 2em;
		background-color: #ffffff;
		margin: 2em auto;
		width: fit-content;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
			rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
			rgba(0, 0, 0, 0.09) 0px -3px 5px;
		position: relative;
	}
	.paper:before,
	.paper:after {
		content: '';
		height: 98%;
		position: absolute;
		width: 100%;
		z-index: -1;
	}
	.paper:before {
		background: #fafafa;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
		left: -5px;
		top: 4px;
		transform: rotate(-2.5deg);
	}
	.paper:after {
		background: #f6f6f6;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
		right: -3px;
		top: 1px;
		transform: rotate(1.4deg);
	}
	.page {
		min-width: 70%;
		min-height: 100vw;
		padding: 4em 3em;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1,
	h2 {
		width: fit-content;
	}
	h1 {
		font-size: 48px;
		border-bottom: 2px solid;
		margin-bottom: 0.1em;
	}
	table {
		margin: 1em auto;
	}
	h3 {
		text-align: center;
	}
	tr {
		vertical-align: text-top;
	}
	td {
		resize: horizontal;
		overflow: auto;
		border: 1px solid black;
	}
	p {
		max-width: 50em;
		margin: 1em auto;
	}
	.center{
		display: flex;
		justify-content: center;
	}
</style>

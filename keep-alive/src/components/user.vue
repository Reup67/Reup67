<template>
	<div>
		<div class="title">
			<slot name="title"></slot>
			<span style="color:#ccc;">
				<slot name="subtitle">The subtitle</slot>
			</span>
		</div>
		<hr>
		<div>
			<slot >
				<p>Dinamic components</p>
			</slot>
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style  scoped>
	div{
		border: 1px solid #ccc;
		box-shadow: 1px 1px 2px black;
		padding: 30px;
		margin: auto;
	}

	h2{
		color:red;
		margin: auto;
		margin-left: 400px;
	}
	span{}
	.title{
		font-style: italic;
	}
</style>
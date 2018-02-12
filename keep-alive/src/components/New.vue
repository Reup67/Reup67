<template>
	<div>
		<h3>new</h3>
		<button @click="counter++">increase</button>
		<p>{{counter}}</p>
	</div>
</template>

<script>
	export default{
		data:function() {
			return{
				counter: 0
			};
		},
		destroyed(){
			console.log('destroy');
		},
		deactivated(){
			console.log('deactivated');
		},
		activated(){
			console.log('activated');
		}
	}
</script>

<style  scoped>

</style>
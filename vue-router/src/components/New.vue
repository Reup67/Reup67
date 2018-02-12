<template>
	<div>
		<h1>New</h1>
		<hr>
       <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
       <hr>
       <router-view></router-view>
	</div>
</template>

<script>
	  export default {
        methods:{
            navigateToHome(){
                this.$router.push({name: 'user'});
            }
        }
    }
</script>

<style  scoped>

</style>
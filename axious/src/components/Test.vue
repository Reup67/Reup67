<template>
	<div class="in">
		<p>Your email address {{email}}</p>
	</div>
</template>





<script>
	import axios from 'axios';
    export default {
			data(){
				return{
					email:''
				}
			},
			created(){
				axios.get('https://axios-23d4a.firebaseio.com/users.json')
				.then(res =>{
				console.log(res)
				const data = res.data
				const users = []
				for(let key in data){
					const user = data[key]
					user.id = key
					users.push(user)
				}
				console.log(users)
				this.email = users[0].email
				})
				.catch(error => console.log(error))
			}
    }
</script>



<style>

	.in{
		width: 100%;
		height: 800px;
		background: lightpink;
	}
</style>

<template>
	<div>
			<h1>UserEdit</h1>
			<p>
				locale:{{$route.query.locale}}
			</p>
			<p>Analytics {{$route.query.q}}</p>
			<button class="btn btn-success" @click="confirmed = true">Confirm</button>
			<div style="height: 700px;"></div>
			<p id="data">some extra text</p>
	</div>

</template>

<script>
	export default{
		data(){
			return{
				confirmed: false
			}
		},
		beforeRouteLeave(to,from,next){
			if (this.confirmed) {
				next();
			}else{
				if (confirmed('Are you sure?')) {
					next();
				}else{
					next(false);
				}

			}
			
		}
	}
</script>
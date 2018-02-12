<template>
<div>
	<h1>Please select a User</h1>
	<hr>
	<ul class="list-group">
		<router-link tag="li"
		to="/New/1"
		class="list-group-item"
		style="cursor: pointer;">User1</router-link>

		<router-link tag="li" 
		class="list-group-item"
		to="/New/2"
		style="cursor: pointer;">User2</router-link>

		<router-link tag="li" 
		class="list-group-item"
		 to="/New/3"
		 style="cursor: pointer;">User3</router-link>
	</ul>
</div>
</template>
new Vue({
	el: '#app',
	data:{
		show:false,
		class: 'style',
		showm: true
	},
	methods:{
		showme: function() {
			this.show = true;

		},
		hide: function(){
			this.show = false;
		}
	}
});
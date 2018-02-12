new Vue({
	el:"#app",
	data:{
	
        show1:true,
        show2:false,
        show3:false
	},
	methods:{
		Sshow: function() {
				this.show2 = true;
				this.show1 = false;
				this.show3 = false;
		},
		Mshow: function() {
				this.show2 = false;
				this.show1 = true;
				this.show3 = false;
		},
		MSshow: function() {
				this.show2 = false;
				this.show1 = false;
				this.show3 = true;
		}
		
	}
	
});


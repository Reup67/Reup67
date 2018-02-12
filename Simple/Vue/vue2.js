new Vue({
	el:'#app',
	data:{
		name:'Change size',
		boxWidth: 130,
		plusW: 10,
		minus:130,
		name2:'Change color',
		boxColor: '#e78484',
		Border:130,
		boxColor2: 'lightgreen',
		color2:'#69d569',
		back1:'lightblue'
	},
	methods:{
		change: function() {
			var plusSize = 10;
			var minus = 70;
			var color3 = '#ccc';
			this.back1 = color3;
			this.boxWidth += plusSize;
			this.Border += plusSize;
			if (this.boxWidth == 200 && this.Border == 200) {
				this.boxWidth -= minus;
				this.Border -= minus;
			}
		},
		changeColor: function() {
			var color = '#b95e5e';
			var bord = 10;
			if (this.boxColor == '#e78484') {
				this.boxColor = color;
				this.Border -= bord;
				this.boxColor2 = '#69d569';
			}else{
				this.boxColor = '#e78484';
				this.Border +=  bord;
				this.boxColor2 = 'lightgreen';
			}
		}
	}

});
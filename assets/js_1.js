function nightDayHandler(self){
		setColor(color){
			var alist = document.querySelectorAll('a');
			var i=0;
			while(i<alist.length){
				alist[i].style.color=color;
				i++;
			}
		}
		setBackColor(backColor,color,value){
			var target= document.querySelector('body');
			
			target.style.backgroundColor = backColor;
			target.style.color = color;
			self.value = value;
		}

	
		if(self.value === 'night'){
			
			setBackColor('black','white','day');
			setColor('powderblue');
			
		}else{
			setBackColor('white','black','night');
			setColor('blue');
	}

}

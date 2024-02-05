function nightDayHandler(self){
	
		function setColor(color){
			var alist = document.querySelectorAll('a');
			var i=0;
			while(i<alist.length){
				alist[i].style.color=color;
				i++;
			}
		}
	
		function linksBackColor(backColor){
			document.querySelector('body').style.backgroundColor = backColor;
		}
	
		function linksColor(color){
			document.querySelector('body').style.color = color;
		}

	
		if(self.value === 'night'){
			linksBackColor('black');
			linksColor('white');
			self.value = 'day';
			setColor('powderblue');
			
		}else{
			linksBackColor('white');
			linksColor('black');
			self.value = 'night';
			setColor('blue');
	}

}

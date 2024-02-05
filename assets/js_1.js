function nightDayHandler(self){
	
		var Links={
			setColor: function(color){
				var alist = document.querySelectorAll('a');
				var i=0;
				while(i<alist.length){
					alist[i].style.color=color;
					i++;
				}
			}
		}
	
		var Body ={
			setBackgroundColor: function(color){
				$('body').css('backgroundColor',color);
				// document.querySelector('body').style.backgroundColor = color;
			}
			,
			setColor: function(color){
				$('body').css('color',color);
				// document.querySelector('body').style.color = color;
			}
		}

	
		if(self.value === 'night'){
			Body.setBackgroundColor('black');
			Body.setColor('white');

			self.value = 'day';
			Links.setColor('powderblue');
			
		}else{
			Body.setBackgroundColor('white');
			Body.setColor('black');
			self.value = 'night';
			Links.setColor('blue');
	}

}

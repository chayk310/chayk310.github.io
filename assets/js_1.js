function nightDayHandler(self){
  
		var target= document.querySelector('body');
		var alist = document.querySelectorAll('a');
		if(self.value === 'night'){
			target.style.backgroundColor='black';
			target.style.color='white';
			self.value = 'day';

			var i=0;
			while(i<alist.length){
				alist[i].style.color='powderblue';
				i++;
			}
		}else{
			target.style.backgroundColor='white';
			target.style.color='black';
			self.value ='night';

			var i=0;
			while(i<alist.length){
				alist[i].style.color='blue';
				i++;
			}
	}

}

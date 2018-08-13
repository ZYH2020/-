var yike=angular.module('yike',[]);
yike.run(['$rootScope',function($rootScope){
	// console.log($rootScope);
	$rootScope.toggle=function(e){
		event.preventDefault();
		event.stopPropagation();
		if(e===false&&!$rootScope.onRight) return;
		$rootScope.onRight=!$rootScope.onRight;
		var navs = document.querySelector('.navs');
		var dd = navs.querySelectorAll('dd');
		if($rootScope.onRight){
			for(var i=0; i<dd.length; i++) {
				dd[i].style.transitionDuration = (i + 1) * 0.07 + 's';
				dd[i].style.transitionProperty = 'all';
				dd[i].style.transitionDelay = '0.1s';
				dd[i].style.transitionTimingFunction = 'ease-out';
				dd[i].style.transform = 'translate(0)';
			}
		}else{
			for(var i=dd.length - 1; i>=0; i--) {
				dd[i].style.transitionDuration = (dd.length - i + 1) * 0.05 + 's';
				dd[i].style.transitionProperty = 'all';
				dd[i].style.transitionDelay = '';
				dd[i].style.transitionTimingFunction = 'ease-out';
				dd[i].style.transform = 'translate(-100%)';
			}
		}
	}
}]);
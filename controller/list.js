var app = angular.module('jianshu', [])

app.directive('onFinishRenderFilters', function($timeout) {
	
	return {
		restrict: 'AEC',
		link: function(scope, element, attr) {
			if(scope.$last === true) {
				$timeout(function() {
					scope.$emit('ngRepeatFinished');
				});
			}
		}
	};
});

app.controller('jsCtrl', function($scope, $http, $element) {
//debugger;
	$scope.url = "resources/hot.html";
	$scope.changeUrl = function(id) {
		//		$scope.url = "resources/hot.html";
		if(id == "hot") {
			$scope.url = "resources/hot.html"
		} else if(id == "nowNews") {
			$scope.url = "resources/nowNews.html";
		} else if(id == "novels") {
			$scope.url = "resources/novels.html";
		} else if(id == "photograph") {
			$scope.url = "resources/photograph.html";
		} else {
			$scope.url = "";
		}
	}

	search($scope, $http);

	function search($scope, $http) {
		$http.get('JSON/list-article.json').success(function(data) {
			$scope.datas = eval(data.data);
			//				console.log($scope.datas);
			//				console.log(data.data[2].thumb.0.url)

			//				

			var arr_jyfx = new Array;
			var arr_hlgl = new Array;
			var arr_hsxs = new Array;
			var arr_js = new Array;
			for(var i = 0; i < $scope.datas.length; i++) {
				//					console.log(data.data[i].term_name)

				if(data.data[i].term_name == '经验分享') {
					arr_jyfx.unshift(data.data[i]);
				} else if(data.data[i].term_name == '护理管理') {
					arr_hlgl.unshift(data.data[i]);
				} else if(data.data[i].term_name == '护士心声') {
					arr_hsxs.unshift(data.data[i]);
				}else if(data.data[i].term_name == '简书') {
					arr_js.unshift(data.data[i]);
				}
			}
			$scope.datas1 = arr_jyfx;
			$scope.datas2 = arr_hlgl;
			$scope.datas3 = arr_hsxs;
			$scope.datas4 = arr_js;

			//			console.log(arr_jyfx)
			//			console.log(arr_hlgl)
			//			console.log(arr_hsxs)

		})

	}
//	debugger;
	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
		//下面是在 render完成后执行的js
		
		
		//刷新时不执行上面函数，出来布局混乱
		var wrap = $('#guide-wrap');
		console.log(wrap);
		if(wrap.width() < 930 && wrap.width() >= 450) {
			$('.guide-img').css('display', 'none');
			$('#guide-wrap .d-btn').css({
				'width': '46%',
				'margin-top': '35px'
			});
			$('#guide-wrap .text-part').css({
				'margin-top': '30px',
				'width': '46%',
				'margin-left': '30px'
			})

		}
		if(wrap.width() < 450) {
			$('.guide-img').css('display', 'none');
			$('#guide-wrap .text-part').css('display', 'none');
			$('#guide-wrap .d-btn').css({
				'width': '100%',
				'margin-top': '48px'
			})
		}

	});

}).controller('left-navbar', function($scope) {
	$scope.url = "left-navbar.html";
	$scope.url1 = "rightLogin.html";
	$scope.url2 = "s-top-navbar.html";
	$scope.url3 = "footer.html";
})
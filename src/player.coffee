staticPrepLocator = angular.module 'staticPrepLocator', ['ngSanitize']

staticPrepLocator.controller "staticPrepLocatorCtrl", ($scope) ->

	$scope.input = ''
	$scope.output = ''

	$scope.findText = ->

		replacer = (string, p1, n, s) ->
			return '<span class="bee">'+string+'</span>'

		pattern = new RegExp /(\b(about|above|according to|across|after|against|ahead of|along( with(out)?)?|among|apart from|around|as( (far|well) as| for| of| per| regards)?|aside from|at|because of|before|behind|below|beneath|beside(s)?|between|beyond|by( means of)?|close to|concerning|despite|down|due to|during|except( for|ing)?|(far )?from|for|in( accordance with|( addition)? to| (back|case|front|lieu|place|point|spite) of)?|inside( of)?|instead of|into|left of|(un)?like|near( to)?|next( to)?|of(f)?|on( (account|behalf|top) of| to)?|onto|out( from| of|side( of)?)?|over|owing to|past|prior to|pursuant to|regarding|regardless of|right of|round|since|subsequent to|thanks to|that of|through(out)?|till|to(ward)?|under(neath)?|until|up( to|on)?|with( (regard(s)?|respect(s)?) to|in|out)?)\b)/gi

		replaced = $scope.input.replace pattern, replacer

		$scope.output = replaced

	$scope.resetText = ->
		$scope.input = ''
		$scope.output = ''
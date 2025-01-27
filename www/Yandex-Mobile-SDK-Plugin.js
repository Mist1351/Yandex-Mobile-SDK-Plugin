cordova.define("cordova-plugin-fullscreen.AndroidFullScreen", function(require, exports, module) {
(function(window, undefined)
{
	'use strict';

	var YandexMobileSDK =
	{
		isSupported: function(successFunction, errorFunction)
		{
      cordova.exec(successFunction, errorFunction, 'Yandex-Mobile-SDK-Plugin', 'coolMethod', [])
		},
	};
	
	cordova.addConstructor(function() 
	{
		window.YandexMobileSDK = YandexMobileSDK;
		return window.YandexMobileSDK;
	});
	
})(window);

});

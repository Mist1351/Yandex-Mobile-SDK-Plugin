cordova.define("cordova-plugin-yandex-mobile-sdk.YandexMobileSDK", function(require, exports, module) {
(function(window, undefined)
{
	'use strict';

	var YandexMobileSDK =
	{
		isSupported: function(successFunction, errorFunction)
		{
      cordova.exec(successFunction, errorFunction, 'YandexMobileSDK', 'coolMethod', [])
		},
	};
	
	cordova.addConstructor(function() 
	{
		window.YandexMobileSDK = YandexMobileSDK;
		return window.YandexMobileSDK;
	});
	
})(window);

});

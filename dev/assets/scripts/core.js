var _ua = navigator.userAgent.toLowerCase(),
		_IE, _IEVer,
		_Chrome, _ChromeVer,
		_Firefox, _FirefoxVer,
		_Safari, _SafariVer,
		_Opera, _OperaVer,
		_iPhone, _iPad, _iPod, _iOSVer,
		_Android, _AndroidMobile, _AndroidTablet, _AndroidVer;
// ブラウザ(デスクトップ)
if(_ua.indexOf('msie') != -1) {
	_IE = true;
	_ua.match(/msie (\d+\.\d)/);
	_IEVer = parseFloat(RegExp.$1);
}else if(_ua.indexOf('trident') != -1){
	_IE = true;
	_ua.match(/rv:(\d+\.\d)/);
	_IEVer = parseFloat(RegExp.$1);
}else if(_ua.indexOf('chrome') != -1) {
	_Chrome = true;
	_ua.match(/chrome[\/ ]?(\d+\.\d+)/);
	_ChromeVer = parseFloat(RegExp.$1);
}else if(_ua.indexOf('firefox') != -1) {
	_Firefox = true;
	_ua.match(/firefox[\/ ]?(\d+\.\d+)/);
	_FirefoxVer = parseFloat(RegExp.$1);
}else if(_ua.indexOf('opera') != -1) {
	_Opera = true;
	_ua.match(/opera[\/ ]?(\d+\.\d+)/);
	_OperaVer = parseFloat(RegExp.$1);
}else if(_ua.indexOf('safari') != -1) {
	_Safari = true;
	_ua.match(/version[\/ ]?(\d+\.\d+)/);
	_SafariVer = parseFloat(RegExp.$1);
}
// ブラウザ(モバイル)
if(_ua.indexOf('iphone') != -1) {
	_iPhone = true;
	_ua.match(/iphone os (\d+)_(\d+)/);
	_iOSVer = RegExp.$1*1 + RegExp.$2*0.1;
}else if(_ua.indexOf('ipad') != -1) {
	_iPad = true;
	_ua.match(/cpu os (\d+)_(\d+)/);
	_iOSVer = RegExp.$1*1 + RegExp.$2*0.1;
}else if(_ua.indexOf('ipd') != -1) {
	_iPod = true;
	_ua.match(/os (\d+)_(\d+)/);
	_iOSVer = RegExp.$1*1 + RegExp.$2*0.1;
}else if(_ua.indexOf('android') != -1) {
	_Android = true;
	_ua.match(/android (\d+\.\d)/);
	_AndroidVer = parseFloat(RegExp.$1);
	if(_ua.indexOf('mobile') != -1) {
		_AndroidMobile = true;
	}else {
		_AndroidTablet = true;
	}
}
var ua = {
	// 振り分け
	isIE: !!_IE,
	isIE6: (_IEVer == 6.0),
	isIE7: (_IEVer == 7.0),
	isIE8: (_IEVer == 8.0),
	isIE9: (_IEVer == 9.0),
	isIE10: (_IEVer == 10.0),
	isIE11: (_IEVer == 11.0),
	isChrome: (!!_Chrome),
	isFirefox: (!!_Firefox),
	isOpera: (!!_Opera),
	isSafari: (!!_Safari),
	isMobile: (!!_iPhone || !!_iPod || !!_AndroidMobile),
	isTablet: (!!_iPad || !!_AndroidTablet),
	// バージョン
	verIE: _IEVer,
	verFireFox : _FirefoxVer,
	verChrome : _ChromeVer,
	verSafari : _SafariVer,
	verOpera : _OperaVer,
	verAndroid : _AndroidVer,
	veriOS: _iOSVer
}
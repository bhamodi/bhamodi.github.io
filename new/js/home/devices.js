"use strict";
$(document).ready(function() {
	if(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$('#home').css('display','none');
		$('#wrapper_mbYTP_bgndVideo').css('display','none');
		$('#homedevice').css('display','block');
	}
});
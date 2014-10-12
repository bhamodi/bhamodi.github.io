"use strict";

$(document).ready(function() {
	// /Android|AppleWebKit|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	if(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$('#home').css('display','none');
		$('#wrapper_mbYTP_bgndVideo').css('display','none');
		$('#homedevice').css('display','block');
	}
});
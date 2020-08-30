jQuery(document).ready(function() {

	var QRBox	  =	$('#QRBox'),
	    MainBox	  =	$('#MainBox'),
	    PayPal	  =	$('#PayPal'),
	    PayPalUrl = window.config.Donate.paypal,
	    BitcoinQR =	window.config.Donate.bitcoin,
	    AliPayQR  =	window.config.Donate.alipay,
	    WeChanQR  =	window.config.Donate.wechat;

	// 初始化PayPal
	if (PayPal.length > 0) {
		var content = '<a href="javascript:;" target="_self">PayPal</a>';
		if (PayPalUrl) {
			content = '<a href="' + PayPalUrl + '" target="_blank">PayPal</a>';
		}
		PayPal.append(content);
	}

	function showQR(QR) {
		if (QR) {
			MainBox.css('background-image', 'url(' + QR + ')');
			$('#DonateText, #DonateBox, #Github').addClass('blur');
			QRBox.fadeIn(300, function(argument) {
				MainBox.addClass('showQR');
			});
		}
	}

	$('#DonateBox > li').click(function(event) {
		var thisID = $(this).attr('id');
		if (thisID === 'Bitcoin') {
			showQR(BitcoinQR);
		} else if (thisID === 'AliPay') {
			showQR(AliPayQR);
		} else if (thisID === 'WeChat') {
			showQR(WeChanQR);
		}
	});

	MainBox.click(function(event) {
		MainBox.removeClass('showQR').addClass('hideQR');
		setTimeout (function(a) {
			QRBox.fadeOut(300, function(argument) {
				MainBox.removeClass('hideQR');
			});
			$('#DonateText, #DonateBox, #Github').removeClass('blur');
		}, 600);

	});
});
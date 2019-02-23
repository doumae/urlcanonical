console.log('addListener');
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

    console.log(msg.action);

    if (msg.action === 'canonicalurl'){

		var title = msg.title;
		var url = msg.url;
		
		// link rel=canonical
		if ($('link[rel=canonical]').attr('href')){
			url = $('link[rel=canonical]').attr('href');
		}
		
		var ret = {};
		ret.title = title;
		ret.url = url;
		
	    sendResponse(ret);
	    return true;
    }

});



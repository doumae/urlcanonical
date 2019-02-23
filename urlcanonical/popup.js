$(function() {
	
    chrome.tabs.query({
    	currentWindow: true,
        active: true
    }, function(tab) {

		popupRefresh({title: tab[0].title, url: tab[0].url});

        chrome.tabs.sendMessage(tab[0].id, {action: "canonicalurl", title: tab[0].title, url: tab[0].url}, function(response) {
			popupRefresh(response);
        });
    });
    
    function popupRefresh (msg){

			$('#title').text(msg.title);
			$('#url').text(msg.url);
			$('#buffer').text(msg.title + "\n" + msg.url);
    
    }

    $('#btn-text').click(function(){
        console.log('HTML');
        $('#buffer').text($('#url').text() + "\n"  + $('#title').text());
    });

    $('#btn-html').click(function(){
        console.log('HTML');
        $('#buffer').text("<a href=\x22" + $('#url').text() + "\x22>"  + $('#title').text() + "</a>");
    });

    $('#btn-markdown').click(function(){
        console.log('markdown');
        $('#buffer').text("[" + $('#title').text() + "\]("  + $('#url').text() + ")");
    });
    
});


new ClipboardJS('.btn');

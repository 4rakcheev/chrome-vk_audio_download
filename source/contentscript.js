var aList=[];
var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};

// Event listener
document.addEventListener('RW759_connectExtension', function(e) {
    // e.detail contains the transferred data (can be anything, ranging
    // from JavaScript objects to strings).
    // Do something, for example:
    aList=e.detail;
	//console.log(aList[0]);
	//console.log(aList[0][0]);
	//console.log(aList[0][1]);
	init();
});
var aIDList=[];
function init() {
	for (var i=0; i<aList.length; i++) {
		var id="audio" + aList[i][0] + "_" + aList[i][1];
		//console.log(id);
		//console.log(document.getElementById(id));
		//console.log(document.getElementById(id).getElementsByClassName('actions')[0]);
		//var div = document.getElementById(id).getElementsByClassName('actions')[0];
		var div = document.getElementById(id);
		//console.log(div);
		if (div) {
			var act = div.getElementsByClassName('actions')[0];
			var uri=aList[i][2];
			//console.log(act);
			var dwn="<div class=\"audio_remove_wrap fl_r\" onmouseover=\"Audio.rowActive(this, 'Download', [9, 5, 0]);\" onmouseout=\"Audio.rowInactive(this);\" onclick=\"downloadURI('" + uri + "', 'ggg');\" id=\"remove%aid\" style=\"opacity: 0.4;\"><div class=\"audio_remove\"></div>";
			act.innerHTML = act.innerHTML + dwn;
		}

	}
}
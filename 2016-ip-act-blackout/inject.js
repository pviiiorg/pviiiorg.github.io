(function() {
	if (typeof window.postMessage != 'function') return;
	var i = document.body.appendChild(document.createElement('iframe'));
	i.setAttribute('allowTransparency', 'true');
	i.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 2147483647;';
	i.src = 'https://pviii.org/2016-ip-act-blackout/full.html';
	window.addEventListener('message', handler);
	function handler(e) {
		if (e.data === '__ip_act_iframe_close') {
			i.parentNode.removeChild(i);
			window.removeEventListener('message', handler);
		}
	}
}());

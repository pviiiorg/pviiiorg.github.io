(function() {
	if (typeof window.postMessage != 'function') return;
	var i = document.documentElement.appendChild(document.createElement('iframe'));
	var s = document.getElementsByTagName('script');
	var page = getOp('page') || 'full.html';
	var height = getOp('height') || '100%';
	function getOp(n) {
		return s[s.length - 1].getAttribute('data-' + n);
	}
	i.setAttribute('allowTransparency', 'true');
	i.style = 'position: fixed; top: 0; left: 0; width: 100%; z-index: 2147483647;';
	i.src = 'https://pviii.org/ipablackout/pages/' + page;
	i.style.height = height;
	window.addEventListener('message', handler);
	function handler(e) {
		if (e.data === '__ip_act_iframe_close') {
			i.parentNode.removeChild(i);
			window.removeEventListener('message', handler);
		}
	}
}());

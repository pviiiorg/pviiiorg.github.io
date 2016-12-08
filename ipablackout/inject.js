(function() {

	var container = document.documentElement.insertBefore(
		document.createElement('div'),
		document.documentElement.firstChild
	);
	var i = container.appendChild(document.createElement('iframe'));
	var s = document.getElementsByTagName('script');
	var page = getOp('page') || 'v2.html';
	var height = getOp('height') || '100%';

	if (getOp('exitable')) {
		var closeButton = container.appendChild(document.createElement('button'));
		closeButton.style = '\
			padding: 10px;\
			font-size: 20px;\
			line-height: 1em;\
			background: black;\
			color: white;\
			border: 2px solid white;\
			font-size: 1.3em;\
			cursor: pointer;\
			position: fixed;\
			top: 1em; right: 1em;\
			border-radius: 3px;\
		';
		closeButton.innerHTML = 'close banner';
		closeButton.onclick = function() {
			container.parentNode.removeChild(container);
		};
	}

	function getOp(n) {
		var o = s[s.length - 1].getAttribute('data-' + n);
		return o === '' || o;
	}

	i.setAttribute('allowTransparency', 'true');
	i.setAttribute('frameborder', '0');

	container.style = '\
		height: 100vh;\
		width: 100%;\
	';

	i.style = 'width:100%;height:100%;border:none;';
	i.src = 'https://pviii.org/ipablackout/pages/' + page;
	i.style.height = height;
}());

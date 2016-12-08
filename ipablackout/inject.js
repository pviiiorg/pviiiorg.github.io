(function() {

	var container = document.documentElement.insertBefore(
		document.createElement('div'),
		document.documentElement.firstChild
	);
	var i = container.appendChild(document.createElement('iframe'));
	var s = document.getElementsByTagName('script');
	var page = getOp('page') || 'v2.html';
	var height = getOp('height') || '100vh';
	var exitable = getOp('exitable');

	if (exitable) {
		var closeButton = container.insertBefore(
			document.createElement('button'),
			container.firstChild
		);
		closeButton.style = '\
			padding: 4px;\
			font-size: 13px;\
			line-height: 15px;\
			background: black;\
			color: #CCC;\
			width:100%;\
			cursor: pointer;\
			border: none;\
			text-align: right;\
			background: repeating-linear-gradient(45deg,#000,#000 10px,#222 10px,#222 20px);\
		';
		closeButton.innerHTML = 'close banner [x]';
		var closeButtonBase = container.appendChild(closeButton.cloneNode(true));
		closeButtonBase.style.position = 'absolute';
		closeButtonBase.style.bottom = '0';
		closeButtonBase.style.left = '0';
		closeButton.onclick = closeButtonBase.onclick = function() {
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
		position: relative;\
		height: 100vh;\
		width: 100%;\
	';

	i.style = 'width:100%;border:none;';
	i.style.height = exitable ? 'calc(100% - 30px)' : '100%';
	i.src = 'https://pviii.org/ipablackout/pages/' + page;
	container.style.height = height;
}());

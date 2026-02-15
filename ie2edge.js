/**
 * https://github.com/bddjr/ie2edge
 * @license Unlicense
 */
/(Trident|MSIE)/.test(navigator.userAgent) && (function () {
	try {
		var i = document.createElement('iframe')
		i.setAttribute('style', 'display:none')
		i.setAttribute('src', 'microsoft-edge:' + location.href)
		if (document.body) {
			document.body.appendChild(i)
		} else {
			var t = setInterval(function () {
				if (document.body) {
					clearInterval(t)
					document.body.appendChild(i)
				}
			})
		}
	} catch (e) {
		console.error(e)
	}
})()
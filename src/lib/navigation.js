(function (navigation) {

	window.addEventListener('hashchange', function(e) {
		hashChanged();
	});

	document.addEventListener('click', function (e) {
		var target = e.target;
		if (target.localName === "a" && target.href === window.location.href) {
			setHash(target.hash)
		}
	})

	var setHash = function (hash) {
		history.pushState(null, window.title, hash)
		hashChanged();
	}

	var eventListeners = [];
	var onHashChange = function(fn) {
		eventListeners.push(fn);
	}

	var hashChanged = function() {
		forEach(eventListeners, function(fn) {
			fn(window.location.hash);
		})
	}

	navigation.setHash = setHash;
	navigation.onHashChange = onHashChange;

}(window.navigation = window.navigation || {}));
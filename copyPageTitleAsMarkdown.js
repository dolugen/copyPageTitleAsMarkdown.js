javascript: (() => {
	const title = document.getElementsByTagName('title')[0].innerText;
	const markdown = `[${title}](${document.URL})`;
	navigator.clipboard.writeText(markdown).then(function() {
	  console.log('Async: Copying to clipboard was successful!');
	}, function(err) {
	  console.error('Async: Could not copy text: ', err);
	});
})();

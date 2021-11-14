export default {
	init() {
		const cursor = document.querySelector('.js-cursor');

		if (cursor) {
			document.addEventListener('mousemove', e => {
				cursor.setAttribute("style", "top: " + (e.pageY + 16) + "px; left: " + (e.pageX + 10) + "px;")
			});
		}
	},
}
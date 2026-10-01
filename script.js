const yearElement = document.getElementById("year");

if (yearElement) {
	yearElement.textContent = new Date().getFullYear();
}

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
	menuToggle.addEventListener("click", () => {
		mainNav.classList.toggle("active");
	});

	mainNav.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => {
			mainNav.classList.remove("active");
		});
	});
}

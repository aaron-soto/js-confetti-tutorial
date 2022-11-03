const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const animate = () => {
	requestAnimationFrame(animate);
	// Erase everything on canvas so next frame can be drawn
	c.clearRect(0, 0, canvas.width, canvas.height);

	c.fillStyle = 'black';
	c.fillRect(100, 200, 50, 150);
};

animate();

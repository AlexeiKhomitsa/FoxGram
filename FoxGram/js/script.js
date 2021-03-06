const img = document.querySelectorAll(".like__img");


const likeImg = 'https://res.cloudinary.com/intellectfox/image/upload/v1629752958/fe/foxgram/posts/like-filled_zurlii.svg';
const noLikeImg = 'https://res.cloudinary.com/intellectfox/image/upload/v1629752957/fe/foxgram/posts/like_xw2apm.svg';


img.forEach(btn => {
	btn.addEventListener('click', (event) => {

		const counterEl = event.target.parentElement.querySelector('.counter_likes');
		const counter = +counterEl.textContent;

		if (event.target.src === likeImg) {
			event.target.src = noLikeImg;
			counterEl.textContent = counter - 1;
		} else {
			event.target.src = likeImg;
			counterEl.textContent = counter + 1;
		}
	})
});




const img = document.querySelectorAll(".like__img");
// const counterLikes = document.querySelectorAll('.counter');


const likeImg = 'http://127.0.0.1:5500/img/posts/icons_for_posts/like-filled_zurlii.svg';
const noLikeImg = 'http://127.0.0.1:5500/img/posts/icons_for_posts/like_xw2apm.svg';


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




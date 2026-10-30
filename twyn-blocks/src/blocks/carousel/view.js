import EmblaCarousel from "embla-carousel";

const emblaNodes = document.querySelectorAll(".wp-block-twyn-carousel");

emblaNodes.forEach((emblaNode) => {
	const jsonOptionString = emblaNode.dataset?.twynCarouselOptions;

	const OPTIONS = jsonOptionString ? JSON.parse(jsonOptionString) : {};

	const viewportNode = emblaNode.querySelector(
		".wp-block-twyn-carousel-viewport",
	);

	const emblaApi = EmblaCarousel(viewportNode, OPTIONS);
});

// const prevBtn = emblaNode.querySelector(".embla__button--prev");
// const nextBtn = emblaNode.querySelector(".embla__button--next");
// const dotsNode = document.querySelector(".embla__dots");

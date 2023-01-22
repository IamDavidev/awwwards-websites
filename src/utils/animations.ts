import { animate } from 'motion';

export function fadeIn(el: HTMLElement): void {
	animate(el, { opacity: [0, 1] }, { duration: 2 });
}

export function fadeOut(el: HTMLElement): void {
	animate(el, { opacity: [1, 0] }, { duration: 2 });
}

export const animateFadeIn = (element: HTMLElement): void => {
	fadeIn(element);
};

export function animateAllFadeIn(elements: NodeListOf<HTMLElement>): void {
	elements.forEach(element => {
		fadeIn(element);
	});
}

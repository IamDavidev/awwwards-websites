import {
	fadeIn,
	slideBottomWithFadeIn,
	slideInWithFadeIn,
} from '@utils/animations';
import { $, $$ } from '@utils/domSelectors';
import { inView, scroll } from 'motion';

const $nabar = $('.nav') as HTMLElement;

const $headerTitle = $('.header-title') as HTMLElement;
const $headerVideo = $('.header-video') as HTMLElement;
const $modal = $('.modal') as HTMLElement;

const $servizi = $('.ani-servizi') as HTMLElement;

const $sectionsDescription = $$('.container-des');

const $wrapperImg = $('.ani-ind') as HTMLElement;
const $imgParallax = $('.parallax-img') as HTMLElement;

const $gridNumberItme = $$('.ani-grid-number');

fadeIn($nabar);
slideInWithFadeIn($headerTitle);
fadeIn($headerVideo);
fadeIn($modal);

$sectionsDescription.forEach(section => {
	inView(section, (_inf): void => {
		slideInWithFadeIn(section);
	});
});

inView($servizi, (_inf): void => {
	slideBottomWithFadeIn($servizi);
});

$gridNumberItme.forEach(item => {
	inView(item, (_inf): void => {
		slideBottomWithFadeIn(item);
	});
});

scroll(
	({ y }) => {
		const yProgress = Number(y.progress.toFixed(2));
		const valueTranslate = yProgress * -240;
		$imgParallax.style.transform = `translateY(${valueTranslate}px)`;
	},
	{
		offset: ['start end', '-50px -50px'],
		target: $wrapperImg,
	}
);

import {
	fadeIn,
	slideBottomWithFadeIn,
	slideInWithFadeIn,
} from '@utils/animations';
import { $ } from '@utils/domSelectors';
import { inView, scroll } from 'motion';

const $nabar = $('.nav') as HTMLElement;

const $headerTitle = $('.header-title') as HTMLElement;
const $headerVideo = $('.header-video') as HTMLElement;
const $modal = $('.modal') as HTMLElement;

const $servizi = $('.ani-servizi') as HTMLElement;

const $sectionDescription = $('.container-des') as HTMLElement;

const $wrapperImg = $('.ani-ind') as HTMLElement;
const $imgParallax = $('.parallax-img') as HTMLElement;
console.info('🚀 ~>  file: animations.ts:21 ~>  $imgParallax', $imgParallax);

fadeIn($nabar);
slideInWithFadeIn($headerTitle);
fadeIn($headerVideo);
fadeIn($modal);

inView($sectionDescription, (_inf): void => {
	slideInWithFadeIn($sectionDescription);
});

inView($servizi, (_inf): void => {
	slideBottomWithFadeIn($servizi);
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

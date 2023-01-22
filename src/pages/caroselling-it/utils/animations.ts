import {
	fadeIn,
	slideBottomWithFadeIn,
	slideInWithFadeIn,
} from '@utils/animations';
import { $ } from '@utils/domSelectors';
import { inView } from 'motion';

const $nabar = $('.nav') as HTMLElement;

const $headerTitle = $('.header-title') as HTMLElement;
const $headerVideo = $('.header-video') as HTMLElement;
const $modal = $('.modal') as HTMLElement;

const $servizi = $('.ani-servizi') as HTMLElement;

const $sectionDescription = $('.container-des') as HTMLElement;

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

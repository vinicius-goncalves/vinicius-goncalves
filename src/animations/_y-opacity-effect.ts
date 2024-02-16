import { createAnimation } from './animation-creator.js';

function applyYOpacityAnimation(target: HTMLElement, delay?: number, callback?: (target: HTMLElement) => void) {

    const keyframes: Array<Keyframe> = [
        { opacity: 0, transform: 'translateY(50px)' },
        { opacity: 1, transform: 'translateY(0)' },
    ];

    const options: KeyframeAnimationOptions = { duration: 600, delay, easing: 'ease-in-out' };
    createAnimation(target, keyframes, options, callback);
}

export default applyYOpacityAnimation;


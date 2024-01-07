import { createAnimation } from './utils.js';
function applyXNavbarTransition(target, delay) {
    const keyframes = [
        { opacity: 0, transform: 'translateX(-50px)' },
        { opacity: 1, transform: 'translateX(0)' }
    ];
    const options = {
        duration: 600,
        delay,
        easing: 'ease-in-out'
    };
    createAnimation(target, keyframes, options);
}
export default applyXNavbarTransition;

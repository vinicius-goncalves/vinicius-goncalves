import { createAnimation } from './utils.js';
function applyYOpacityAnimation(target, delay, callback) {
    const keyframes = [
        { opacity: 0, transform: 'translateY(50px)' },
        { opacity: 1, transform: 'translateY(0)' },
    ];
    const options = { duration: 600, delay, easing: 'ease-in-out' };
    createAnimation(target, keyframes, options, callback);
}
export default applyYOpacityAnimation;

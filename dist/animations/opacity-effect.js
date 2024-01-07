import { createAnimation } from './utils.js';
function applyYOpacityAnimation() {
    const yOpacityAnimation = createAnimation([
        { opacity: 0, transform: 'translateY(50px)' },
        { opacity: 1, transform: 'translate(0)' },
    ], { duration: 600 });
}

function createRawAnimation(keyframes, options) {
    return [keyframes, options];
}
function createAnimation(target, keyframes, options, callback) {
    if (target.classList.contains('visible-element')) {
        return;
    }
    const yOpacityAnimation = createRawAnimation(keyframes, options);
    const animation = target.animate.apply(target, yOpacityAnimation);
    animation.addEventListener('finish', () => {
        target.classList.add('visible-element');
        if (typeof callback !== 'undefined') {
            callback(target);
        }
    });
}
export { createRawAnimation, createAnimation };

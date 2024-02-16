function createRawAnimation(keyframes: Array<Keyframe>, options: KeyframeAnimationOptions): [ Array<Keyframe>, KeyframeAnimationOptions ] {
    return [ keyframes, options ];
}

function createAnimation(target: HTMLElement, keyframes: Array<Keyframe>, options: KeyframeAnimationOptions, callback?: (target: HTMLElement) => void) {

    if(target.classList.contains('visible-element')) {
        return;
    }

    const yOpacityAnimation = createRawAnimation(keyframes, options);

    const animation = target.animate.apply(target, yOpacityAnimation);

    animation.addEventListener('finish', (): void => {
        target.classList.add('visible-element');

        if(typeof callback !== 'undefined') {
            callback(target);
        }
    });
}

export { createRawAnimation, createAnimation }
export default { title: "Skin/Button/Tertiary" };

export const textOnly = () => `
<button class="btn btn--tertiary">Tertiary</button
`;

export const iconAndText = () => `
<button type="button" class="btn btn--tertiary">
    <span class="btn__cell">
        <svg class="icon icon--close-16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const disabled = () => `
<button type="button" class="btn btn--tertiary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--close-16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const partiallyDisabled = () => `
<button type="button" class="btn btn--tertiary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--close-16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const busy = () => `
<button class="btn btn--tertiary" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--spinner-24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`;

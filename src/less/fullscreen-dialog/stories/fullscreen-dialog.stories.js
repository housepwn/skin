export default { title: "Skin/Fullscreen Dialog" };

export const closeButton = () => `
<div aria-labelledby="fullscreen-dialog-title" aria-modal="true" class="fullscreen-dialog" role="dialog">
    <div class="fullscreen-dialog__window">
        <div class="fullscreen-dialog__header">
            <h2 id="fullscreen-dialog-title">Dialog Full</h2>
            <button class="icon-btn fullscreen-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="fullscreen-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const withFooter = () => `
<div aria-labelledby="fullscreen-dialog-title" aria-modal="true" class="fullscreen-dialog" role="dialog">
    <div class="fullscreen-dialog__window">
        <div class="fullscreen-dialog__header">
            <h2 id="fullscreen-dialog-title">Dialog Full</h2>
            <button class="icon-btn fullscreen-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="fullscreen-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
        <div class="fullscreen-dialog__footer">
            <button class="btn btn--primary">Submit</button>
            <button class="btn">Cancel</button>
        </div>
    </div>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <div aria-labelledby="fullscreen-dialog-title" aria-modal="true" class="fullscreen-dialog" role="dialog">
        <div class="fullscreen-dialog__window">
            <div class="fullscreen-dialog__header">
                <h2 id="fullscreen-dialog-title">Dialog Full</h2>
                <button class="icon-btn fullscreen-dialog__close" type="button" aria-label="Close Dialog">
                    <svg class="icon icon--close-16" aria-hidden="true">
                        <use href="#icon-close-16"></use>
                    </svg>
                </button>
            </div>
            <div class="fullscreen-dialog__main">
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            </div>
        </div>
    </div>
<div>
`;

export const backButton = () => `
<div aria-labelledby="fullscreen-dialog-title" aria-modal="true" class="fullscreen-dialog" role="dialog">
    <div class="fullscreen-dialog__window">
        <div class="fullscreen-dialog__header">
            <h2 id="fullscreen-dialog-title">Fullscreen Dialog</h2>
            <button class="icon-btn fullscreen-dialog__back" type="button" aria-label="Back">
                <svg class="icon icon--back" aria-hidden="true">
                    <use href="#icon-back"></use>
                </svg>
            </button>
        </div>
        <div class="fullscreen-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const secondaryButton = () => `
<div aria-labelledby="fullscreen-dialog-title" aria-modal="true" class="fullscreen-dialog" role="dialog">
    <div class="fullscreen-dialog__window">
        <div class="fullscreen-dialog__header">
            <h2 id="fullscreen-dialog-title">Fullscreen Dialog</h2>
            <button class="fake-link fullscreen-dialog__close" type="button">Reset</button>
        </div>
        <div class="fullscreen-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const textSpacing = () => `
<div aria-labelledby="fullscreen-dialog-title" aria-modal="true" class="fullscreen-dialog demo-a11y-text-spacing" role="dialog">
    <div class="fullscreen-dialog__window">
        <div class="fullscreen-dialog__header">
            <h2 id="fullscreen-dialog-title">Dialog Full</h2>
            <button class="icon-btn fullscreen-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close-16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="fullscreen-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
        <div class="fullscreen-dialog__footer">
            <button class="btn btn--primary">Submit</button>
            <button class="btn">Cancel</button>
        </div>
    </div>
</div>
`;

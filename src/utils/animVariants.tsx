export const fadeDownVariants = {
    initial: {
        y: -30,
        opacity: 0,
    },

    finish: {
        y: 0,
        opacity: 1,
    },
}

export const fadeUpVariants = {
    initial: {
        y: 30,
        opacity: 0,
    },

    finish: {
        y: 0,
        opacity: 1,
    },
}

export const blockFadeInVariants = {
    initial: {
        scale: 0.9,
        opacity: 0,
        transitionEnd: {
            display: "none",
        },
    },

    finish: {
        scale: 1,
        opacity: 1,
        display: "block",
    },
}

export const flexFadeInVariants = {
    initial: {
        scale: 0.9,
        opacity: 0,
        transitionEnd: {
            display: "none",
        },
    },

    finish: {
        scale: 1,
        opacity: 1,
        display: "flex",
    },
}

export const blockSimpleFade = {
    initial: {
        opacity: 0,
        transitionEnd: {
            display: "none",
        },
    },

    finish: {
        opacity: 1,
        display: "block",
    },
}

export const flexSimpleFade = {
    initial: {
        opacity: 0,
        transitionEnd: {
            display: "none",
        },
    },

    finish: {
        opacity: 1,
        display: "block",
    },
}

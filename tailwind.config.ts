import type { Config } from "tailwindcss"

import { ColorAlias, Colors, Font } from "./design-tokens/tokens"

export default {
    // corePlugins: {
    //     preflight: false,
    // },
    content: ["./index.html", "./src/**/*.{html,ts,tsx}", "./src/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                orange: {
                    ...Colors.orange,
                },

                red: {
                    ...Colors.red,
                },

                volcano: {
                    ...Colors.volcano,
                },

                gold: {
                    ...Colors.gold,
                },

                yellow: {
                    ...Colors.yellow,
                },

                lime: {
                    ...Colors.lime,
                },

                green: {
                    ...Colors.green,
                },

                cyan: {
                    ...Colors.cyan,
                },

                blue: {
                    ...Colors.blue,
                },

                geekblue: {
                    ...Colors.geekblue,
                },

                purple: {
                    ...Colors.purple,
                },

                magenta: {
                    ...Colors.magenta,
                },

                neutral: {
                    ...Colors.neutral,
                },

                primary: {
                    ...ColorAlias.primary,
                },

                success: {
                    ...ColorAlias.success,
                },

                warning: {
                    ...ColorAlias.warning,
                },

                error: {
                    ...ColorAlias.error,
                },

                "neutral-alias": {
                    ...ColorAlias["neutral-alias"],
                },
            },

            dropShadow: {
                "level-0": "",
                "level-1": "",
                "level-2": "",
                "level-3": "",
                "level-4": "",
                "level-5": "",
            },

            outlineColor: {
                default: Font.color["border-default"],
                secondary: Font.color["border-secondary"],
            },

            textColor: {
                ...Font.color,
            },

            borderRadius: {
                default: "",
            },
        },

        fontFamily: {
            sans: ["Comfortaa", "Arial"],
        },

        fontSize: {
            ...Font.size,
        },

        fontWeight: {
            ...Font.weight,
        },
    },
    plugins: [],
} satisfies Config

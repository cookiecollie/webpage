import type { Config } from "tailwindcss"

import { Colors, Font } from "./design-tokens/tokens"

export default {
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
            },
        },

        fontFamily: {
            sans: ["Fredoka", "Comfortaa", "Arial"],
        },

        fontSize: {
            ...Font.size,
        },

        fontWeight: {
            ...Font.weight,
        },

        textColor: {
            ...Font.color,
        },
    },
    plugins: [],
} satisfies Config

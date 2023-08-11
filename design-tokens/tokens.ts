export const Colors = {
    red: {
        "1": "#fff1f0",
        "2": "#ffccc7",
        "3": "#ffa39e",
        "4": "#ff7875",
        "5": "#ff4d4f",
        "6": "#f5222d",
        "7": "#cf1322",
        "8": "#a8071a",
        "9": "#820014",
        "10": "#5c0011",
    },

    volcano: {
        "1": "#fff2e8",
        "2": "#ffd8bf",
        "3": "#ffbb96",
        "4": "#ff9c6e",
        "5": "#ff7a45",
        "6": "#fa541c",
        "7": "#d4380d",
        "8": "#ad2102",
        "9": "#871400",
        "10": "#610b00",
    },

    orange: {
        "1": "#fff7e6",
        "2": "#ffe7ba",
        "3": "#ffd591",
        "4": "#ffc069",
        "5": "#ffa940",
        "6": "#fa8c16",
        "7": "#d46b08",
        "8": "#ad4e00",
        "9": "#873800",
        "10": "#612500",
    },

    gold: {
        "1": "#fffbe6",
        "2": "#fff1b8",
        "3": "#ffe58f",
        "4": "#ffd666",
        "5": "#ffc53d",
        "6": "#faad14",
        "7": "#d48806",
        "8": "#ad6800",
        "9": "#874d00",
        "10": "#613400",
    },

    yellow: {
        "1": "#feffe6",
        "2": "#ffffb8",
        "3": "#fffb8f",
        "4": "#fff566",
        "5": "#ffec3d",
        "6": "#fadb14",
        "7": "#d4b106",
        "8": "#ad8b00",
        "9": "#876800",
        "10": "#614700",
    },

    lime: {
        "1": "#fcffe6",
        "2": "#f4ffb8",
        "3": "#eaff8f",
        "4": "#d3f261",
        "5": "#bae637",
        "6": "#a0d911",
        "7": "#7cb305",
        "8": "#5b8c00",
        "9": "#3f6600",
        "10": "#254000",
    },

    green: {
        "1": "#f6ffed",
        "2": "#d9f7be",
        "3": "#b7eb8f",
        "4": "#95de64",
        "5": "#73d13d",
        "6": "#52c41a",
        "7": "#389e0d",
        "8": "#237804",
        "9": "#135200",
        "10": "#092b00",
    },

    cyan: {
        "1": "#e6fffb",
        "2": "#b5f5ec",
        "3": "#87e8de",
        "4": "#5cdbd3",
        "5": "#36cfc9",
        "6": "#13c2c2",
        "7": "#08979c",
        "8": "#006d75",
        "9": "#00474f",
        "10": "#002329",
    },

    blue: {
        "1": "#e6f4ff",
        "2": "#bae0ff",
        "3": "#91caff",
        "4": "#69b1ff",
        "5": "#4096ff",
        "6": "#1677ff",
        "7": "#0958d9",
        "8": "#003eb3",
        "9": "#002c8c",
        "10": "#001d66",
    },

    geekblue: {
        "1": "#f0f5ff",
        "2": "#d6e4ff",
        "3": "#adc6ff",
        "4": "#85a5ff",
        "5": "#597ef7",
        "6": "#2f54eb",
        "7": "#1d39c4",
        "8": "#10239e",
        "9": "#061178",
        "10": "#030852",
    },

    purple: {
        "1": "#f9f0ff",
        "2": "#efdbff",
        "3": "#d3adf7",
        "4": "#b37feb",
        "5": "#9254de",
        "6": "#722ed1",
        "7": "#531dab",
        "8": "#391085",
        "9": "#22075e",
        "10": "#120338",
    },

    magenta: {
        "1": "#fff0f6",
        "2": "#ffd6e7",
        "3": "#ffadd2",
        "4": "#ff85c0",
        "5": "#f759ab",
        "6": "#eb2f96",
        "7": "#c41d7f",
        "8": "#9e1068",
        "9": "#780650",
        "10": "#520339",
    },

    neutral: {
        "1": "#ffffff",
        "2": "#fafafa",
        "3": "#f5f5f5",
        "4": "#f0f0f0",
        "5": "#d9d9d9",
        "6": "#bfbfbf",
        "7": "#8c8c8c",
        "8": "#595959",
        "9": "#434343",
        "10": "#262626",
        "11": "#1f1f1f",
        "12": "#141414",
        "13": "#000000",
    },
}

export const ColorAlias = {
    primary: {
        bg: Colors.blue["1"],
        "bg-hover": Colors.blue["2"],
        border: Colors.blue["3"],
        "border-hover": Colors.blue["4"],
        hover: Colors.blue["5"],
        _: Colors.blue["6"],
        active: Colors.blue["7"],
        "text-hover": Colors.blue["5"],
        text: Colors.blue["6"],
        "text-active": Colors.blue["7"],
        disabled: Colors.blue[4],
    },

    success: {
        bg: Colors.green["1"],
        "bg-hover": Colors.green["2"],
        border: Colors.green["3"],
        "border-hover": Colors.green["4"],
        hover: Colors.green["4"],
        _: Colors.green["6"],
        active: Colors.green["7"],
        "text-hover": Colors.green["5"],
        text: Colors.green["6"],
        "text-active": Colors.green["7"],
    },

    warning: {
        bg: Colors.gold["1"],
        "bg-hover": Colors.gold["2"],
        border: Colors.gold["3"],
        "border-hover": Colors.gold["4"],
        hover: Colors.gold["4"],
        _: Colors.gold["6"],
        active: Colors.gold["7"],
        "text-hover": Colors.gold["5"],
        text: Colors.gold["6"],
        "text-active": Colors.gold["7"],
    },

    error: {
        bg: Colors.red["1"],
        "bg-hover": Colors.red["1"],
        border: Colors.red["2"],
        "border-hover": Colors.red["3"],
        hover: Colors.red["4"],
        _: Colors.red["5"],
        active: "#d9363e",
        "text-hover": Colors.red["4"],
        text: Colors.red["5"],
        "text-active": "#d9363e",
    },

    "neutral-alias": {
        text: {
            primary: "#000000E0",
            secondary: "#000000A6",
            tertiary: "#00000073",
            quaternary: "#00000040",
        },

        border: {
            primary: Colors.neutral["5"],
            secondary: Colors.neutral["4"],
        },

        fill: {
            primary: "#00000026",
            secondary: "#0000000f",
            tertiary: "#0000000a",
            quaternary: "#00000005",
        },

        bg: {
            container: Colors.neutral["1"],
            layout: Colors.neutral["3"],
        },
    },
}

export const Font = {
    size: {
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        md: "1.25rem", // 20px
        lg: "1.5rem", // 24px
        xl: "1.875rem", // 30px
        "2xl": "2.375rem", // 38px
        "3xl": "2.625rem", // 42px
    },

    weight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
    },

    color: {
        heading: ColorAlias["neutral-alias"].text.primary,
        normal: ColorAlias["neutral-alias"].text.primary,
        secondary: ColorAlias["neutral-alias"].text.secondary,
        tertiary: ColorAlias["neutral-alias"].text.tertiary,
        quaternary: ColorAlias["neutral-alias"].text.quaternary,
        disabled: ColorAlias["neutral-alias"].text.quaternary,

        "border-default": ColorAlias["neutral-alias"].border.primary,
        "border-secondary": ColorAlias["neutral-alias"].border.secondary,
        separator: "#0505050F",
        "layout-bg": Colors.neutral[3],
    },
}

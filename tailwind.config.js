const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",

            "dark-primary": "var(--color-dark-blue)",
            "dark-secondary": "var(--color-very-dark-blue)",
            "dark-text": "var(--color-white)",

            "light-primary": "var(--color-white)",
            "light-secondary": "var(--color-very-light-gray)",
            "light-text": "var(--color-very-dark-blue)",

            "dark-blue": "var(--color-dark-blue)",
            "very-dark-blue": "var(--color-very-dark-blue)",
            "very-dark-blue-alt": "var(--color-very-dark-blue-alt)",
            "dark-gray": "var(--color-dark-gray)",
            "very-light-gray": "var(--color-very-light-gray)",
            white: "var(--color-white)",
        },
        screens: {
            desktop: "1440px",
        },
        fontFamily: {
            sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                textWhite: "#fff",
                textDark: "#000",
                bgWhite: "#fff",
                bgDark: "#171717",
            }
        },
    },
    plugins: [],
}
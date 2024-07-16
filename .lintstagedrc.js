const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "src/**/*.{js,jsx,ts,tsx}": [buildEslintCommand, "prettier --write"],
  "src/**/*.{spec,test}.{js,jsx,ts,tsx}": [
    buildEslintCommand,
    "prettier --write",
  ],
};

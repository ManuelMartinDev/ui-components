module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  typescript: {
    // Disable docgeneration due to TypeScript 2.3.x incompatability.
    // TODO: Fix this once https://github.com/styleguidist/react-docgen-typescript/issues/356
    // is addressed
    reactDocgen: "none",
  },
};

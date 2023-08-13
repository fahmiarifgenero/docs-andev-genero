const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  flexSearch: {
    codeblocks: false,
  },
});

module.exports = withNextra();

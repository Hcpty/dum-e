export default {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "last 2 versions, not dead, > 0.2%",
        bugfixes: true,
        modules: false,
        useBuiltIns: false,
      },
    ],
  ],
};

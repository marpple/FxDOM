const presets = [
  [
    "@babel/env",
    {
      targets: {
        ie: 11,
      },
      useBuiltIns: "usage",
      corejs: '3.8',
    },
  ],
];

module.exports = { presets };

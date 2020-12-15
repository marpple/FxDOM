module.exports = (api) => {
  const BABEL_ENV = api.env();
  const targets =
    BABEL_ENV === "modern"
      ? ">= 2% and last 2 versions"
      : { ie: 11 };

  const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
      },
    ],
  ];

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets,
        },
      ],
    ],
    plugins,
  };
};

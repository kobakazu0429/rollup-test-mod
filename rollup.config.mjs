import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

const create = (input, output, plugins) => {
  const config = /** @type {import('rollup').RollupOptions} */ ({
    input,

    output: {
      file: `dist/${output}.mjs`,
      format: "es",
      sourcemap: true,
    },

    plugins,
  });

  return config;
};

const setCreate = (input, prefix) => {
  return [
    create(input, prefix + "only-node-resolve", [nodeResolve()]),
    create(input, prefix + "with-terser", [
      nodeResolve(),
      terser({ format: { comments: "all", beautify: true } }),
    ]),
    create(input, prefix + "with-terser-passes1", [
      nodeResolve(),
      terser({
        compress: { passes: 1 },
        format: { comments: "all", beautify: true },
      }),
    ]),
    create(input, prefix + "with-terser-passes2", [
      nodeResolve(),
      terser({
        compress: { passes: 2 },
        format: { comments: "all", beautify: true },
      }),
    ]),
    create(input, prefix + "with-terser-passes3", [
      nodeResolve(),
      terser({
        compress: { passes: 3 },
        format: { comments: "all", beautify: true },
      }),
    ]),
    create(input, prefix + "with-terser-passes6", [
      nodeResolve(),
      terser({
        compress: { passes: 6 },
        format: { comments: "all", beautify: true },
      }),
    ]),
  ];
};

export default /** @type {Array<import('rollup').RollupOptions>} */ ([
  ...setCreate("index.mjs", "0_base"),
  ...setCreate("index-min.mjs", "1_min"),
  ...setCreate("index-min-not-determine.mjs", "2_min_not-determine"),
  ...setCreate("index-not-determine.mjs", "3_not-determine"),
]);

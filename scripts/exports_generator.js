import fs from "fs";
import {
  filterL,
  flatten,
  go,
  map,
  mapL,
  reduce,
  takeAllC,
  zipL,
} from "fxjs/es";

const readFile = (path, encoding = "utf-8") =>
  new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, text) => {
      if (err) reject(err);
      else resolve(text);
    });
  });

const writeFile = (path, data, encoding = "utf-8") =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, encoding, (err) => {
      if (err) reject(err);
      else resolve(true);
    });
  });

const readDir = (path) =>
  new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) reject(err);
      else resolve(files);
    });
  });

const DIR_NAMES = ["src", "src/_internal"];
const root_dir_paths = map((dn) => `./${dn}`, DIR_NAMES);

const default_sub_path_exports = {
  ".": "./index.js",
  "./es": "./es/index.js",
};

(async function () {
  const fns = await go(
    root_dir_paths,
    mapL(readDir),
    mapL(filterL(file_name => file_name.endsWith('.js'))),
    zipL(DIR_NAMES),
    takeAllC
  );
  const package_json_object = JSON.parse(await readFile("./package.json"));
  const function_sub_path_exports = go(
    fns,
    mapL(([dir_name, file_names]) =>
      mapL((fn) => {
        const source_file = `${dir_name.includes('_internal') ? `_internal/${fn}` : fn}`;
        return {
          [`./es/${source_file}`]: `./es/${source_file}`,
          [`./${source_file}`]: `./${source_file}`,
        };
      }, file_names)
    ),
    flatten,
    reduce((acc, field) => Object.assign(acc, field))
  );

  await writeFile(
    "./package.json",
    JSON.stringify(
      Object.assign(package_json_object, {
        exports: {
          ...default_sub_path_exports,
          ...function_sub_path_exports,
        },
      })
    )
  );
})();

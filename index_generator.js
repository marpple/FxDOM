import fs from "fs";
import { go, insert, last, pipe, split, join, hi } from "fxjs2";
import readline from "readline";

const outputStream = fs.createWriteStream("./index.js");

const readAndWrite = (
  outputStream,
  { source_dir = "./src", prefix = "", postfix = "" }
) =>
  new Promise((res, rej) => {
    const inputStream = fs.createReadStream(`${source_dir}/index.js`);
    const rl = readline.createInterface({
      input: inputStream,
    });

    rl.on("line", (line) =>
      outputStream.write(
        line
          .replace(/default as \w+/g,
            pipe(
              split(" "),
              last,
              (func_name) => `default as ${prefix}${func_name}${postfix}`
            )
          )
          .replace(/"\.\/\w+\.js"/g,
            pipe(
              split("/"),
              insert(1, "src"),
              join("/")
            )
          )
          .concat("\n")
      )
    )
      .on("close", (_) => {
        outputStream.write("\n");
        res();
      })
      .on("error", rej);
  });

const writeALine = (stream, text) =>
  new Promise((res) => {
    stream.write(text, res);
  });

go(
  writeALine(outputStream, 'import * as $ from "./src/index.js";\n'),
  (_) => writeALine(outputStream, "export default $;\n"),
  (_) => readAndWrite(outputStream, { prefix: "$" }),
  (_) => outputStream.end()
);

import fs from "fs";
import readline from "readline";
import { go, pipe, split, last } from "fxjs2";

const outputStream = fs.createWriteStream("./index.js");

const readAndWrite = (
  outputStream,
  { source_dir = "./", prefix = "", postfix = "" }
) =>
  new Promise((res, rej) => {
    const inputStream = fs.createReadStream(`${source_dir}/_index.js`);
    const rl = readline.createInterface({
      input: inputStream,
    });

    rl.on("line", (line) =>
      outputStream.write(
        line
          .replace(
            /default as \w+/g,
            pipe(
              split(" "),
              last,
              (func_name) => `default as ${prefix}${func_name}${postfix}`
            )
          )
          .concat("\n")
          .replace(/\.\//, `${source_dir}`)
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
  writeALine(outputStream, 'import * as $ from "./_index.js";\n'),
  (_) => writeALine(outputStream, "export default $;\n"),
  (_) => readAndWrite(outputStream, { prefix: "$" }),
  (_) => outputStream.end()
);

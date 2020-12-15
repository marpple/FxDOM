import fs from "fs";
import { go, last, pipe, split } from "fxjs/esm";
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
  null,
  () => readAndWrite(outputStream, { prefix: "$" }),
  () => outputStream.end()
);

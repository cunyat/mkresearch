const csvConf = require("../config/csv");
const parser = require("csv-parser");
const fs = require("fs");

const parseBuiltWith = (filePath) => {
  return _parseFile(csvConf.builtwith, filePath);
};

const parseDuxSoup = (filePath) => {
  return _parseFile(csvConf.duxsoup, filePath);
};

const _parseFile = (options, filePath) => {
  const opt = {
    mapHeaders: ({ header }) => options.mapping[header],
    mapValues: ({ header, value }) =>
      options.fieldParse[header]
        ? options.fieldParse[header](value)
        : value === "" || value === " "
        ? undefined
        : value,
    ...options.options,
  };

  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(parser(opt))
      .on("data", (row) => results.push(row))
      .on("end", () => resolve(results))
      .on("error", (e) => reject(e));
  });
};

module.exports = { parseBuiltWith, parseDuxSoup };

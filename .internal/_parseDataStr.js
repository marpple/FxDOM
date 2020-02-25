export default data_str =>
  JSON.parse(
    data_str
      .replace(/\(2\)/g, '"')
      .replace(/\(1\)/g, "'")
      .replace(/\(\)/g, "(")
  );

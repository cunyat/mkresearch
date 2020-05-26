const csvParser = require("../../src/services/csvParser");
const path = require("path");

describe("Builtwith Parser", () => {
  let result;

  beforeAll((done) =>
    csvParser
      .parseBuiltWith(path.join(__dirname, "data/builtwith.csv"))
      .then((r) => {
        result = r;
        done();
      })
  );

  test("it should return a list of 3 objects", () => {
    expect(result.length).toBe(3);
  });

  test("it should map to correct properties", () => {
    expect(result[0]).toHaveProperty("domain");
  });

  // sample [1] : "ph:+34-935-392593;+34-911-425229"
  // sample [2]: "ph:"
  test("it should build a list of phone numbers", () => {
    expect(result[1].phoneNumbers).toHaveLength(2);
    expect(result[2].phoneNumbers).toHaveLength(0);
  });

  // sample [1] : "ph:+34-935-392593;+34-911-425229"
  test("it should format properly phone numbers", () => {
    expect(result[1].phoneNumbers).toContain("0034935392593");
    expect(result[1].phoneNumbers).toContain("0034911425229");
  });

  // sample [2]: "contact@icantriathlon.com;help@velitessport.com"
  test("it should build a list of emails", () => {
    expect(result[2].emails).toHaveLength(2);
    expect(result[1].emails).toHaveLength(1);
  });

  // sample [0] : ""
  test("it should not include any empty email", () => {
    expect(result[2].emails).not.toContain("");
    expect(result[0].emails).not.toContain("");
  });

  // sample : [10, 50, 0]
  test("it should fomat properly techSpends", () => {
    expect(result[0].techSpends).toBe(10);
    expect(result[2].techSpends).toBe(0);
  });
});

describe("Duxsoup Parser", () => {});

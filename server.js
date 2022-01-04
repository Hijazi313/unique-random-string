// @ RETURN RANDOM GENERATED CHARACTERS
/**
 *
 * @param {option= {type: "mix" || "string" || "numbers", length:10}} options
 *
 * @returns string | number
 * @description Package to Get Random Generated numbers or strings with and without special characters of your  desired size
 */
module.exports = (options = { type: "mix", length: 20 }) => {
  if (!options) {
    throw new Error("Missing Options");
  }

  if (
    !options.type ||
    !options.type === "mix" ||
    !options.type === "string" ||
    !options.type === "numbers"
  ) {
    throw new Error("Missing Option type");
  }

  const randOmvalues = (vals) => {
    let i = 0;
    let str = "";
    while (i < options.length) {
      str += vals.charAt(Math.floor(Math.random() * vals.length));
      i++;
    }
    return str;
  };
  if (options.type === "mix") {
    const mix =
      "ABCDEFGHIJKLMNOPQRSabcdefghijklmnopqrstuvwxxyz0123456789-~!@#$&*?";

    const v = randOmvalues(mix);
    return v;
  }
  if (options.type === "string") {
    const string = "ABCDEFGHIJKLMNOPQRSabcdefghijklmnopqrstuvwxxyz";
    const v = randOmvalues(string);
    return v;
  }

  if (options.type === "numbers") {
    const nums = "1234567890";
    const v = randOmvalues(nums);
    return ~~v;
  }
};

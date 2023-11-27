const config = require("../../photo-grid.json");

const genericIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'></circle><line x1='2' y1='12' x2='22' y2='12'></line><path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'></path></svg>";

const getIcon = function (name) {
  if (!name) return genericIcon;

  name = name.charAt(0).toUpperCase() + name.slice(1);

  // see: https://github.com/simple-icons/simple-icons/tree/2c1280d6cbb7cd52a5820da338844b843e86010d#node-usage-
  const icon = require("simple-icons")[`si${name}`];

  return icon ? icon.svg : genericIcon;
};

module.exports = function () {
  let externalIcons = [];

  Object.entries(config.author.links).forEach(([key, value]) => {
    externalIcons.push({
      name: key,
      url: value,
      icon: getIcon(key),
    });
  });

  return externalIcons;
};

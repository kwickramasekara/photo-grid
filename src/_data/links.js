const userdata = {
  app: "https://photo-grid-demo.netlify.app/",
  github: "https://github.com/kwickramasekara/photo-grid",
};

const genericIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'></path><path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'></path></svg>";

const getIcon = function (name) {
  if (!name) return genericIcon;

  name = name.charAt(0).toUpperCase() + name.slice(1);

  // see: https://github.com/simple-icons/simple-icons/tree/2c1280d6cbb7cd52a5820da338844b843e86010d#node-usage-
  const icon = require("simple-icons")[`si${name}`];

  return icon ? icon.svg : genericIcon;
};

module.exports = function () {
  let externalIcons = [];

  Object.entries(userdata).forEach(([key, value]) => {
    externalIcons.push({
      name: key,
      url: value,
      icon: getIcon(key),
    });
  });

  return externalIcons;
};

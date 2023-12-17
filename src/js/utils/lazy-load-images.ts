/**
 * Lazy load images using IntersectionObserver API
 * @see https://cloudinary.com/blog/automatically-loading-high-quality-images-cloudinary-intersectionobserver
 */

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.nextElementSibling?.removeAttribute("loading");
      observer.unobserve(entry.target);
    }
  });
};

const options = {
  rootMargin: "0px",
  threshold: 0.25,
};

const observer = new IntersectionObserver(callback, options);

document
  .querySelectorAll(".placeholder-image")
  .forEach((img) => observer.observe(img));

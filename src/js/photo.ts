(() => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      document.getElementById("next").click();
    } else if (event.key === "ArrowLeft") {
      document.getElementById("previous").click();
    } else if (event.key === "KeyD") {
      document.getElementById("details").click();
    } else if (event.key === "Escape") {
      const dialog = document.getElementById(
        "dialog-details",
      ) as HTMLDialogElement;

      if (dialog.open === false) {
        document.getElementById("close").click();
        event.preventDefault();
      }
    }
  });
})();

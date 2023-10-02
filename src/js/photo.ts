(() => {
  document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowRight") {
      document.getElementById("next").click();
    } else if (event.code === "ArrowLeft") {
      document.getElementById("previous").click();
    } else if (event.code === "KeyD") {
      document.getElementById("details").click();
    } else if (event.code === "Escape") {
      const dialog = document.getElementById(
        "dialog-details"
      ) as HTMLDialogElement;

      if (dialog.open === false) document.getElementById("close").click();
    }
  });
})();

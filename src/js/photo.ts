(() => {
  const dialog = document.getElementById("dialog-details") as HTMLDialogElement;

  document.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (event.key === "ArrowRight") {
      document.getElementById("next").click();
    } else if (event.key === "ArrowLeft") {
      document.getElementById("previous").click();
    } else if (event.key === "d" || event.key === "D") {
      if (dialog.open) {
        dialog.close();
      } else {
        dialog.showModal();
      }
    } else if (event.key === "Escape") {
      if (dialog.open) {
        dialog.close();
      } else {
        document.getElementById("close").click();
      }
      event.preventDefault();
    }
  });
})();

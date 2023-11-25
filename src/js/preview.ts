(() => {
  const dialog = document.getElementById("dialog-details") as HTMLDialogElement;

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      document.getElementById("next").click();
    } else if (event.key === "ArrowLeft") {
      document.getElementById("previous").click();
    } else if (event.key === "d" || event.key === "D") {
      const detailsBtn = document.getElementById("details");

      // Only open the dialog if it can be opened (details button is only shown when there are details)
      if (detailsBtn) {
        if (dialog.open) {
          dialog.close();
        } else {
          dialog.showModal();
        }
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

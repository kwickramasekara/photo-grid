(() => {
  const dialog = document.getElementById("dialog-details") as HTMLDialogElement;
  const description = document.querySelector(".description-text");

  // Dialog HTML elements do not have an "open" event, so we are firing a custom event when the dialog is opened
  const mObserver = new MutationObserver((recs) => {
    recs.forEach(({ attributeName: attr }) => {
      if (attr === "open") dialog.dispatchEvent(new CustomEvent("dialog-open"));
    });
  });

  // Observe the dialog's "open" attribute
  mObserver.observe(dialog, { attributes: true });

  // Fade the description text when it overflows
  dialog?.addEventListener("dialog-open", () => {
    if (description && description.scrollHeight > description.clientHeight) {
      description.classList.add("fade-bottom");
    }
  });

  // Additional fade logic for the description text when its scrolled
  description?.addEventListener("scroll", (event) => {
    const el = event.target as HTMLParagraphElement;

    if (el.scrollHeight - el.scrollTop <= el.clientHeight) {
      el.classList.remove("fade-bottom");
      el.classList.add("fade-top");
    } else {
      el.classList.add("fade-bottom");
      el.classList.remove("fade-top");
    }
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      document.getElementById("next").click();
    } else if (event.key === "ArrowLeft") {
      document.getElementById("previous").click();
    } else if (event.key === "i" || event.key === "I") {
      const detailsBtn = document.getElementById("details");

      // Only open the dialog if it can be opened (details button is only shown when there are details)
      if (detailsBtn) {
        if (dialog.open) {
          dialog.close();
        } else {
          dialog.showModal();
        }
      }
    } else if (event.key === "d" || event.key === "D") {
      const downloadBtn = document.getElementById("download");

      // Download button is only shown when if its allowed
      if (downloadBtn) downloadBtn.click();
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

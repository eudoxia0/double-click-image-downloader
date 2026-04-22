// Listen for double-clicks on images
document.addEventListener(
  "dblclick",
  function (e) {
    // Check if the clicked element is an image
    if (e.target.tagName === "IMG") {
      e.preventDefault();

      const imgSrc = e.target.src;

      const now = new Date();
      const filename = [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, "0"),
        String(now.getDate()).padStart(2, "0"),
      ].join("-") + "-" + [
        String(now.getHours()).padStart(2, "0"),
        String(now.getMinutes()).padStart(2, "0"),
        String(now.getSeconds()).padStart(2, "0"),
      ].join("") + ".jpg";

      // Trigger download
      browser.runtime.sendMessage({
        action: "download",
        url: imgSrc,
        filename: filename,
      });
    }
  },
  false,
);

// For background images on div elements (optional enhancement)
document.addEventListener(
  "dblclick",
  function (e) {
    if (e.target.tagName !== "IMG") {
      const bgImage = window.getComputedStyle(e.target).backgroundImage;

      if (bgImage && bgImage !== "none") {
        // Extract URL from url("...") format
        const urlMatch = bgImage.match(/url\(['"]?(.*?)['"]?\)/);

        if (urlMatch && urlMatch[1]) {
          e.preventDefault();
          const imgSrc = urlMatch[1];

          const now = new Date();
          const filename = [
            now.getFullYear(),
            String(now.getMonth() + 1).padStart(2, "0"),
            String(now.getDate()).padStart(2, "0"),
          ].join("-") + "-" + [
            String(now.getHours()).padStart(2, "0"),
            String(now.getMinutes()).padStart(2, "0"),
            String(now.getSeconds()).padStart(2, "0"),
          ].join("") + ".jpg";

          browser.runtime.sendMessage({
            action: "download",
            url: imgSrc,
            filename: filename,
          });
        }
      }
    }
  },
  false,
);

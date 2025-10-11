// Listen for double-clicks on images
document.addEventListener(
  "dblclick",
  function (e) {
    // Check if the clicked element is an image
    if (e.target.tagName === "IMG") {
      e.preventDefault();

      const imgSrc = e.target.src;

      // Extract filename from URL or use a default
      let filename = imgSrc.split("/").pop().split("?")[0];

      // If filename doesn't have an extension or is empty, generate one
      if (!filename || !filename.includes(".")) {
        const timestamp = new Date().getTime();
        filename = `image_${timestamp}.jpg`;
      }

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

          let filename = imgSrc.split("/").pop().split("?")[0];
          if (!filename || !filename.includes(".")) {
            const timestamp = new Date().getTime();
            filename = `background_${timestamp}.jpg`;
          }

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

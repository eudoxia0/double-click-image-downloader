NAME     := double-click-image-downloader
VERSION  := 1.0
FILES    := manifest.json content.js background.js icon.png
ZIP_FILE := $(NAME)-$(VERSION).zip

all: $(ZIP_FILE)

$(ZIP_FILE): $(FILES)
	zip -r $(ZIP_FILE) $(FILES)

.PHONY: clean
clean:
	rm -f $(ZIP_FILE)

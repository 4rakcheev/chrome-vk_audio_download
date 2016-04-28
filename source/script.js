setTimeout(function() {
    /* Example: Send data to your Chrome extension*/
    document.dispatchEvent(new CustomEvent('RW759_connectExtension', {
        detail: Audio.allAudios() // Some variable from Gmail.
    }));
}, 0);

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}

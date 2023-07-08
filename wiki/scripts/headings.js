export const headings = {
  main: function() {
    this.makeHeadingsAnchors();
    this.scrollToSelectedAnchor();
  },

  makeHeadingsAnchors() {
    var headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5"));
    for (var heading of headings) {
      var anchor = document.createElement("a");
      anchor.href = document.location.origin + document.location.pathname + "#" + heading.id;
      anchor.innerText = heading.innerText;
      const finalHeading = heading;
      anchor.addEventListener("click", (e) => {
        finalHeading.scrollIntoView({ behavior: "smooth", block: "start", inline: "start"});
        // document.location.hash = finalHeading.id;
        history.pushState({}, finalHeading.innerText, document.location.origin + document.location.pathname + "#" + finalHeading.id);
        e.preventDefault();
      })
      heading.innerText = "";
      heading.appendChild(anchor);
    }
  },

  scrollToSelectedAnchor() {
    var headingId = document.location.hash.substring(1);
    var heading = document.getElementById(headingId);
    if (headingId != "" && heading != null) {
      heading.scrollIntoView({ behavior: "smooth", block: "start", inline: "start"});
    }
  }
};

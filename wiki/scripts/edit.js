export const edit = {
  main: function() {
    var editLinkBase = "https://github.com/PhoenixTales/wiki.gothicarchive.org/edit/main";
    const link = document.createElement("a");
    link.innerText = "edit";
    const isDir = document.location.pathname.endsWith("/");
    link.href = editLinkBase + document.location.pathname + (isDir ? "index.md" : ".md");
    link.className = "edit";
    document.body.appendChild(link);
  }
}
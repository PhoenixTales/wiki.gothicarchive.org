var loader = document.createElement("script");
loader.innerHTML = `
  (async () => {
    const modules = [ "menu", "headings" ];
    const moduleObjects = await Promise.all(modules.map(async m => { return (await import("/wiki/scripts/" + m + ".js"))[m]; }));
    for (var moduleObject of moduleObjects) {
      moduleObject.main({});
    }
    document.addEventListener("turbolinks:load", function() {
      for (var moduleObject of moduleObjects) {
        moduleObject.main({hotReload: true});
      }
    });
  })();
`;
loader.setAttribute("data-turbolinks-eval", "false");
document.head.appendChild(loader);
loader.remove();
document.currentScript.remove();

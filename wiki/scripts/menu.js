export const menu = {
  conditionPlaceholder: "(max-height: 715px), (max-width: 820px) and (max-height: 790px)", 
  ruleTemplate: null,
  ruleElement: null,
  menuElement: null,
  menuToggle: null,

  updateHeight: async function() {
    var neededMenuHeight = 390 + 35 * document.querySelectorAll(".menu li").length;
    var currentHeight = document.querySelector(".menu").style.getPropertyValue("--menu-height");
    if (currentHeight == neededMenuHeight + "px") {
      return;
    }
    this.menuElement.style.setProperty("--menu-height", neededMenuHeight + "px", "important");

    var defaultMediaQueryUrl = "/wiki/styles/menu-media-query.css"
    if (this.ruleTemplate == null) {
      this.ruleTemplate = await (await fetch(defaultMediaQueryUrl)).text();
      if (this.ruleTemplate.indexOf(this.conditionPlaceholder) < 0) {
        throw new Error("conditionPlaceholder not found in ruleTemplate - update the placeholder or fix the template");
      }
    }

    for(var obsoleteQueryElement of document.querySelectorAll(".menu-media-query")) {
      if (obsoleteQueryElement.sheet != null) {
        obsoleteQueryElement.sheet.disabled = true;
      }
      obsoleteQueryElement.remove();
      console.log("removed obsolete", obsoleteQueryElement);
    }

    var newMediaCondition = `(max-height: ${neededMenuHeight + 0}px), (max-width: 820px) and (max-height: ${neededMenuHeight + 50}px)`;
    var newRuleText = this.ruleTemplate.replace(this.conditionPlaceholder, newMediaCondition);
    var newRuleElement = document.createElement("style");
    newRuleElement.className = "menu-media-query";
    newRuleElement.innerHTML = newRuleText;
    document.head.appendChild(newRuleElement);
    console.log("added", newMediaCondition, newRuleElement);
  },

  main: async function() {
    this.menuElement = document.querySelector(".menu");
    this.menuToggle = /**@type {HTMLInputElement}*/ (document.getElementById("menu-toggle"));
    this.updateHeight();
    window.addEventListener("resize", () => this.updateHeight());
  }
}

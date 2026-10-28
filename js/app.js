(function () {
  "use strict";

  var STORE_KEY = "g4m_lang";

  function getLang() {
    try {
      return localStorage.getItem(STORE_KEY) || "en";
    } catch (e) {
      return "en";
    }
  }

  function setLang(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "id" ? "id" : "en");

    var nodes = document.querySelectorAll("[data-en]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var text = lang === "id" ? el.getAttribute("data-id") : el.getAttribute("data-en");
      if (text != null) el.textContent = text;
    }

    var btn = document.getElementById("langBtn");
    if (btn) btn.textContent = lang === "id" ? "EN" : "ID";

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  function initLangToggle() {
    var btn = document.getElementById("langBtn");
    if (!btn) return;
    var current = getLang();
    setLang(current);
    btn.addEventListener("click", function () {
      var next = getLang() === "id" ? "en" : "id";
      setLang(next);
    });
  }

  function initHubMenu() {
    var btn = document.getElementById("hubBtn");
    var menu = document.getElementById("hubMenu");
    if (!btn || !menu) return;

    function close() {
      menu.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    }
    function open() {
      menu.hidden = false;
      btn.setAttribute("aria-expanded", "true");
    }

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (menu.hidden) open(); else close();
    });
    document.addEventListener("click", function (e) {
      if (!menu.hidden && !menu.contains(e.target) && e.target !== btn) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangToggle();
    initHubMenu();
  });
})();

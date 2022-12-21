function setCookie(e, o) {
  var t = new Date;
  t.setTime(t.getTime() + 31104e6);
  var n = "expires=" + t.toUTCString(),
      a = window.location.hostname.replace("www.", ".");
  document.cookie = e + "=" + o + ";" + n + "; path=/; domain=" + a + ";"
}
function delete_cookie(e) {
  var o = window.location.hostname.replace("www.", ".");
  document.cookie = e + "=; path=/; domain=" + o + "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}
function manageAtConsent() {
  console.log('manage at consent');
  if (window.location.href.includes("user_optout_at=1")) {//user comes back from optout page
    console.log('user chooses to optout from at')
    tag.privacy.setVisitorOptout(), setCookie("userConsentATOptout", "true");
  } else {//Check consent from cookie or didomi
    if (document.cookie.indexOf("userConsentATOptout=true") != -1) {
      // Opt-out status.
      tag.privacy.setVisitorOptout();
      console.log("[RGPD] user has AT cookie optout set or Didomi consent = false  => optout user");
    } else if (Didomi.getUserConsentStatusForVendor("c:at-internet")) {
      tag.privacy.setVisitorOptin();
      console.log("[RGPD] user gave consent => optin user");
    }else {//No consent yet and no optout, use exempt mode
      tag.privacy.setVisitorMode("cnil", "exempt");
      console.log("No consent yet and no optout, use exempt mode");
    }
  }
}
function manageConsent() {
  manageAtConsent();
  console.log("[RGPD] user comes back from optin page"), window.location.href.includes("user_optout_at=1") && (console.log("[RGPD] user choosed to optout from AT"), "undefined" != typeof tag), window.location.href.includes("user_optout_ga=1") && (console.log("[RGPD] user choosed to optout from GA"), dataLayerUpdated || (window.dataLayer.push({
      gaOptout: "true"
  }), dataLayerUpdated = !0), setCookie("userConsentGAOptout", "true")), window.location.href.includes("user_optout_at=0") && (console.log("[RGPD] user choosed to stay optin on optin page"), "undefined" != typeof tag, document.cookie.includes("userConsentATOptout=true") && (console.log("[RGPD] delete AT optout cookie"), delete_cookie("userConsentATOptout"))), window.location.href.includes("user_optout_ga=0") && document.cookie.includes("userConsentGAOptout=true") && (console.log("[RGPD] delete GA optout cookie"), delete_cookie("userConsentGAOptout"))
}
function manageConsentCookies() {
  manageAtConsent();
  document.cookie.includes("userConsentGAOptout=true") ? (console.log("[RGPD] user has cookie optout set for GA => optout user"), dataLayerUpdated || (window.dataLayer.push({
      gaOptout: "true"
  }), dataLayerUpdated = !0)) : (console.log("[RGPD] user gave consent for GA"), dataLayerUpdated || (window.dataLayer.push({
      gaOptout: "false"
  }), dataLayerUpdated = !0))
}
function sendAtHit() {
  tag.privacy.extendIncludeBuffer(["s2", "ref", "xto", "os", {
    stc: ["device"]
}])
  tag.customVars.set({}), window.location.href.includes("preprod") || window.location.href.includes("www-dev") || window.location.href.includes("www-qa") ? lvl2 = "105" : lvl2 = "82", tag.page.set({
      name: pageUrl,
      level2: lvl2,
      customObject: {
          device: window.innerWidth >= 980 ? "desktop" : "smartphone"
      }
  }), console.log("[RGPD] dispatch tag"), tag.dispatch()
}
pageUrl = window.location.href, dataLayerUpdated = !1, tag = new ATInternet.Tracker.Tag, window.didomiOnReady = window.didomiOnReady || [], window.didomiOnReady.push(function(e) {
  console.log("[RGPD] AT INTERNET PRIVACY TRACKER"), 0 == e.getUserConsentStatusForAll().purposes.enabled.length && 0 == e.getUserConsentStatusForAll().purposes.disabled.length ? (window.location.href.includes("user_optout") && manageConsent(), manageConsentCookies(), xiti_interval = setInterval(function() {
      (e.getUserStatus().purposes.consent.enabled.length || e.getUserStatus().purposes.consent.disabled.length) && (e.getUserStatus().purposes.consent.enabled.length, clearInterval(xiti_interval))
  }, 100)) : window.location.href.includes("user_optout") ? manageConsent() : manageConsentCookies(), sendAtHit()
});
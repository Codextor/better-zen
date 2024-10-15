// Better Zen Profile User Preferences
// Tested with Zen version 1.0.1-a.10

// If you make changes to your preferences from about:config in the browser,
// the changes will be overwritten by the below preferences on application restart.
//
// To make your changes persistent, set them below within the user.js file.

user_pref("browser.contentblocking.category", "strict");
user_pref("browser.profiles.enabled", true);
user_pref("browser.tabs.tabmanager.enabled", false);

user_pref("content.notify.interval", 100000);

user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

user_pref("dom.security.https_first", true);

user_pref("editor.truncate_user_pastes", false);

user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);

user_pref("security.mixed_content.block_display_content", true);

user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);

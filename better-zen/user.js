// Better Zen Profile User Preferences
// Tested with Zen version 1.10.2b

// If you make changes to your preferences from about:config in the browser,
// the changes will be overwritten by the below preferences on application restart.
//
// To make your changes persistent, set them below within the user.js file.

user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.privatebrowsing.resetPBM.enabled", true);
user_pref("browser.profiles.enabled", true);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.sessionstore.interval", 60000);
user_pref("browser.shell.checkDefaultBrowser", false);

user_pref("captivedetect.canonicalURL", "");

user_pref("content.notify.interval", 100000);

user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

user_pref("editor.truncate_user_pastes", false);

user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

user_pref("media.cache_readahead_limit", 7200);
user_pref("media.memory_cache_max_size", 65536);

user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.ssl_tokens_cache_capacity", 10240);

user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.manager.defaultsUrl", "");

user_pref("security.OCSP.enabled", 0);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.remote_settings.crlite_filters.enabled", true);

user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);

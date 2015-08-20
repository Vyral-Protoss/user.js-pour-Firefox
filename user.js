/******************************
* user.js - Vyral
* A placer dans le répertoire profile de firefox : %APPDATA%\Mozilla\Firefox\Profiles\
* Faire un back-up du fichier prefs.js avant de copier user.js dans le répertoire profile
******************************/

/**********
* Sécurité et vie privée
**********/
//Géolocalisation
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("browser.search.geoip.url", "");
//WebRTC
user_pref("media.peerconnection.enabled", false);
//Referer
user_pref("network.http.referer.spoofSource", false);
user_pref("network.http.sendRefererHeader", 1);
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("network.http.referer.trimmingPolicy", 1);
//Safebrowsing
user_pref("browser.safebrowsing.enabled", true);
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.downloads.enabled", false);
//Tracking
user_pref("privacy.trackingprotection.enabled", true);
//Statistiques
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
//Addons listing
user_pref("plugins.enumerable_names", "");
//UserMedia
user_pref("media.navigator.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.telephony.enabled", false);
user_pref("beacon.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.enable_performance", false);
//Reconnaissance vocale
user_pref("media.webspeech.recognition.enable", false);
//Partage d'écran
user_pref("media.getusermedia.screensharing.enabled", false);
//Sensor API
user_pref("device.sensors.enabled", false);
//HTML5 Pings
user_pref("browser.send_pings", false);
//Manette de jeux
user_pref("dom.gamepad.enabled", false);
//Outil de réalité virtuelle
user_pref("dom.vr.enabled", false);
//Démarrer automatiquement le navigateur en mode navigation privée
user_pref("browser.privatebrowsing.autostart", false);
//Content Security Policy
user_pref("security.csp.enable", true);
//Désactiver authentification non sécurisée
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1", false);
//Avertir lorsque le site web utilise un chiffrement faible
user_pref("security.warn_entering_weak", true);
//HTTP Strict-Transport-Security (HSTS)
user_pref("network.stricttransportsecurity.preloadlist", true);
//Activer Online Certificate Status Protocol
user_pref("security.OCSP.enabled", 1);
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.OCSP.require", true);
//Public Key Pinning
// "2. Strict. Pinning is always enforced." -- ne fonctionne pas pour moi
user_pref("security.cert_pinning.enforcement_level", 1);
//Négociation
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
////Chiffrement
//Désactiver les chiffrements null
user_pref("security.ssl3.rsa_null_sha", false);
user_pref("security.ssl3.rsa_null_md5", false);
user_pref("security.ssl3.ecdhe_rsa_null_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_null_sha", false);
user_pref("security.ssl3.ecdh_rsa_null_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_null_sha", false);
//SEED
user_pref("security.ssl3.rsa_seed_sha", false);
//40 bits
user_pref("security.ssl3.rsa_rc4_40_md5", false);
user_pref("security.ssl3.rsa_rc2_40_md5", false);
//56 bits
user_pref("security.ssl3.rsa_1024_rc4_56_sha", false);
//128 bits
user_pref("security.ssl3.rsa_camellia_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_camellia_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
//RC4
user_pref("security.ssl3.ecdh_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
user_pref("security.tls.unrestricted_rc4_fallback", false);
//3DES
user_pref("security.ssl3.dhe_dss_des_ede3_sha", false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_fips_des_ede3_sha", false);
//ECDH
user_pref("security.ssl3.ecdh_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_256_sha", false);
//256 bits sans PFS
user_pref("security.ssl3.rsa_camellia_256_sha", false);
//Chiffrement avec ECDHE et > 128bits
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", true);
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", true);
// GCM
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256", true);
//Logjam attack
user_pref("security.ssl3.dhe_rsa_camellia_256_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
//Chiffrement avec DSA (max 1024 bits)
user_pref("security.ssl3.dhe_dss_aes_128_sha", false);
user_pref("security.ssl3.dhe_dss_aes_256_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_128_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_256_sha", false);
//TLS
user_pref("security.enable_tls_session_tickets", false);
user_pref("security.tls.version.min", 1);
user_pref("security.tls.version.max", 3);
//Désactiver SSLv3
user_pref("security.enable_ssl3", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);

/**********
* Extensions et plugins
**********/
//Désactiver Flash
user_pref("plugin.state.flash", 0);
//Click to play
user_pref("plugins.click_to_play", true);
//Mise à jour automatique des addons
user_pref("extensions.update.enabled", true);

/**********
* Vitesse de connexion
**********/
//Pipelining
user_pref("network.http.pipelining", true);
user_pref("network.http.proxy.pipelining", true);
//Nombre de connexions simultanées
user_pref("network.http.max-connections", 256);
user_pref("network.http.pipelining.maxrequests", 8);
user_pref("network.http.max-connections-per-server", 16);
user_pref("network.http.max-persistent-connections-per-proxy", 8);
user_pref("network.http.max-persistent-connections-per-server", 8);
//Prefetch
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
//Désactiver pré-chargement d'un site dont on survole le lien
user_pref("network.http.speculative-parallel-limit", 0);
//Activer SPDY
user_pref("network.http.spdy.enabled", true);
user_pref("network.http.spdy.enabled.v3", true);
user_pref("network.http.spdy.enabled.v3-1", true);

/**********
* Gestion du cache
**********/
//Nettoyage à la fermeture du navigateur
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.passwords", false);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
//Stockage local
user_pref("browser.cache.offline.enable", false);
//Ne pas garder d'historique
user_pref("places.history.enabled", false);
//Les cookies expirent à la fermeture du navigateur
user_pref("network.cookie.lifetimePolicy", 2);
//Empécher la mise en cache de page web, emails ou autres sur le disque dur
user_pref("browser.cache.disk.enable", false);
//Idem pour les pages SSL
user_pref("browser.cache.disk_cache_ssl", false);
//Ne conserver aucune informations concernant les sessions (formulaires, cookies, données POST, ...)
user_pref("browser.sessionstore.privacy_level", 2);

/**********
* Gestion des mots de passe
**********/
//Enregistrer les mots de passe
user_pref("signon.rememberSignons", true);
//Permet d'activer l'option pour enregistrer les mots de passe
user_pref("signon.rememberSignons", true);
 
/**********
* Ergonomie
**********/
//Montrer http[s] dans l'URL
user_pref("browser.urlbar.trimURLs", false);
//Ne pas sélectionner les espaces après un mot lorque l'on double click dessus
user_pref("layout.word_select.eat_space_to_next_word", false);
//Ouvrir le résultat d'une recherche dans un nouvel onglet
user_pref("browser.search.openintab", true);
//Activer la recherche de fautes d'orthographe dans les zones de texte
user_pref("layout.spellcheckDefault", 2);
//La touche retour ne fait rien
user_pref("browser.backspace_action", 2);
//Temps d'attente avant l'installation d'un Addon (en msec)
user_pref("security.dialog_enable_delay", 1000);
//Pocket
user_pref("browser.pocket.enabled", false);
//Reader
user_pref("reader.parse-on-load.enabled", false);
user_pref("browser.readinglist.enabled", false);
// Firefox Hello
user_pref("loop.enabled", false);
// Suggestion de recherche
user_pref("browser.search.suggest.enabled", false);
//Désactiver le lecteur PDF interne à Firefox
user_pref("pdfjs.disabled", true);
//Désactiver Heartbeat
user_pref("browser.selfsupport.url", "");
// Désactiver SSDP (Send Video To Device)
user_pref("browser.casting.enabled", false);
//Mozilla snippets
user_pref("browser.aboutHomeSnippets.updateUrl", "");
//Désactiver la vérification des plugins à chaque redémarrage
user_pref("plugins.update.notifyUser", false);
//Désactive le scrolling ralenti
user_pref("general.smoothScroll", false);
//Réserve de l'espace sur la page pour les images en cours de chargement
user_pref("browser.display.show_image_placeholders", false);
//Désactiver l'animation des onglets
user_pref("browser.tabs.animate", false);

/**********
* Media HTML5
**********/
user_pref("media.mediasource.enabled", true);
user_pref("media.mediasource.webm.enabled", false);
user_pref("media.mediasource.youtubeonly", false);
user_pref("media.fragmented-mp4.exposed", true);
user_pref("media.fragmented-mp4.ffmpeg.enabled", true);

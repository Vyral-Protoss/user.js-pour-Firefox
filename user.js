/******************************
* user.js - Vyral - 13/04/2015
* Source : http://kb.mozillazine.org/User.js_file
* A placer dans le répertoire profile de firefox : %APPDATA%\Mozilla\Firefox\Profiles\
* Faire un back-up du fichier prefs.js avant de copier user.js dans le répertoire profile
******************************/

//Paramétrage Firefox en Français
user_pref("general.useragent.locale", "fr");
user_pref("browser.search.countryCode", "FR");
user_pref("browser.search.region", "FR");

/**********
* Vie privée
**********/
//Modifier l'UserAgent qui indique le navigateur et l'OS de l'utilisateur aux sites visités
//cf https://techblog.willshouse.com/2012/01/03/most-common-user-agents/
//ou http://www.browser-info.net/useragents
//user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36");
//Do Not Track (DNT) header
//Dire aux sites web que je ne souhaite pas être pisté
user_pref("privacy.donottrackheader.enabled", true);
//Géolocalisation
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("browser.search.geoip.url", "");
//WebRTC
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.enabled", false);
//Referer
user_pref("network.http.sendRefererHeader", 2);
user_pref("network.http.referer.spoofSource", false);	//true empêche certains sites de fonctionner
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("network.http.referer.trimmingPolicy", 1);
//Tracking
user_pref("privacy.trackingprotection.enabled", true);
//Statistiques
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("experiments.supported", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.activeExperiment", false);
user_pref("network.allow-experiments", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);
//Ne pas sauvegarder les résultat de télémétrie en local
//http://www.ghacks.net/2015/11/09/how-to-disable-the-firefox-saved-telemetry-pings-and-archive-folder/
user_pref("toolkit.telemetry.archive.enabled", false);
//Désactiver Heartbeat
user_pref("browser.selfsupport.url", "");
//UserMedia
user_pref("media.navigator.enabled", false);
user_pref("beacon.enabled", false);
//Démarrer automatiquement le navigateur en mode navigation privée
user_pref("browser.privatebrowsing.autostart", false);

/**********
* Sécurité
**********/
//Safebrowsing
user_pref("browser.safebrowsing.enabled", true);
user_pref("browser.safebrowsing.malware.enabled", true);
//Safebrowsing, contrôler les fichiers téléchargés uniquement en local
user_pref("browser.safebrowsing.downloads.enabled", true);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
//Vérifier l'intégrité d'une page web Firefox 43+
user_pref("security.csp.enable", true);
user_pref("security.sri.enable", true);
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
//"2. Strict. Pinning is always enforced." -- ne fonctionne pas pour moi
user_pref("security.cert_pinning.enforcement_level", 1);
//Négociation
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
/** Chiffrement **/
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
//GCM
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
user_pref("security.tls.version.min", 2);
user_pref("security.tls.version.max", 3);
//Désactiver SSLv3
user_pref("security.enable_ssl3", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
//Conservé pour des raisons de compatibilité
user_pref("security.ssl3.rsa_aes_256_sha", true);
user_pref("security.ssl3.rsa_aes_128_sha", true);

/**********
* Extensions et plugins
**********/
//Désactiver Flash
user_pref("plugin.state.flash", 0);
//Click to play
user_pref("plugins.click_to_play", true);
//Mise à jour automatique des addons
user_pref("extensions.update.enabled", true);
//Ne pas mettre à jour les méta-données des extensions
user_pref("extensions.getAddons.cache.enabled", false);
//Ne pas envoyer la liste des extensions installées aux sites web
user_pref("plugins.enumerable_names", "");
//Empécher les extensions d'utiliser les scripts XPCOM ou XPConnect
//user_pref("security.xpconnect.plugin.unrestricted", false);

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
//SPDY abandonné pour HTTP2
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.v3", false);
user_pref("network.http.spdy.enabled.v3-1", false);
//HTTP2
user_pref("network.http.spdy.enabled.http2", true);

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
user_pref("privacy.clearOnShutdown.siteSettings", false);
//Stockage local
user_pref("browser.cache.offline.enable", false);
//Ne pas garder d'historique
user_pref("places.history.enabled", false);
//Les cookies expirent à la fermeture du navigateur
user_pref("network.cookie.lifetimePolicy", 2);
//Cookies
// 1 = Ne jamais accepter les cookies tiers
// 3 = Accepter uniquement ceux depuis les sites visités
user_pref("network.cookie.cookieBehavior", 1);
//Empécher la mise en cache de page web, emails ou autres sur le disque dur
user_pref("browser.cache.disk.enable", false);
//Idem pour les pages SSL
user_pref("browser.cache.disk_cache_ssl", false);
//Ne conserver aucune informations concernant les sessions (formulaires, cookies, données POST, ...)
user_pref("browser.sessionstore.privacy_level", 2);

/**********
* Gestion des mots de passe
**********/
//Permet d'activer l'option pour enregistrer les mots de passe
user_pref("signon.rememberSignons", false);

/**********
* Ergonomie et performances
**********/
//Activer E10 - multiprocess (FF 43 à 46)
//user_pref("browser.tabs.remote.autostart", true);
//user_pref("layers.offmainthreadcomposition.testing.enabled", true);
//Forcer l'activation de E10 pour FF46
user_pref("browser.tabs.remote.force-enable", true);
//Nombre de processus pour E10 (par défaut : 1)
//Calcul: nb coeurs processeur x2 (ex: Dual-Core => 4 ; Quad-Core => 8 ; ...)
user_pref("dom.ipc.processCount", 4);
//Supprimer les messages possibles au démarrage
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.rights.3.shown", true);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_override_url", "");
user_pref("browser.feeds.showFirstRunUI", false);
user_pref("browser.usedOnWindows10.introURL", "");
//Ne pas vérifier le navigateur par défaut au démarrage
user_pref("browser.shell.checkDefaultBrowser", false);
//Empécher le navigateur de se mettre à jour automatiquement
//Mise à jour manuelle : Menu > Aide > À propos de Firefox > Rechercher des mises à jour
user_pref("app.update.enabled", false);
user_pref("app.update.auto", false);
//Ne pas quitter le navigateur si on ferme le dernier onglet
user_pref("browser.tabs.closeWindowWithLastTab", false);
//Montrer l'url complète (avec http ou https)
user_pref("browser.urlbar.trimURLs", false);
//Ne pas sélectionner les espaces après un mot sur lequel on a double cliqué
user_pref("layout.word_select.eat_space_to_next_word", false);
//Ne pas ouvrir de nouvelles fenêtres (popup ou autres)
user_pref("dom.disable_window_open_feature.resizable", false);
//Ouvrir le résultat d'une recherche dans un nouvel onglet
user_pref("browser.search.openintab", true);
//Activer la vérification de l'orthographe
user_pref("layout.spellcheckDefault", 2);
//La touche retour ne fait rien
user_pref("browser.backspace_action", 2);
//Temps d'attente avant installation d'un Add-on (en msec)
user_pref("security.dialog_enable_delay", 1000);
//Suggestion de recherche
user_pref("browser.search.suggest.enabled", false);
//Désactiver SSDP (Send Video To Device)
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
//Ne pas essayer de deviner ce qui est tapé dans l'URL
//Ex: "http://foo" -> "http://(prefix)foo(suffix)"
user_pref("browser.fixup.alternate.enabled", false);
//Désactivation de la prédiction des actions de l'utilisateur
user_pref("network.predictor.enabled", false);
//Empécher les sites web de modifier l'action du clic droit
user_pref("dom.event.contextmenu.enabled", false);
//Nombre maximum de popups sans action de l'utilisateur (20 par défaut)
user_pref("dom.popup_maximum", 3);
//Toujours demander dans quel répertoire doit être télécharger un fichier
//user_pref("browser.download.useDownloadDir", false);
/** Polices de caractères **/
//Désactiver les polices de caractères au format SVG
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
//Polices de caractères par défaut
user_pref("font.name.serif.x-unicode", "Georgia");
user_pref("font.name.serif.x-western", "Georgia"); //par défaut Times New Roman
user_pref("font.name.sans-serif.x-unicode", "Arial");
user_pref("font.name.sans-serif.x-western", "Arial");  //par défaut Arial
user_pref("font.name.monospace.x-unicode", "Lucida Console");
user_pref("font.name.monospace.x-western", "Lucida Console"); //par défaut Courier New

/**********
* NewTabPage
**********/
//Activer NewTabPage
user_pref("browser.newtabpage.enabled", true);
//Afficher NewTabPage lorsque l'on ouvre un nouvel onglet vide
user_pref("browser.newtab.url", "");
user_pref("browser.newtab.preload", false);
//Désactiver la pub
user_pref("browser.newtabpage.enhanced", false);
//Désactiver la capture d'écran pour aperçu dans NewTabPage
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "");

/**********
* Media HTML5
**********/
user_pref("media.mediasource.enabled", true);
user_pref("media.mediasource.webm.enabled", false);
user_pref("media.mediasource.youtubeonly", false);
user_pref("media.fragmented-mp4.exposed", true);
user_pref("media.fragmented-mp4.ffmpeg.enabled", true);
//Ne pas lire automatiquement les contenus multimédia
user_pref("media.autoplay.enabled", false);
//Permettre la lecture des vidéos avec DRM
user_pref("media.eme.enabled", false);
//Permettre d'activer/désactiver la préférence précédente dans les options
user_pref("browser.eme.ui.enabled", false);
//Plugin pour lire les vidéo avec DRM
user_pref("media.gmp-eme-adobe.enabled", false);
//Codecs vidéo pour WebRTC
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-gmpopenh264.provider.enabled", false);

/**********
* API intégrées dans Firefox
**********/
//Désactivation des API inutiles ou intrusives
//RAF : commenter chaque ligne
user_pref("dom.battery.enabled", false);
user_pref("dom.telephony.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.enable_performance", false);
user_pref("dom.netinfo.enabled", false);
user_pref("dom.enable_user_timing", false);
user_pref("dom.enable_resource_timing", false);
user_pref("dom.vibrator.enabled", false);
user_pref("dom.idle-observers-api.enabled", false);
user_pref("dom.w3c_touch_events.enabled", 0);
//Reconnaissance faciale
user_pref("camera.control.face_detection.enabled", false);
//Reconnaissance vocale
user_pref("media.webspeech.recognition.enable", false);
//Partage d'écran
user_pref("media.getusermedia.screensharing.enabled", false);
//Sensor API
user_pref("device.sensors.enabled", false);
//HTML5 Pings
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);
//Manette de jeux
user_pref("dom.gamepad.enabled", false);
//Outil de réalité virtuelle
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.oculus050.enabled", false);
//WebGL
user_pref("webgl.disabled", true);
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-extensions", true);
//Social_API
user_pref("social.whitelist", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.directories", "");
user_pref("social.share.activationPanelEnabled", false);

/**********
* Extensions intégrées dans Firefox
**********/
//Pocket
user_pref("browser.pocket.enabled", false);
user_pref("browser.pocket.api", "");
user_pref("browser.pocket.site", "");
user_pref("browser.pocket.oAuthConsumerKey", "");
//Reader
user_pref("reader.parse-on-load.enabled", false);
user_pref("browser.readinglist.enabled", false);
// Firefox Hello
user_pref("loop.enabled", false);
//Désactiver le lecteur PDF interne à Firefox
user_pref("pdfjs.disabled", true);
//Demander la permission au lieu de rafraichir automatiquement la page
user_pref("accessibility.blockautorefresh", true);
//Ne pas faire de recherche sur ce qui est tapé dans la barre d'adresse si ce n'est pas une URL valide
user_pref("keyword.enabled", false);

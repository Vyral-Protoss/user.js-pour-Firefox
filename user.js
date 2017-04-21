/******************************
* user.js - Vyral - 13/04/2015
* Source : http://kb.mozillazine.org/User.js_file
* A placer dans le répertoire profile de firefox : %APPDATA%\Mozilla\Firefox\Profiles\
* Faire un back-up du fichier prefs.js avant de copier user.js dans le répertoire profile
******************************/

/**********
* Spécifiques Linux (Mint)
**********/
//user_pref("network.protocol-handler.app.apt", "/usr/bin/apturl");
//user_pref("network.protocol-handler.app.apt+http", "/usr/bin/apturl");
//user_pref("network.protocol-handler.warn-external.apt", true);
//user_pref("network.protocol-handler.warn-external.apt+http", true);

/**********
* Vie privée
**********/
//Modifier l'UserAgent qui indique le navigateur et l'OS de l'utilisateur aux sites visités
//cf https://techblog.willshouse.com/2012/01/03/most-common-user-agents/
//ou http://www.browser-info.net/useragents
//user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36");
//Do Not Track (DNT) header
//Dire aux sites web que je ne souhaite pas être pisté
user_pref("privacy.donottrackheader.enabled", true);
//Géolocalisation
user_pref("geo.enabled", false);
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("browser.search.geoip.timeout", 1);
user_pref("browser.search.geoip.url", "");
user_pref("geo.wifi.xhr.timeout", 1);
//Referer
user_pref("network.http.sendRefererHeader", 2);
user_pref("network.http.referer.spoofSource", false);	//true empêche certains sites de fonctionner
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("network.http.referer.trimmingPolicy", 1);
//Protection contre le pistage - Désactivé car l'extension uBlock Origin est plus efficace
user_pref("privacy.trackingprotection.enabled", false);
user_pref("browser.trackingprotection.gethashURL", "");
user_pref("browser.trackingprotection.updateURL", "");
user_pref("privacy.trackingprotection.pbmode.enabled", false);
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
//Ne pas sauvegarder les résultat de télémétrie en local
//http://www.ghacks.net/2015/11/09/how-to-disable-the-firefox-saved-telemetry-pings-and-archive-folder/
user_pref("toolkit.telemetry.archive.enabled", false);
//Désactiver Heartbeat
user_pref("browser.selfsupport.url", "");
//UserMedia
user_pref("media.navigator.enabled", false);
user_pref("beacon.enabled", false);
//Ne pas démarrer automatiquement le navigateur en mode navigation privée automatiquement
user_pref("browser.privatebrowsing.autostart", false);
//Désactiver debug à distance
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.debugger.force-local", true);
//Protection intégrée à Firefox contre le pistage
user_pref("privacy.resistFingerprinting", true);
//Ne pas gérer le statut de la connexion
user_pref("network.manage-offline-status", false);
//Ne pas faire de rapport sur les connexions chiffrées avec erreurs
user_pref("security.ssl.errorReporting.enabled", false);
//Ne pas envoyer le rapport de crash quand il y en a
user_pref("browser.tabs.crashReporting.sendReport", false);
//Désactiver les rapports d'erreurs SSL
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
//Ne pas utiliser d'identifiant unique pour les connexions SSL (permet normalement de se reconnecter plus vite avec)
user_pref("security.ssl.disable_session_identifiers", true);
//Activer les conteneurs pour les infos stockées afin qu'elles ne soient pas partagées entre les onglets
//cf https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers
user_pref("privacy.userContext.enabled", true);

/**********
* Sécurité
**********/
//Désactiver safebrowsing
//user_pref("browser.safebrowsing.enabled", false); //FF49- donc obsolète
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false); // FF50+
//Ne pas consulter une base de données externe pour savoir si le site visité est légitime
user_pref("browser.safebrowsing.remoteLookups", false);
//Ne pas contrôler les fichiers téléchargés
user_pref("browser.safebrowsing.downloads.enabled", false);
//Si l'option ci-dessus est activée, cette option permet de contrôler les fichiers uniquement en local
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
//Supprimer les liens où Firefox récupère les informations pour le safebrowsing
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
//Vérifier l'intégrité d'une page web Firefox 43+
user_pref("security.csp.enable", true);
user_pref("security.sri.enable", true);
//Désactiver authentification non sécurisée
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1", false);
//Avertir lorsque le site web utilise un chiffrement faible
user_pref("security.warn_entering_weak", true);
//HTTP Strict-Transport-Security (HSTS)
user_pref("network.stricttransportsecurity.preloadlist", true);
user_pref("security.mixed_content.use_hsts", true);
//Désactiver les requêtes HSTS Priming qui peuvent être longue à répondre
user_pref("security.mixed_content.send_hsts_priming", false);
//Activer Online Certificate Status Protocol
user_pref("security.OCSP.enabled", 1);
user_pref("security.ssl.enable_ocsp_stapling", true);
//Vérifier certification auprès de la cert authority (balance entre vie privée et sécurité)
//Passé à false par défaut dans FF44 à cause de problèmes avec certains sites
//user_pref("security.OCSP.require", true);
//Public Key Pinning
//PKP (public key pinning)
//0=désactivé 1=autoriser le MiTM de l'utilisateur (par exemple, un antivirus), 2=stricte (ne fonctionne pas pour moi)
user_pref("security.cert_pinning.enforcement_level", 1);
//Afficher un message d'avertissement pour les sites avec une sécurité insuffisante
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
//Bloquer les connexions non chiffrées vers du contenu actif sur une page chiffrée
user_pref("security.mixed_content.block_active_content", true);
//Afficher un rapport sur les pages "Connexion non sécurisée"
user_pref("browser.xul.error_pages.expert_bad_cert", true);
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
//RC4 : Obsolète car désactivé par défaut depuis FF44
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
//Devrait être défini à 2 car TLS1 n'est plus sécurisé mais beaucoup de sites ne supportent pas les versions supérieurs
user_pref("security.tls.version.min", 1);
//1=TLS 1.0, 2=TLS 1.1, 3=TLS 1.2, 4=TLS 1.3 (FF49+)
user_pref("security.tls.version.max", 4);
//Version de TLS par défaut
user_pref("security.tls.version.fallback-limit", 3);
//Désactiver SSLv3
user_pref("security.enable_ssl3", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
//Conservé pour des raisons de compatibilité
user_pref("security.ssl3.rsa_aes_256_sha", true);
user_pref("security.ssl3.rsa_aes_128_sha", true);
//Sécurité strict - Ne fonctionne pas encore
//user_pref("security.ssl.require_safe_negotiation", true);
//Nouveaux chiffrements : ChaCha20 et Poly1305
user_pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256", true);
//SHA-1
//0=autoriser, 1=désactiver, 2=autoriser jusqu'au 01-01-2016
//Non sécurisé, à désactiver !!!
user_pref("security.pki.sha1_enforcement_level", 1);

/**********
* Extensions et plugins
**********/
//Désactiver Flash
user_pref("plugin.state.flash", 0);
//Click to play
user_pref("plugins.click_to_play", true);
//Mise à jour automatique des addons
user_pref("extensions.update.enabled", true);
user_pref("extensions.update.autoUpdateDefault", true);
//Ne pas mettre à jour les méta-données des extensions
user_pref("extensions.getAddons.cache.enabled", false);
//Ne pas envoyer la liste des extensions installées aux sites web
user_pref("plugins.enumerable_names", "");
//Empécher les extensions d'utiliser les scripts XPCOM ou XPConnect
//user_pref("security.xpconnect.plugin.unrestricted", false);
//Par défaut, les plugins sont désactivés
user_pref("plugin.default.state", 0);
//Ne pas rechercher de plugin pour les logiciels sur l'ordinateur (ex: Java, Flash, Antivirus, ...)
user_pref("plugin.scan.plid.all", false);

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
user_pref("network.http.spdy.enabled.deps", false);
//HTTP2
user_pref("network.http.spdy.enabled.http2", true);

/**********
* Gestion du cache
**********/
//Activer mise en cache
user_pref("browser.cache.memory.enable", true);
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
//Empécher la mise en cache de pages web, emails ou autres sur le disque dur
user_pref("browser.cache.disk.enable", false);
//Idem pour les pages SSL
user_pref("browser.cache.disk_cache_ssl", false);
//Désactiver expérience sur le cache
user_pref("browser.cache.frecency_experiment", -1);
//Ne conserver aucune informations concernant les sessions (formulaires, cookies, données POST, ...)
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.privacy_level_deferred", 2);
//Ne pas tenter de restaurer les pages et sessions après un crash du navigateur
user_pref("browser.sessionstore.resume_from_crash", false);

/**********
* Gestion des mots de passe
**********/
//Permet d'activer l'option pour enregistrer les mots de passe
user_pref("signon.rememberSignons", false);

/**********
* Ergonomie et performances
**********/
//E10 - multiprocess
//Il est plus prudent de laisser les valeurs par défaut
//user_pref("browser.tabs.remote.force-enable", true);
//Nombre de processus pour E10 (par défaut : 1)
//user_pref("dom.ipc.processCount", 4);
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
//Ne pas compléter automatiquement l'adresse en ajoutant un préfixe (www.) et un suffixe (.com)
//Ex: "http://foo" -> "http://(prefix)foo(suffix)"
user_pref("browser.fixup.alternate.enabled", false);
//Désactivation de la prédiction des actions de l'utilisateur
user_pref("network.predictor.enabled", false);
//Empécher les sites web de modifier l'action du clic droit
//user_pref("dom.event.contextmenu.enabled", false);
//Nombre maximum de popups sans action de l'utilisateur (20 par défaut)
user_pref("dom.popup_maximum", 3);
//Toujours demander dans quel répertoire doit être télécharger un fichier
//user_pref("browser.download.useDownloadDir", false);
//Supprimer les fichiers temporaires à la fermeture du navigateur
user_pref("browser.helperApps.deleteTempFileOnExit", true);

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
//MSE (Media Source Extensions)
user_pref("media.mediasource.enabled", true);
user_pref("media.mediasource.mp4.enabled", true);
user_pref("media.mediasource.webm.audio.enabled", true);
user_pref("media.mediasource.webm.enabled", true);
user_pref("media.mediasource.youtubeonly", false);
user_pref("media.fragmented-mp4.exposed", true);
user_pref("media.fragmented-mp4.ffmpeg.enabled", true);
//user_pref("media.gmp-eme-adobe.enabled", false); // Obsolète
//Désactiver GMP (Gecko Media Plugins)
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp.trial-create.enabled", false);
//Désactiver widevine CDM (Content Decryption Module) => DRM
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.autoupdate", false);
//Désactiver EME (Encryption Media Extension) => DRM
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);
user_pref("media.eme.apiVisible", false);
//Désactiver OpenH264 Video Codec by Cisco
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-manager.url", "data:text/plain,");
//Désactiver WebRTC (Web Real-Time Communication)
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.navigator.video.enabled", false); //WebRTC avec vidéo
//Corrige un problème de fuite d'adresse ip
user_pref("media.peerconnection.ice.default_address_only", true); //FF50-
user_pref("media.peerconnection.ice.no_host", true); //FF51+
//Ne pas lire automatiquement les contenus multimédia
user_pref("media.autoplay.enabled", true);
//Désactive la possibilité de regarder des vidéos HTML5 sur d'autres appareils sur le réseau
user_pref("browser.casting.enabled", false);

/**********
* API intégrées dans Firefox
**********/
//Désactivation des API inutiles ou intrusives
//RAF : commenter chaque ligne
user_pref("dom.battery.enabled", false);
user_pref("dom.telephony.enabled", false);
user_pref("dom.enable_performance", false);
user_pref("dom.netinfo.enabled", false);
user_pref("dom.webaudio.enabled", false);
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
//Capture audio
user_pref("media.getusermedia.audiocapture.enabled", false);
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
user_pref("dom.vr.osvr.enabled", false); // FF49+
user_pref("dom.vr.openvr.enabled", false); // FF51+
//WebGL
user_pref("webgl.disabled", true);
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("webgl.enable-debug-renderer-info", false);
user_pref("webgl.dxgl.enabled", false); //FF51+
user_pref("webgl.enable-webgl2", false); //FF51+
//Social_API
user_pref("social.whitelist", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.directories", "");
user_pref("social.share.activationPanelEnabled", false);
//Donne les informations de connexion de l'utilisateur (e.g. connecté en Wifi)
user_pref("dom.netinfo.enabled", false);

/**********
* Extensions intégrées dans Firefox
**********/
//Pocket
user_pref("extensions.pocket.enabled", false);
//Reader
user_pref("reader.parse-on-load.enabled", false);
user_pref("browser.readinglist.enabled", false);
//Désactiver la fonctionnalité Text to Speech du mode Reader (FF49+)
user_pref("narrate.enabled", false);
//Désactiver le lecteur PDF interne à Firefox
user_pref("pdfjs.disabled", true);

/**********
* Préférences personnelles
**********/
//Page d'acceuil
user_pref("browser.startup.homepage", "about:newtab");
//Page d'acceuil (0=vide, 1=browser.startup.homepage, 2=restaurer session précédente)
user_pref("browser.startup.page", 1);
//Empécher le navigateur de se mettre à jour automatiquement
//Mise à jour manuelle : Menu > Aide > À propos de Firefox > Rechercher des mises à jour
//user_pref("app.update.enabled", false);
//user_pref("app.update.service.enabled", false);
//Rechercher et installer mise à jour via la fonction de recherche manuelle
//user_pref("app.update.auto", true);
//Paramétrage Firefox en Français
user_pref("intl.locale.matchOS", false);
user_pref("general.useragent.locale", "fr");
user_pref("browser.search.countryCode", "FR");
user_pref("browser.search.region", "FR");
user_pref("spellchecker.dictionary", "fr");
user_pref("intl.accept_languages", "fr, fr-fr, en-US, en");
/** Polices de caractères **/
//Empêcher les sites de télécharger leurs propres polices de caractères
//user_pref("browser.display.use_document_fonts", 0);
//Autoriser les icônes
user_pref("gfx.downloadable_fonts.enabled", true);
//Désactiver les polices de caractères au format SVG
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
//Polices de caractères par défaut
user_pref("font.name.serif.x-unicode", "Georgia");
user_pref("font.name.serif.x-western", "Georgia"); //par défaut Times New Roman
user_pref("font.name.sans-serif.x-unicode", "Arial");
user_pref("font.name.sans-serif.x-western", "Arial");  //par défaut Arial
user_pref("font.name.monospace.x-unicode", "Lucida Console");
user_pref("font.name.monospace.x-western", "Lucida Console"); //par défaut Courier New
//Couleur arrière-plan par défaut
user_pref("browser.display.background_color", "#c1c1c1");
//Demander la permission au lieu de rafraichir automatiquement la page
user_pref("accessibility.blockautorefresh", true);
//Ne pas faire de recherche sur ce qui est tapé dans la barre d'adresse si ce n'est pas une URL valide
user_pref("keyword.enabled", false);
//Si true, permet d'activer les outils développeur pour le navigateur en plus du contenu web
user_pref("devtools.chrome.enabled", false);
//Désactiver présentation de l'interface
user_pref("browser.uitour.enabled", false);
//Ne pas ajouter les fichiers téléchargés au menu Windows des fichiers récents
user_pref("browser.download.manager.addToRecentDocs", false);
//Désactiver le message affiché lorsque l'on passe en plein écran
user_pref("full-screen-api.warning.timeout", 0);
//Newtab page
user_pref("browser.newtabpage.rows", 5);
user_pref("browser.newtabpage.columns", 5);
user_pref("toolkit.pageThumbs.minHeight", 100);
user_pref("toolkit.pageThumbs.minWidth", 250);
/** Onglets **/
//Ouvrir les liens dans un nouvel onglet au lieu d'une nouvelle fenêtre
//1=fenêtre actuelle, 2=nouvelle fenêtre, 3=fenêtre la plus récente
user_pref("browser.link.open_newwindow", 3);
//Activer la pré-visualisation des onglets avec Ctrl+Tab
user_pref("browser.ctrlTab.previews", true);
//Ouvrir les liens dans un onglet à droite de l'onglet courant au lieu de à la suite des onglets déjà ouverts
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
//À la fermeture d'un onglet, revenir à l'onglet parent s'il existe
user_pref("browser.tabs.selectOwnerOnClose", true);
//Lors de l'ouverture d'un lien dans un nouvel onglet, 
//true = ne pas passer automatiquement sur celui-ci ; false = passer automatiquement sur celui-ci
user_pref("browser.tabs.loadInBackground", true);
//Idem mais pour les liens qui devaient ouvrir une nouvelle fenêtre
//true = ne pas passer sur le nouvel onglet ; false = passer sur le nouvel onglet
user_pref("browser.tabs.loadDivertedInBackground", false);
//Afficher un avertissement concernant les formulaires de connexion sur les pages non sécurisée
user_pref("security.insecure_password.ui.enabled", true);

/*** Pour vérifier que tout a bien été chargé, rechercher la préférence suivante dans about:config ***/
user_pref("user.pref.check", "Chargement OK");


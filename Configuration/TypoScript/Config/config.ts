config {

    pageRendererTemplateFile    = {$filepaths.templates}tslib_bootstrap.html
    doctype                     = html5
    metaCharset                 = utf-8
    renderCharset               = utf-8

    linkVars = L
    uniqueLinkVars = 1

    htmlTag_langKey = de
    language = de
    sys_language_uid = 0
    locale_all = de_DE
}

[globalVar = GP:L = 1]
config {
    htmlTag_langKey = en
    language = en
    sys_language_uid = 1
    locale_all = en_GB
}
[global]

[globalString = ENV:HTTP_HOST=dev.gjo-se.com]
    <INCLUDE_TYPOSCRIPT: source="FILE:EXT:gjo_introduction/Configuration/TypoScript/ENV/Dev/config.ts">
[end]
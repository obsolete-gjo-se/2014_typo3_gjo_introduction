[globalVar = TSFE:id={$_local.pageIdPrasesenzSeminare}][globalVar = TSFE:id={$_local.pageIdSicherheitshinweise}][globalVar = TSFE:id={$_local.pageIdSeminaranmeldung}]
# Bei den Sicherheitshinweisen soll das aus dem Else-Teil nicht ausgeführt werden
[else]
## Entfernt die Klasse "bodytext" im p-tag des RTE
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >
#lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.encapsTagList := addToList(img)
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.encapsTagList = div,p,pre,h1,h2,h3,h4,h5,h6
#lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines >
## Formatierungseinstellungen von RTE übernehmen
tt_content.stdWrap.parseFunc < lib.parseFunc_RTE
[end]


### CSS für den IE (Verschiedene Versionen) ###
[browser = msie] && [version = 8,6,7]
    page.includeCSS.ie= /{$filepath.css}ie8.css
## [else]
 ## page.includeCSS. = /{$filepath.css}_all.css
[global]

## Hinzufügen der JS-Datei für Systeme mit Maus (MouseOver-Effekt im Menü)
[system = win7, winVista, winXP, mac ]
// funktioniert auch ohne - Alex => Foundation?
#    page.includeJS.main = /{$filepath.script}mouseovermenu.js
[GLOBAL]
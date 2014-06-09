config {
  baseURL = {$_local.baseUrl}
  # Für die Übersetzung in Menüs erforderlich, sonst kommt in den Menüs index.php?id=xxx
  tx_realurl_enable = 1
  # Eingefügte Kommentare für die Marker entfernen (für Produktivbetrieb) disablePrefixComment = 1
  disablePrefixComment = 1

  # Standard-Sprache festlegen
  language = de
  locale_all = de_DE.UTF-8
  htmlTag_langKey = de

  # Typo3 generierten Header deaktivieren = 1
  disableAllHeaderCode = 0
  #doctype = none

  # Eigene HTML-Vorlagenseite
  pageRendererTemplateFile = {$filepath.template}tslib_foundation.responsive.html

  # StandardPageTitle ausschalten // wird über page.headerData gesetzt
  noPageTitle = 1

  admPanel = 1
}
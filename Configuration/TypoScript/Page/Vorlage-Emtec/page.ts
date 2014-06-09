page = PAGE

page{

      includeCSS.foundation = /{$filepath.css}normalize.css
      includeCSS.app = /{$filepath.css}foundation.css
      includeCSS.jquerui = http://code.jquery.com/ui/1.10.3/themes/vader/jquery-ui.css
      includeCSS.jquerui = /{$filepath.css}jquery/ui/themes/vader/jquery-ui.css
      includeJS.jquery = /{$filepath.script}vendor/jquery.js
      includeJS.jqueryui = /{$filepath.script}vendor/jquery-ui.js
      includeJS.modernizr = /{$filepath.script}vendor/custom.modernizr.js
      includeJS.respond = /{$filepath.script}respond.js
      includeCSS.menu = /{$filepath.css}menu.css
      includeCSS.emtec = /{$filepath.css}emtec_all.css
      includeCSS.font= /{$filepath.css}font.css
      includeJS.emtec = /{$filepath.script}emtec.js
      includeJS.menu = /{$filepath.script}menu.js
      includeJSFooter.google = /{$filepath.script}google.js

      # Pagetitel setzen, Standard wird über config.noPageTitle=0 ausgestellt
      headerData{
            10 = TEXT
            10.field = subtitle // title
            10.wrap = <title>emtec - &nbsp;| </title>

            20=TEXT
            20.value (
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
            )
      }

      meta.keywords.field = keywords
      meta.description.field = description

      10 < template_sectionmenu
      20 < template_content
      30 < template_footer

}











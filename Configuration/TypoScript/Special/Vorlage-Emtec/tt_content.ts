## Content-Elemente formatieren
tt_content {
  # Text-Elemente
  text {
    20 >
    20 = CASE
    20{
      key.field = layout
      0 = TEXT
      0 {
        field = bodytext
        required = 1
        wrap = <div class="layout0">|</div>

        stdWrap.replacement{
          5{
            search = @
            replace = <span class="at-wrap">@</span>
          }
        }
      }
      # Layout für Elemente auf der Startseite (home)
      1 < .0
      1.wrap = <div class="ce_lay_home">|</div>
      # Layout für Elemente auf den Unterseiten (subsites)
      2 < .0
      2.wrap = <div class="ce_lay_subsites">|</div>
      2.stdWrap.replacement{
        10{
          search = <h6>
          replace = <div class="h6-wrap"><h6>
        }
        20{
         search = </h6>
         replace = </h6></div>
        }
      }

      # Layout für Kategorieüberschriften/Seitentitel auf den Unterseiten (Kategorietitel)
      3 < .0
      3.wrap = <div class="ce_lay_cattitle">|</div>
      # Layout für Eingeklapptes Element
      10 < .0
      10.wrap = <div class="hiddencontent collapsed">|</div><div class="showbutton">ERFAHREN SIE MEHR <img src="images/icon_mehr.png" alt="mehr"></div>
      # Layout für "Nur Mobil"-Anzeige (show for small)
      11 < .0
      11.wrap = <div class="show-for-small">|</div>
      # Layout für "Nur Desktop" und große Mobile (hide for small)
      12 < .0
      12.wrap = <div class="hide-for-small">|</div>

    }
  }
  # Standard-Wrap (z.B. Plugins)
}

# Inhaltsobjekte anpassen (Seite ??)
## Klasse für Inhaltsobjekte anpassen
tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {
  key.field = layout
  1.15 = TEXT
  1.15.value = class="content-text-home"
}

# Wandelt Umbrüche in BR-Tags um:
#tt_content.stdWrap.br = 1
# Erlaubt bestimmte Tags im FE (andere sind verboten, werden im BE trotzdem angezeigt!"
#tt_content.stdWrap.HTMLparser.allowTags = b, br, p, span

## Bei Bildern divs entfernen/bzw. anzeigen
tt_content.image.20.layout{
  0 < .default
}
tt_content.image.20 {

  layout.0.value = ###IMAGES###
  #layout.1.value = ###IMAGES###
  #rendering.singleNoCaption.allStdWrap.wrap = <div class="neuertest">|</div>
  rendering.singleNoCaption.allStdWrap.wrap < default
  rendering.singleNoCaption.allStdWrap.wrap.if.isInList.field = section_frame
  rendering.singleNoCaption.allStdWrap.wrap.if.value = 0,1,2,3,4,5,6,7,8,9,10
  rendering.singleNoCaption.singleStdWrap.wrap < default
  rendering.singleNoCaption.singleStdWrap.wrap.if.isInList.field = section_frame
  rendering.singleNoCaption.singleStdWrap.wrap.if.value = 0,1,2,3,4,5,6,7,8,9,10

  rendering.singleNoCaption.allStdWrap.innerWrap.cObject.0.value = |

}

tt_content.image.20.stdWrap.replacement{
  10{
   search = <p>
   replace = <span>
  }
  20{
   search = </p>
    replace = </span>
  }
}

tt_content.stdWrap {
  innerWrap.cObject = CASE
  innerWrap.cObject {
    key.field = section_frame
    # 30 = emtec Kachel
    30 = TEXT
    30.value = <div class="columns small-6 squarepic">|</div>
#    30.outerWrap.override = <tt>|</tt>

  }

}


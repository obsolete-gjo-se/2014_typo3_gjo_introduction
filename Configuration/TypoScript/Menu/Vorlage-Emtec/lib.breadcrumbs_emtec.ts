# Breadcrumbs erzeugen
lib.breadcrumbs = COA
lib.breadcrumbs {
                10 = HMENU
                10 {
                    special = rootline
                        # Beginnend in Ebene 0 (Seitenhirarchie) bis zur aktuellen Seite (Bis zu könnte durch eine positive Zahl begrenzt werden)
                    special.range = 0|-1
                     1 = TMENU
                        #Normalerweise werden Links im MSIE defokussiert (engl. blurred). Das blurring entfernt das häßliche Kästchen um einen angeklickten Link. Wenn diese Eigenschaft gesetzt ist, wird der Link NICHT mit onFocus defokussiert.
                     1.noBlur = 1
                     1.NO.linkWrap = <span class="path_cat">| <img src="{$filepath.image}path_arrow.png" border="0"> </span>
                     1.NO.ATagTitle.field = title
                     1.NO.ATagTitle.noTrimWrap = | zur Seite: |
                     1.CUR = 1
                     1.CUR {
                       linkWrap = <span class="spot5 path_cat" title="Sie befinden sich auf der Seite"> | </span>
                       doNotLinkIt = 1
                     }
                }
            }
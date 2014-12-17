lib.sectionmenu = HMENU
lib.sectionmenu {
  1 = TMENU
  1 {
    expAll = 1
    NO {
      wrapItemAndSub = <li class="top-level">|</li>

    } #NO
    #NO.stdWrap.dataWrap = <div class="menu-icon"><img src="{$filepath.image}{field:tx_emenubgextender_menu_bg_image}"></div>|
    NO.stdWrap.dataWrap = |

    IFSUB = 1
    IFSUB {
      wrapItemAndSub = <li class="top-level has-dropdown">|</ul></li>
      #stdWrap.dataWrap = <div class="menu-icon"><img class="" src="{$filepath.image}{field:tx_emenubgextender_menu_bg_image}"></div><span>|</span>
      #stdWrap.dataWrap = <span>|</span>
      linkWrap = <a>|</a><ul class="dropdown">
      doNotLinkIt = 1
      #linkWrap = |<ul class="dropdown">
      #doNotLinkIt = 0

    } #IFSUB
  }
  2 = TMENU
  2{
    expAll = 1

    NO {
      #wrapItemAndSub = <ul class="dropdown">|</ul>
      linkWrap = <li>|</li>

    } # NO

    IFSUB = 1
    IFSUB{
      wrapItemAndSub = <li class="has-dropdown">|</ul></li>
      #linkWrap = <a>|</a><ul class="dropdown">
      #doNotLinkIt = 1
      linkWrap = |<ul class="dropdown">
      doNotLinkIt = 0
    }
  }# 2

  3 = TMENU
  3{
    expAll = 1

    NO {
      #wrapItemAndSub = <ul class="dropdown">|</ul>
      linkWrap = <li>|</li>

    } # NO

    IFSUB = 1
    IFSUB{
      wrapItemAndSub = <li class="has-dropdown>|</ul></li>
      #linkWrap = <a>|</a><ul class="dropdown">
      #doNotLinkIt = 1
      linkWrap = |<ul class="dropdown">
      doNotLinkIt = 0
    }
  }#3
}

  


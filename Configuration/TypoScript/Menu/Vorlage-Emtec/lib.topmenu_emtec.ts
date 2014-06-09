lib.topmenu_emtec = HMENU
lib.topmenu_emtec {


  ### Level 1

  1 = TMENU
  1 {
    expAll = 1
    NO {
      wrapItemAndSub = <li class="top-level">|</li>

    } #NO
    #NO.stdWrap.dataWrap = <domainexample class="menu-icon"><img class="" src="{$filepath.image}{field:tx_emenubgextender_menu_bg_domainexamplege}"></div><span>|</span>
    NO.stdWrap.dataWrap = <span>|</span>

    IFSUB = 1
    IFSUB {
      wrapItemAndSub = <li class="top-level has-dropdown">|</ul></li>
      #domainexampleWrap.dataWrap = <div class="menu-icon"><img class="" src="{$filepath.image}{field:tx_emendomainexampleextender_menu_bg_image}"></div><span>|</span>
      linkWrap = <a>|</a><ul class="dropdown">
      doNotLinkIt = 1
      #linkWrap = |<ul class="dropdown">
      #doNotLinkIt = 0
      #ATagParams =
    } #IFSUB
  } #1

  ## Zweite Ebene
  2 = TMENU
  2 {
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
  } #2

  ## Dritte Ebene
  3 = TMENU
  3 {
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
  } #3

}
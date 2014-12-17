TCEFORM.tt_content {
  layout{
    altLabels{
      0 = Normal
      1 = home
      2 = subsites
      3 = Kategorietitel
    }
    #addItems.10 = Eingeklappt
    #addItems.11 = Nur Mobil
    #addItems.12 = Nur Desktop
    #addItems.20 = Kachelbild
    removeItems = 0,2,3,4,5,6,7,8,9,10
  }
  header_layout{
    altLabels{
      2 = home
    }
    removeItems = 0,1,3,4,5
  }
}

#<INCLUDE_TYPOSCRIPT: source="FILE:config/internet/global/ts/pageTSconfig.home.ts">
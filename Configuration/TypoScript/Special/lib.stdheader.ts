## Überschriften formatieren (content)
#lib.stdheader.10.1.dataWrap = <div class="content-title">|</div>
#lib.stdheader >
lib.stdheader = CASE
lib.stdheader {
  key.field = header_layout
  default = TEXT
  default.field = header
  default.wrap = <h1>|</h1>
  default.typolink {
    parameter.insertData = 1
    parameter = {field:header_link}
  }
  ## Header auf den Unterseiten (subsite (blau, links))
  1 = TEXT
  1 {
    field = header
    wrap = <h2 class="sub_content_header">|</h2>
    ifEmpty.wrap =
    typolink {
      parameter.insertData = 1
      parameter = {field:header_link}
    }
  }
  ## Header auf der Home-Seite (home)
  2 = TEXT
  2 {
    field = header
    wrap = <h2 class="home_content_header">|</h2>
    ifEmpty.wrap =
    typolink {
      parameter.insertData = 1
      parameter = {field:header_link}
    }
  }

  ## Header ausblenden (Verborgen)
  100 = TEXT
  100 {
    field = header
    wrap =
  }

}

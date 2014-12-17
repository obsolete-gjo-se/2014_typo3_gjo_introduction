# Menu für Mobil, Normlaes Menu in lib.topmenu_
template_sectionmenu = TEMPLATE

template_sectionmenu{

    template = FILE
    template.file = {$filepath.template}main_header.responsive.html
    marks.IMAGEPATH = TEXT
    marks.IMAGEPATH.value = /{$filepath.image}
    marks.SECTIONMENU < lib.sectionmenu_

}
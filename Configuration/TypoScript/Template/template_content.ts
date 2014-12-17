## Content-Bereich
template_content = TEMPLATE
template_content {
    ## Templateauswahl anhand des Backend-Layouts (ID, z.B. 16 = _flat_home)
    ## Default Template ist die subpage.html
    template = CASE
    template{
        key.field = backend_layout
        key.ifEmpty.data = levelfield: -2, backend_layout_next_level, slide

        default = FILE
        default.file = {$filepath.template}subpage.html
        {$_local.BackendLayout_main_body} = FILE
        {$_local.BackendLayout_main_body}.file = {$filepath.template}main_body.html
        {$_local.BackendLayout_subpageOneColumn} = FILE
        {$_local.BackendLayout_subpageOneColumn}.file = {$filepath.template}subpageOneColumn.html
    }

    marks{

        TOPMENU < lib.topmenu_
        IMAGEPATH = TEXT
        IMAGEPATH.value = /{$filepath.image}

        DATAFIELD00 < styles.content.get
        DATAFIELD00.select.where = colPos = 0

        DATAFIELD01 < styles.content.get
        DATAFIELD01.select.where = colPos = 1

        DATAFIELD02 < styles.content.get
        DATAFIELD02.select.where = colPos = 2

        DATAFIELD03 < styles.content.get
        DATAFIELD03.select.where = colPos = 3

        DATAFIELD04 < styles.content.get
        DATAFIELD04.select.where = colPos = 4

        DATAFIELD05 < styles.content.get
        DATAFIELD05.select.where = colPos = 5

        DATAFIELD06 < styles.content.get
        DATAFIELD06.select.where = colPos = 6

        DATAFIELD07 < styles.content.get
        DATAFIELD07.select.where = colPos = 7

        DATAFIELD08 < styles.content.get
        DATAFIELD08.select.where = colPos = 8

        DATAFIELD09 < styles.content.get
        DATAFIELD09.select.where = colPos = 9

        DATAFIELD10 < styles.content.get
        DATAFIELD10.select.where = colPos = 10

        DATAFIELD11 < styles.content.get
        DATAFIELD11.select.where = colPos = 11

        DATAFIELD12 < styles.content.get
        DATAFIELD12.select.where = colPos = 12

        DATAFIELD13 < styles.content.get
        DATAFIELD13.select.where = colPos = 13

        DATAFIELD14 < styles.content.get
        DATAFIELD14.select.where = colPos = 14

        BREADCRUMBS < lib.breadcrumbs


     }
}




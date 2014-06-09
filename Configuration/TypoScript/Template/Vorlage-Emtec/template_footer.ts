template_footer = TEMPLATE
template_footer{

    template = FILE
    template.file = {$filepath.template}main_footer.responsive.html
    marks.IMAGEPATH = TEXT
    marks.IMAGEPATH.value = /{$filepath.image}
    marks.SCRIPTPATH = TEXT
    marks.SCRIPTPATH.value = /{$filepath.script}

}
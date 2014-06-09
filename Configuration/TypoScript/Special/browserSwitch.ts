[browser = msie] && [version = < 7]

    config {
        htmlTag_setParams = class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"
    }

[browser = msie] && [version = = 7]

    config {

        htmlTag_setParams = class="no-js lt-ie9 lt-ie8" lang="en"

    }

[browser = msie] && [version = = 8]

    config {
        htmlTag_setParams = class="no-js lt-ie9" lang="en"
    }

[browser = msie] && [version = > 8]

    config {
        htmlTag_setParams = class="no-js" lang="en"
    }

[browser = msie] && [version = < 9]

    page {
        includeJS.html5 = http://html5shiv.googlecode.com/svn/trunk/html5.js
    }

[browser = chrome]

    config {
        htmlTag_setParams =class="no-js" xmlns:f="http://www.w3.org/1999/html"
    }

[global]

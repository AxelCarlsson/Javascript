export function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

export function insertCssLink(cssFilename) {
    if (document.querySelector(`link[href='${cssFilename}']`) === null) {

        document.getElementsByTagName('head')[0].insertAdjacentHTML("beforeend", `<link href="${cssFilename}" rel="stylesheet" type="text/css">`);
        console.log("inserted")
    } else {
        console.log("not inserted")
    }
}
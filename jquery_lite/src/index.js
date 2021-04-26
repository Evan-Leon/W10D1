const DOMNodeCollection = require("./dom_node_collection");

function $l(selector) {
    let nodeArr = [];
    if (typeof selector === 'string') {
        let selected = document.querySelectorAll(selector);
        selected.forEach( function(node) {
            nodeArr.push(node);
        })
    } else if (selector instanceof HTMLElement){
        nodeArr.push(selector);
    } else {
        selector.each(function (idx, el){
            nodeArr.push(el);
        }) 
    }

    return new DOMNodeCollection(nodeArr);

}


// window.test = new DOMNodeCollection();
window.$l = $l;


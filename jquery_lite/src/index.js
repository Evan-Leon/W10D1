function $l(selector) {
    let nodeArr = [];
    if (typeof selector === 'string') {
        let selected = document.querySelectorAll(selector);
        selected.forEach( function(node) {
            nodeArr.push(node)
        })
    }

    return nodeArr;

}



window.$l = $l;


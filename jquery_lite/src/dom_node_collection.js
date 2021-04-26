class DOMNodeCollection{
    constructor(arr){
        this.arr = arr;
    }
    
    html(str) {
        let nodeHTML = this.arr;
        if (str) {
            nodeHTML.forEach( el => {
                el.innerHTML = str;
            })
        } else {
            return this.arr[0].innerHTML
        }
    }

    empty() {
        this.arr.forEach( el => {
            el.innerHTML = ''
        })
    }

}

// empty
// This method clears out the content of all nodes in the internal array.I set the html of all nodes to an empty string.




module.exports = DOMNodeCollection;
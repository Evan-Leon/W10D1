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

    append(arg) {
        this.arr.forEach(el => el.innerHTML += arg);
    }

    attr(key , value){

        //Object.values(el.attributes)gives us array of htmlelement attributes
        // 

        if (value){
            for (let el of this.arr){
                return el.setAttribute(key, value);
            }
        }else{ 
            return this.arr[0].getAttribute(key);
        //(return attributes for value with that key)
        }
      
    }

    addClass(){

    }

    removeClass(){

    }

}

// empty
// This method clears out the content of all nodes in the internal array.I set the html of all nodes to an empty string.




module.exports = DOMNodeCollection;
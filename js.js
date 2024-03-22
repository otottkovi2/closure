function writeText(){
    let text = "I'm writing this with a closure."
    function writeToDiv(){
        let div = document.querySelector("div");
        div.innerHTML += text;
        console.log("written " + text)
    }
    writeToDiv();
    text = "I'm also writing this"
    writeToDiv();
}

window.onload = writeText;
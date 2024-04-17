console.log("hello World");
let input = document.getElementsByTagName("input")[0];
let button = document.getElementsByTagName("button");
let del = document.querySelector(".del");
let rst = document.querySelector(".reset");

function displayNum() {
    Array.from(button).forEach(element => {
        element.addEventListener("click", (e)=>{
            
            if (e.target.innerText == "RESET" || e.target.innerText == "DEL" || e.target.innerText == "=" ) {
                input.value = input.value + ""
                
            } else {
                input.value = input.value + e.target.innerText
                
            }
        })
    });
}

function DEL() {
    del.addEventListener("click", ()=>{
        let v = input.value
        input.value = v.substring(0, v.length - 1)
    })
}

function reset() {
    rst.addEventListener("click", ()=>{
        input.value = ""
    })
}

function main() {
    red.addEventListener("click", ()=>{

        try {
            input.value = eval(input.value)
        } catch (error) {
            input.value = "ERROR"
        }
    })
    DEL()
    reset()
    displayNum()
}
main()
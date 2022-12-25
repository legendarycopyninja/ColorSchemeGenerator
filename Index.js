const submit = document.getElementById('get-color')
let colorsArray = []
const colorContainer = document.getElementById('color')

submit.addEventListener('click',function(e){
    e.preventDefault()
    render() 
})

function render(){
    const selectedMode = document.getElementById('selected-mode').value
    const selectedColor = document.getElementById('color-picker').value.slice(1)
    console.log(selectedMode)
    console.log(selectedColor)
    let html = ``
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&format=json&mode=${selectedMode}&count=6`)
    .then(res => res.json())
    .then(data => {
        colorsArray = data.colors
        console.log(colorsArray)
        for (color of colorsArray) {
            html +=` <div class="colorplate">
            <p class="colorbox" style="background-color:${color.hex.value} ;" >
            <span>${color.name.value}</span></p>
                <p class="hex" data-color="${color.hex.value}" >${color.hex.value}</p> </div>`
        }
        colorContainer.innerHTML = html   
    })
    
   const copiedValue = document.querySelector('[data-color]')

   copiedValue.forEach(el=> el.addEventListener('click',() => {
    if(navigator.clipboard.writeText(el.dataset['color'])) {
        console.log(copiedValue)
    }
})
)

}








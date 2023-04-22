const nodeImage = document.querySelector('img');


//CAMBIAR EL COLOR DEL 
nodeImage.style.setProperty("--base", "red")


//capturo el input de spacing
const inputSpacing = document.querySelector("#spacing");

//coapturo el input del blur
const inputBlur = document.querySelector('#blur')

//capturo el input de los colores
const inputBase = document.querySelector('#base');

//capturo el span
const spanText = document.querySelector(".hl");

//cambiar el padding 
inputSpacing.addEventListener("input", (e) =>{
    const spacingValue = e.target.value + "px";
    nodeImage.style.setProperty("--spacing", spacingValue)
    
})

//cambiar la opacidad
inputBlur.addEventListener("input", (e) =>{
    const blurValue = e.target.value + "px";
    nodeImage.style.setProperty("--blur", blurValue)
})

//cambiar los colores

inputBase.addEventListener("input", (e) =>{
    const baseValue = e.target.value;
    nodeImage.style.setProperty("--base", baseValue);
    spanText.style.setProperty("--base",baseValue); 
})

 
 
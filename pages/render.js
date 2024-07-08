const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const input = document.getElementById('input')


btn1.onclick = () => {
    console.log(myAPI.version)    //直接获得window属性内的abc
}

btn.onclick = () => {
    myAPI.saveFile(input.value)
}
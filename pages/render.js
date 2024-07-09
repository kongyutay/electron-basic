const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const input = document.getElementById('text')


btn1.onclick = () => {
    console.log(myAPI.version)    //直接获得window属性内的abc
}

btn2.onclick = () => {
    myAPI.saveFile(input.value)
}

btn3.onclick = async () => {
    //告诉主进程要读
    let data = await myAPI.readFile()
    alert(data)
}
let suggest=["sing a song","play the guitar","play the piano","play the violin"] 
function suggestactivity(){
    const randomsuggest = Math.floor(Math.random() * suggest.length)
    document.getElementById("result").innerHTML = suggest[randomsuggest]
}
function addactivity(){
    const addactivity = document.getElementById("input").value.trim()
    if (addactivity != "") suggest.push(addactivity)
        document.getElementById("input").value = ""
}
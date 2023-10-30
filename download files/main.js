// Download Json object to Json File
const download = (content, fileName, contentType) => {

    const file = new Blob([content], { type: contentType });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();

}

let data = {
    title : "note",
    details : "new note aded"
}

const downloadBtn = document.getElementById('downloadBtn')

downloadBtn.addEventListener('click', function(){
    download(JSON.stringify(data), "notes.json", "application/json");
})
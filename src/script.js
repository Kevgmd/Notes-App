// save the text typed in the browser via web storage
var textarea = document.querySelector('textarea');

textarea.addEventListener("input", function () {
    var textWritten = textarea.value;
    localStorage.setItem("written", textWritten);
});

var written = localStorage.getItem("written");

if (written) {
    textarea.value = written;
}
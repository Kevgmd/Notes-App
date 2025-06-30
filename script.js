//Save the text typed in the browser via web storage

const textarea = document.querySelector('textarea');

textarea.addEventListener("input", function () {
    const textWritten = textarea.value;
    localStorage.setItem("written", textWritten);
});

const written = localStorage.getItem("written");

//Simple segment to make the text written still be displayed when refreshing the page.
if (written) {
    textarea.value = written;
}
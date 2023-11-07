var write = document.getElementById("write");

write.addEventListener("input", function() {
    var textWritten = write.value;
    localStorage.setItem("written", textWritten);
});

var written = localStorage.getItem("written");

if (written) {
    write.value = written;
}
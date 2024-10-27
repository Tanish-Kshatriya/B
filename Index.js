function showAlert() {
        alert("Try Again Later, Currently Servers are off");
    }
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
    function runCode() {
        const code = document.getElementById("codeEditor").value;
        const previewFrame = document.getElementById("livePreview").contentWindow.document;
        previewFrame.open();
        previewFrame.write(`<style>body { color: red; }</style>` + code);  // Applying red color to text
        previewFrame.close();
    }
// Toggle the FAB menu
function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Construct the mailto link
    const mailtoLink = `mailto:tanishkshatriya9@gmail.com?subject=Message from ${name}&body=${message} (Reply to: ${email})`;

    // Open the user's email client
    window.location.href = mailtoLink;
}
// Toggle the FAB menu
document.querySelector('.fab-main').addEventListener('click', function() {
    document.querySelector('.fab-container').classList.toggle('open');
});
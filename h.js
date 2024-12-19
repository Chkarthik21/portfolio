// Function to open the modal with the corresponding certificate document
function openModal(certificateFile) {
    var modal = document.getElementById('cert-modal');
    var embed = document.getElementById('cert-embed');
    
    // Set the source of the embed to the certificate file
    embed.src = certificateFile;
    
    // Display the modal
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('cert-modal');
    var embed = document.getElementById('cert-embed');
    
    // Hide the modal
    modal.style.display = "none";
    
    // Clear the embed source
    embed.src = "";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById('cert-modal');
    if (event.target == modal) {
        closeModal();
    }
}

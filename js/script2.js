const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

thumbnails.forEach(thumbnail => {
    thumbnail.onclick = function() {
        modal.style.display = "block";
        modalImage.src = this.src; // Affiche l'image cliquée en grand
    };
});

document.getElementById('closeModal').onclick = function() {
    modal.style.display = "none"; // Ferme le modal
};

// Ferme le modal si l'utilisateur clique en dehors de l'image
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

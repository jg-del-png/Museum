// Modal logic
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".souvenir-item img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.dataset.large;
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Phase 1 cart prompt
function addToCart(itemName, price) {
    alert(`${itemName} added to cart!`);
}

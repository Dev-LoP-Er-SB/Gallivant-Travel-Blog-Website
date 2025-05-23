// dropdown of category & blog list items
const CategoryDropdownContainer = document.getElementById("category-dropdown-container");
const BlogDropdownContainer = document.getElementById("blog-dropdown-container");

const CategoryIcon = document.getElementById("category-dropdown-icon");
const BlogIcon = document.getElementById("blog-dropdown-icon");

CategoryIcon.addEventListener("click", () => {
    CategoryIcon.style.transform = "rotateX(180deg)";
    CategoryIcon.style.transition = "0.5s ease-in-out";
    CategoryDropdownContainer.style.display = "flex";  
})
document.addEventListener("mousedown", () => {
    CategoryIcon.style.transform = "rotateX(0deg)";
    CategoryIcon.style.transition = "0.5s ease-in-out";
    CategoryDropdownContainer.style.display = "none";  
})
CategoryIcon.addEventListener("mouseenter", () => {
    CategoryIcon.style.transform = "rotateX(0deg)";
    CategoryIcon.style.transition = "0.5s ease-in-out";
    CategoryDropdownContainer.style.display = "none";  
})
BlogIcon.addEventListener("click", () => {
    BlogIcon.style.transform = "rotateX(180deg)";
    BlogIcon.style.transition = "0.5s ease-in-out";
    BlogDropdownContainer.style.display = "flex";  
})
document.addEventListener("mousedown", () => {
    BlogIcon.style.transform = "rotateX(0deg)";
    BlogIcon.style.transition = "0.5s ease-in-out";
    BlogDropdownContainer.style.display = "none";  
})
BlogIcon.addEventListener("mouseenter", () => {
    BlogIcon.style.transform = "rotateX(0deg)";
    BlogIcon.style.transition = "0.5s ease-in-out";
    BlogDropdownContainer.style.display = "none";  
})
// dropdown of category & blog list items ends here


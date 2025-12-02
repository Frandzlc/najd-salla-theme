
function toggleSidebar() {
    let sb = document.getElementById("sidebar");
    sb.style.width = sb.style.width === "250px" ? "0" : "250px";
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
}


document.getElementById("copy").onclick = () => {
    const textToCopy = document.querySelector(".clipText");
    navigator.clipboard.writeText(textToCopy.textContent)
}
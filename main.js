const shareButtons = document.querySelectorAll('#share-button')
console.log(shareButtons)

async function copyText(e) {
    // prevents button from going to site
    e.preventDefault();
    link = this.getAttribute('link')
    console.log(link)

    try {
        await navigator.clipboard.writeText(link)
        alert("Copied link to clipboard!")
    } catch(err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))
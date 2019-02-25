const themeSwitcher = document.getElementById('theme_switcher');

themeSwitcher.addEventListener('change', () => {
    swapStyleSheet(themeSwitcher.value)
})

function swapStyleSheet(sheet) {
    for(let i = 0; i < document.styleSheets.length; i++) {
        const styleSheet = document.styleSheets[i]

        styleSheet.disabled = styleSheet.title && styleSheet.title !== sheet
    }
}
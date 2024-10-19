function showSectionById(idToShow, idToHide) {
    document.getElementById(idToHide).classList.add('hidden');
    document.getElementById(idToShow).classList.remove('hidden');
}

function swapButtonStyles(button1, button2) {
    // Swap the classes between the two buttons
    let tempClasses = button1.className;
    button1.className = button2.className;
    button2.className = tempClasses;
}

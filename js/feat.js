function showSectionById(idToShow, idToHide){
    document.getElementById(idToHide).classList.add('hidden');
    document.getElementById(idToShow).classList.remove('hidden');
}
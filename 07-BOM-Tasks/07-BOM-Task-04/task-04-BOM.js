function deleteSelectedName() {
    let select = document.getElementById('nameList');
    let selectedIndex = select.selectedIndex;

    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
    }

    if (select.options.length === 0) {
        document.getElementById('message').textContent = "You have deleted everything. Your list is empty.";
    }
}
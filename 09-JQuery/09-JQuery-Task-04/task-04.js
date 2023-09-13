const checkboxes = document.querySelectorAll("input[type='checkbox']");
        let checkedCount = 0;

        checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener("change", function() {
                if (this.checked) {
                    checkedCount++;
                    if (checkedCount >= 3) {
                        checkboxes.forEach(function(cb) {
                            if (!cb.checked) {
                                cb.disabled = true;
                            }
                        });
                    }
                } else {
                    checkedCount--;
                    checkboxes.forEach(function(cb) {
                        cb.disabled = false;
                    });
                }
            });
        });
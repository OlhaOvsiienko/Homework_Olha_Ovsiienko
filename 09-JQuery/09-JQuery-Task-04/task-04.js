// Corrected Version
$(document).ready(function() {
    let checkboxes = $('input[type="checkbox"]');
    checkboxes.change(function() {
      let checkedCount = checkboxes.filter(':checked').length;
      if (checkedCount >= 3) {
        checkboxes.not(':checked').prop('disabled', true);
      } else {
        checkboxes.prop('disabled', false);
      }
    });
  });

// Previous Version
/*const checkboxes = document.querySelectorAll("input[type='checkbox']");
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
        });*/

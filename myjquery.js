$(document).ready(function() {
    $('.assignment-content').fadeTo('slow', 1);

    var dialog = document.getElementByID('dialog');
    var showBtn = document.getElementByID('show');
    var closeBtn = document.getElementByID('close');

    showBtn.addEventListener('click', function(e){
      e.preventDefault();
      dialog.show();
    });

    closeBtn.addEventListener('click', function(e){
      e.preventDefault();
      dialog.close();
    });
});


$(document).ready(function() {
    $('.assignment-content').fadeTo('slow', 1);

    // var dialog = document.getElementByID('dialog');
    // var showBtn = document.getElementByID('show');
    // var closeBtn = document.getElementByID('close');

    // showBtn.addEventListener('click', function(e){
    //   e.preventDefault();
    //   dialog.show();
    // });

    // closeBtn.addEventListener('click', function(e){
    //   e.preventDefault();
    //   dialog.close();
    // });
    function getFile(id){
        var path = "other/"+id+".txt"
        $.get(path, function(data){
            $("#ajax-response").html(data);
            });  
    }

    $(".Button").click(function(){
        var id = $(this).attr("id");
        getFile(id);
        var num = Number(id);
        num += 1;
        id = num.toString();
        $(this).attr("id", id);
    });
    

});


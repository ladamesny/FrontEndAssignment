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
    

    //Create two functions with the same name but different functionality. Put them in different namespaces
    //so that they both can be used without conflict.

    //First function - add two
    function add_two(num){
            num +=2;
            console.log(num);
        return num;
    }

    //Second function
    //Create an object to act as separate namespace
    var MYADD = {
        //set instance of MYADD
        append_two: function(word){
            //setter function
            this.new_word = word + " two";
            //getter function
            this.add_two = function(){
                return this.new_word;
            };
        }
    };

    var result = add_two(5);
    $("#adder-1").html(result);
    var adder = new MYADD.append_two("five");
    $("#adder-2").html(adder.add_two("five"));

});


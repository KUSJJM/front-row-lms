    

    //K-Number and password validation
    function validateNoInput() {
    var x = document.forms["myForm"]["knumber"].value;
    var y = document.forms["myForm"]["password"].value;
    if (x == null || x == "" || y == null || y == "") 
    {
    alert("Empty fields");
    return false;
    }
    else if (x.charAt(0) != 'k')
    {
     alert("Invalid K-Number")
     return false;
    }
     else
    {
     return true;
    }
}
    //Modiule Switcher code
    $(function()
    {
      $("dd:not(:first)").hide();
      $("dt a").click(function()
      {
        $("dd").slideUp("fast");
        $(this).parent("dt").next("dd").slideDown("normal");
      });
    });



    
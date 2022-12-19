// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/names.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });


    // Unobtrusive event binding
    document.getElementById("buttonJSON")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils2
          .sendGetRequest("data/names.json", 
            function (res) {
              var message = 
                res.firstName + " " + res.lastName
              if (res.likesChinese) {
                message += " likes Chinese food";
              }
              else {
                message += " doesn't like Chinese food";
              }
              message += " and uses ";
              message += res.numberofdisplay + 1;
              message += " displays for coding.";

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });  
  



  }
);
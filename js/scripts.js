$(document).ready(function() {
  // $("#javaScripts").click(function(){
    // $("#javaScripts").toggle();
    // $("#javaScripth").toggle();
  // });
  $("p.defAppear").click(function() {
    $(this).nextUntil("p.defAppear", "p.defInitHidden").toggleClass("defHidden");
  });
});

$(document).ready(function() {
  $("p.defAppear").click(function() {
    $(this).nextUntil("p.defAppear", "p.defInitHidden").toggleClass("defHidden");
  });
});

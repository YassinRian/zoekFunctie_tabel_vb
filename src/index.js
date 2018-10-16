$(document).ready(function() {
var index_tr = [];
  $("#search").keyup(function () {
  var var_input = $.trim($("#search").val().replace(/\s+/g, '').toUpperCase());

  $(".xt.yassin_tabel tr").slice(10).each(function(index) {
      $(this).find("td").each(function(idex) {
          if ($(this).find("span").text() === "Lasten Budget")
             $(this).parent().slice(0,idex).each(function (index) {
               var index_ = '';
               index_ = $(this).index();
               var test = $(this).find("td").slice(0, idex).find("span").text().replace(/\u00A0/g, '').toUpperCase();
               if (test.indexOf(var_input) > -1 )
                $(this).parent().find("tr").not(".tableRow").slice(index_, index_ + 3).hide();
            });
        });
    });
  });
});

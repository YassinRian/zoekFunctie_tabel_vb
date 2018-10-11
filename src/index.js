import $ from "jquery";

$(document).ready(function() {
  //   $("#search").keyup(function() {
  //     var value = this.value;
  //     // $(".xt.yassin_tabel tr").slice(5).each(function(index) {
  //     //     if (index === 0) return;
  //     //     var id = $(this).find("td").slice(0,2).text();
  //     //     $(this).toggle(id.indexOf(value) !== -1);
  //     // });
  // //     $(".xt.yassin_tabel tr")
  // //       .slice(6).each(function() {
  // //         var zoekwaarde = $(this).find("td").each(function () {
  // //           })
  // //           .slice(0)
  // //           .find("span")
  // //           .text();
  // //         console.log(zoekwaarde);
  // //       });
  // //   });

  // $(".xt.yassin_tabel tr")
  //   .slice(10)
  //   .each(function(index) {
  //     if (index === 0) {
  //       $(this)
  //         .find("td")
  //         .each(function(index) {
  //           if (index === 0) {
  //             var bla = $(this)
  //               .find("span")
  //               .text();
  //             console.log(bla);
  //           }
  //         });
  //     }
  //   });
  var index_td = [];
  var index_tr = [];
  $(".xt.yassin_tabel tr")
    .slice(10)
    .each(function(index) {
      $(this)
        .find("td")
        .each(function(idex) {
          if (
            $(this)
              .find("span")
              .text() === "Lasten Budget"
          )
            // console.log(idex);
            // console.log(
            //   $(this)
            //     .parent()
            //     .index()
            // );
            // index_td.push(idex);
            index_tr.push(
              $(this)
                .parent()
                .index()
            );
        });
    });
  console.log(index_td);
  console.log(index_tr);
});

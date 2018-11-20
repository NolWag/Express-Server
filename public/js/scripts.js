$('#contain').dragend();

$("#btn").on("click", function() {
   $("#contain").dragend({
    scrollToPage: 2
  });
});

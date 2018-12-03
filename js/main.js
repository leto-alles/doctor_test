$(function() {
    $('.block-content__value').click(function(e) {
        $(".block-description").addClass("active");
    }),
    $('.value_correct').click(function(e) {
        $('.value_correct').addClass("correct_answer"),
        $('.value_uncorrect').removeClass("uncorrect_answer");
    }),  
    $('.value_uncorrect').click(function(e) {
        $('.value_correct').removeClass("correct_answer");
        $('.value_uncorrect').removeClass("uncorrect_answer"),
        $(this).addClass("uncorrect_answer");
    });  
});
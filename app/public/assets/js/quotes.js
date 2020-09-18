$(document).ready(function () {

    $('#selectQuoteAuthor').select2({
        placeholder: "Enter the author of the quote",
        tags: true
    });

    $("#formQuote").on("submit", function (event) {
        event.preventDefault();

        var formUrl = $(this).attr('action');
        var quoteText = $("textarea[name='quote']").val();
        var optionAuthorSelected = $('#selectQuoteAuthor').find(':selected');
        var idAuthorSelected = optionAuthorSelected.val();
        var authorName = '';
        if (optionAuthorSelected.attr('data-author') !== 'true') {
            authorName = idAuthorSelected;
            idAuthorSelected = -999;
        }

        $.ajax({
            method: "POST",
            url: formUrl,
            data: {quote: quoteText, id_author: idAuthorSelected, author: authorName},
            dataType: "json",
            success: function (response) {
                console.log(response)
            },
            error:function(response){
                var responseJson = response.responseText;
                console.log(responseJson);
            }
        });
    });
});
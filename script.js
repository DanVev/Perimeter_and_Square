/**
 * Created by User on 29.12.2016.
 */
$(document).ready(function () {
    $("input[name = 'insert']").click(function () {
        var a = parseFloat($('#a').val());
        var b = parseFloat($('#b').val());
        var c = parseFloat($('#c').val());
        if ((((a + b) > c) && ((b + c) > a) && ((c + a) > b) && (a > 0) && (b > 0) && (c > 0))) {
            var p = '<div class="button perimeter" ">Perimeter</div>';
            var s = '<div class="button square" >Square</div>';
            $('table').append("<tr>" +
                "<td class = 'check'>" + "<input type='checkbox' />" + "</td>" +
                "<td class = 'a'>" + a + "</td>" +
                "<td class = 'b'>" + b + "</td>" +
                "<td class = 'c'>" + c + "</td>" +
                "<td>" + p + s + "</td>" +
                "<td class = 'p'></td>" +
                "<td class = 's'></td>" + +"</tr>");
            $(document).on("click", ".perimeter", function () {
                //$(this).fadeOut();
                var row = $(this).closest("tr")[0].childNodes;
                var p = parseFloat(row[1].innerHTML) + parseFloat(row[2].innerHTML) + parseFloat(row[3].innerHTML);
                row[5].innerHTML = p;

            });
            $(document).on("click", ".square", function () {
                var row = $(this).closest("tr")[0].childNodes;
                var p = (parseFloat(row[1].innerHTML) + parseFloat(row[2].innerHTML) + parseFloat(row[3].innerHTML)) / 2;
                row[6].innerHTML = Math.sqrt(p * (p - parseFloat(row[1].innerHTML)) * (p - parseFloat(row[2].innerHTML)) * (p - parseFloat(row[3].innerHTML)));
            });
            $(document).on("click", '#del', function () {
                $('.check').each(function () {
                    var $row = $(this)[0];
                    console.log($row);
                    if ($row.firstChild.checked) $(this).closest("tr").remove();
                });
            });
        }
        else
            alert("Incorrect data! Try again");
    });
    /*    $('#del').click(function () {
     $('tr').each(function (i, e) {
     console.log($(e).childNodes);
     if ($(e).firstChild.checked) $(this).remove();
     });
     });*/
});



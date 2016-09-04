// Write your Javascript code.

$(document).ready(function () {

    var btnNaytaVaraukset = "#btnNaytaVaraukset";
    var btnVaraaUusiAika = "#btnVaraaUusiAika";
    var txtHenkilotunnus = "#txtHenkilotunnus";
    var lblValittuHenkilotunnus = "#lblValittuHenkilotunnus";
    var containerPotilaanVaraukset = ".container-potilaan-varaukset";
    var containerPotilaanVarauksetTable = ".container-potilaan-varaukset div.table-responsive";
    var containerPotilaanVarauksetEi = ".container-potilaan-varaukset .container-ei-loytynyt";

    $(".container-potilaan-varaukset table tbody tr").on('click', function () {

        var valittuRivi = $(this);
        var varattuAika = valittuRivi.find("#txtVarattuAika").text();
        var toimipiste = valittuRivi.find("#txtToimipiste").text();
        var palvelu = valittuRivi.find("#txtPalvelu").text();
        var tilaavaYksikko = valittuRivi.find("#txtTilaavaYksikko").text();
        var lisatiedot = valittuRivi.find("#txtLisatiedot").text();

        $("#lblModalVarattuAikaArvo").text(varattuAika);
        $("#lblModalToimipisteArvo").text(toimipiste);
        $("#lblModalPalveluArvo").text(palvelu);
        $("#lblModalTilaavaYksikkoArvo").text(tilaavaYksikko);
        $("#lblModalLisatiedotArvo").text(lisatiedot);
        $('#myModal').modal('show');
    });

    $(btnNaytaVaraukset).on('click', function () {
        var valittunHenkilotunnus = $(txtHenkilotunnus).val();
        $(lblValittuHenkilotunnus).text(valittunHenkilotunnus);
        if (valittunHenkilotunnus === '010101-101X') {
            $(containerPotilaanVaraukset).show();
            $(containerPotilaanVarauksetTable).show();
            $(containerPotilaanVarauksetEi).hide();
        } else {
            $(containerPotilaanVaraukset).show();
            $(containerPotilaanVarauksetTable).hide();
            $(containerPotilaanVarauksetEi).show();
        }
        
    });

    $(btnVaraaUusiAika).on('click', function () {

    });

});

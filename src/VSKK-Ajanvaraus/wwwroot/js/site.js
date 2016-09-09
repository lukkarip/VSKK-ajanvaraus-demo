// Write your Javascript code.

$(document).ready(function () {

    var btnNaytaVaraukset = "#btnNaytaVaraukset";
    var btnVaraaUusiAika = "#btnVaraaUusiAika";
    var txtHenkilotunnus = "#txtHenkilotunnus";
    var lblValittuHenkilotunnus = "#lblValittuHenkilotunnus";
    var containerPotilaanVaraukset = ".container-potilaan-varaukset";
    var containerPotilaanVarauksetTable = ".container-potilaan-varaukset div.table-responsive";
    var containerPotilaanVarauksetEi = ".container-potilaan-varaukset .container-ei-loytynyt";

    var kaikkiPotilaanVaraukset = "container-potilaan-varaukset table tbody tr";

    var btnPeruAika = "#btnPeruAika";
    var divModalBodyPeruAika = "#divModalBodyPeruAika";
    var btnPeruAjavarausPeruutus = "#btnPeruAjavarausPeruutus";
    var btnPeruAjanvarausVahvistus = "#btnPeruAjanvarausVahvistus";

    // Lisätään testailuja varten oikea henkilötunnus suoraan koodiin sivun latauksessa:
    $(txtHenkilotunnus).val("010101-101X");

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

    $(".container-potilaan-varaukset table tbody tr").on('click', function () {

        $(divModalBodyPeruAika).hide();

        var valittuRivi = $(this);
        var varauksenNumero = valittuRivi.data("varausnumero");
        var varattuAika = valittuRivi.find("#txtVarattuAika").text();
        var toimipiste = valittuRivi.find("#txtToimipiste").text();
        var palvelu = valittuRivi.find("#txtPalvelu").text();
        var tilaavaYksikko = valittuRivi.find("#txtTilaavaYksikko").text();
        var lisatiedot = valittuRivi.find("#txtLisatiedot").text();

        $("#varauksenNumero").val(varauksenNumero);
        $("#lblModalVarattuAikaArvo").text(varattuAika);
        $("#lblModalToimipisteArvo").text(toimipiste);
        $("#lblModalPalveluArvo").text(palvelu);
        $("#lblModalTilaavaYksikkoArvo").text(tilaavaYksikko);
        $("#lblModalLisatiedotArvo").text(lisatiedot);
        $('#myModal').modal('show');
    });

    $(btnPeruAika).on('click', function () {
        $(divModalBodyPeruAika).show("slow", function () {});
    });
    $(btnPeruAjavarausPeruutus).on('click', function () {
        $(divModalBodyPeruAika).hide("slow", function () { });
    });
    $(btnPeruAjanvarausVahvistus).on('click', function () {
        var varauksenNumero = $('#varauksenNumero').val();
        var merkkijono = "*[data-varausnumero=\"" + varauksenNumero + "\"]";
        $(merkkijono).remove();
        $('#myModal').modal('hide');
    });

});

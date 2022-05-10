function calcpedido() {
    //entrada
    sd = document.getElementById("sanduiche").value;
    bb = document.getElementById("bebida").value;
    btt = document.getElementById("batata").value;


    qs = document.getElementById("quantSand").value;
    qb = document.getElementById("quantBeb").value;
    qbt = document.getElementById("quantBat").value;

    //processamento  

    //hamburguer
    if (sd == "bigmac") {
        valorsd = 14.90;
        imagem = "img/bigmac.jpg"
    } else if (sd == "mcfish") {
        valorsd = 12.90;
        imagem = "img/mcfish.jpg"
    } else if (sd == "qtr") {
        imagem = "img/quarterao.jpg"
        valorsd = 13.90;
    }

    //bebida
    if (bb == "p") {
        valorbb = 5.90;
    } else if (bb == "m") {
        valorbb = 6.90;
    } else if (bb = "g") {
        valorbb = 7.90;
    }

    //batata
    if (btt == "p") {
        valorbtt = 5.90;
    } else if (btt == "m") {
        valorbtt = 6.90;
    } else if (btt = "g") {
        valorbtt = 7.90;
    }


    total = (valorsd*qs) + (valorbb*qb) + (valorbtt*qbt);

    //saida
    document.getElementById("total").value = total.toFixed(2);
    document.getElementById("foto").src = imagem;
}
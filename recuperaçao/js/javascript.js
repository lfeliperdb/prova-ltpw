function calcpedido() {
    //entrada
    sd = document.getElementById("sanduiche").value;
    bb = document.getElementById("bebida").value;
    btt = document.getElementById("batata").value;

    qs = document.getElementById("quantSand").value;
    qb = document.getElementById("quantBeb").value;
    qbt = document.getElementById("quantBat").value;


    //processamento  
    if (sd == "bigmac") {
        valorsd = 14,90
    } else if (sd == "mcfish") {
        valorsd = 12,90 
    } else if (sd == "qtr") {
        valorsd = 13,90
    }    


    total = (valorsd*qs) 

    //saida
    document.getElementById("total") = total.toFixed(2);
}
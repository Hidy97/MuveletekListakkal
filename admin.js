export function tablazatbanMegjelenit(OBJEKTUMLISTA, tablazat) {
    let text = "<table>";
    text += "<tr><th>Név⇅</th><th>Kor⇅</th><th>Fajta⇅</th></tr>"
    for ( let i=0; i<OBJEKTUMLISTA.length; i++ ) {
        text += "<tr>" +"<td>"+ OBJEKTUMLISTA[i].nev +"</td>"+ "<td>" + OBJEKTUMLISTA[i].kor + "</td>" + "<td>" + OBJEKTUMLISTA[i].fajta + "</td>" + "</<tr>";
    }
    /**Jquery appendet használ */
    $(tablazat[0]).append(text);
    text = "/table";
}
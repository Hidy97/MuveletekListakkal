import { OBJEKTUMLISTA, SZAMLISTA, SZOVEGLISTA } from "./adat.js";
import { rendezesObjektum } from "./rendezes.js";
import { rendezesSzam } from "./rendezes.js";
import { rendezesSzoveg } from "./rendezes.js";
import { veletlenSorrend } from "./rendezes.js";
import { szurNevSzerint } from "./szures.js";
import { szurKorSzerint } from "./szures.js";
import { tablazatbanMegjelenit } from "./admin.js";

$(function(){
    console.log("************");
    console.log(SZOVEGLISTA);
    rendezesSzoveg(SZOVEGLISTA);
    console.log(SZOVEGLISTA);
    console.log("************");
    console.log(SZAMLISTA);
    rendezesSzam(SZAMLISTA);
    console.log(SZAMLISTA);
    console.log("************");
    console.log(SZAMLISTA);
    veletlenSorrend(SZAMLISTA);
    console.log(SZAMLISTA);
    console.log("************");
    console.log(SZOVEGLISTA);
    veletlenSorrend(SZOVEGLISTA);
    console.log(SZOVEGLISTA);
    console.log("************");
    console.log(OBJEKTUMLISTA);
    rendezesObjektum(OBJEKTUMLISTA, "kor");
    console.log(OBJEKTUMLISTA);
    console.log("************");
    rendezesObjektum(OBJEKTUMLISTA, "nev");
    console.log(OBJEKTUMLISTA);
    console.log("************");
    rendezesObjektum(OBJEKTUMLISTA, "fajta");
    console.log(OBJEKTUMLISTA);
    console.log("************");

    console.log("Szűrés név szerint")
    let szuresiFeltetel = "d";
    var szurtLista = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel)
    console.log(szurtLista);

    console.log("************");
    console.log("Szűrés kor szerint")
    let szurFelt = "<12";
    const szurLista = szurKorSzerint(OBJEKTUMLISTA, szurFelt)
    console.log(szurLista);

    console.log("************");
    /**A html kódban lévő input mezőben lévő érték szerint szűrjünk*/
    /**
     * 1. elérjük az input elemet
     * 2. sas
     * 3. A szűrési érték heléyre beírjuk az input elem value értékét
     * 4. Mikor kell ennek megtörténni? - amikor megváltozik az input elem értéke, akkor 3.
     * 5. meghívjuk a szűrő függvényt
     */
    /**1. */
    const nevELEM = $("#nev");
    /**3. */
    
    /**eseménykezelő a beviteli mezőre: change, keyup */
    nevELEM.on("keyup", function(){
        szuresiFeltetel = nevELEM.val()
        szurtLista = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel)
        console.log(szurtLista);
    });

    const tablazat = document.querySelectorAll("#tablazat")
    tablazatbanMegjelenit(OBJEKTUMLISTA, tablazat);
});

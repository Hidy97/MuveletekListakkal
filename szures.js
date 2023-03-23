export function szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel){
    const eredmenyLista = OBJEKTUMLISTA.filter(function(kutya){
        console.log(kutya);
        return kutya.nev.toLowerCase().includes(szuresiFeltetel.toLowerCase());
    });
    console.log(eredmenyLista);
    return eredmenyLista;
}

export function szurKorSzerint(OBJEKTUMLISTA, szurFelt){
    const eredmenyLista = OBJEKTUMLISTA.filter(function(kutya){
        console.log(kutya);
        return eval(kutya.kor + szurFelt);
    });

    console.log(eredmenyLista);
    return eredmenyLista;
}
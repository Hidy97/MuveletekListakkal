
export function rendezesSzoveg(lista){
    lista.sort();
}

export function rendezesSzam(lista){
    lista.sort(function(a, b){
        //console.log(a, b, a - b)
        return a - b //ha ez az érték negatív, akkor megcseréli a két elemet, ha pozitív akkor nem
    });
}

export function veletlenSorrend(lista){
    lista.sort(function(x, y){
        return Math.random() * 20 - 10;
    });
}

function szamSzerint(lista, kulcs){
    lista.sort(function(a, b){
        return a[kulcs] - b[kulcs];
    });
}

function szovegSzerint(lista, kulcs){
    lista.sort(function(a, b){
        if ( a[kulcs] > b[kulcs]){
            return 1;
        }else{
            return -1;
        }
    });
}

export function rendezesObjektum(lista, kulcs){
    if(typeof kulcs == "number"){
        szamSzerint(lista, kulcs);
    }else{
        szovegSzerint(lista, kulcs);
    }
}
function identificarBandeira(numeroCartao) {
    const visaRegex = /^4/;
    const masterCardRegex = /^(5[1-5]|2(2[2-9][0-9]|2[3-9][0-9]|[3-6][0-9]{2}|7[0-1][0-9]|720))/;
    const eloRegex = /^(4011|4312|4389|4514|4576|5041|5066|509[0-9]|6277|6362|6363|650|651|652)/;
    const amexRegex = /^3[47]/;
    const discoverRegex = /^(6011|65|64[4-9])/;
    const hipercardRegex = /^6062/;

    if (visaRegex.test(numeroCartao)) {
        return "Visa";
    } else if (masterCardRegex.test(numeroCartao)) {
        return "MasterCard";
    } else if (eloRegex.test(numeroCartao)) {
        return "Elo";
    } else if (amexRegex.test(numeroCartao)) {
        return "American Express";
    } else if (discoverRegex.test(numeroCartao)) {
        return "Discover";
    } else if (hipercardRegex.test(numeroCartao)) {
        return "Hipercard";
    } else {
        return "Bandeira desconhecida";
    }
}

const numeroCartao = "5201 9436 7533 3113";
console.log(identificarBandeira(numeroCartao));
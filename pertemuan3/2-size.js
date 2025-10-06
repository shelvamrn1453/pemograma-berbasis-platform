let isSize = (ukuran) => {
    switch(ukuran) {
        case "s":
            return "kecil";
            break;
        case "M":
            return "medium";
            break;
        default:
            return "tidak terdefinisi";
            break;
    }
}
console.log(isSize("m"));
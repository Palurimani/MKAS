function stringsContChara(strings, chara) {
    return strings.filter(str => str.includes(chara));
}


const strings = ["Mani", "anjali", "anushka", "aishwarya"];
const chara = "i";
console.log(stringsContChara(strings, chara)); 

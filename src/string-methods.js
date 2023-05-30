/* concat */
// const str1 = "pdp";
// const str2 = "-g-10";

// const str3 = str1.concat(str2);
// str3;

/* endsWith */
// const str = 'arslonbek yaxshi Bola'
// const result = str.endsWith("bola")
// result

/* startsWith */
// const str = 'arslonbek yaxshi Bola'
// const result = str.startsWith("bek")
// result

/* includes */
// const str = "arslonbek yaxshi Bola";
// const search = 'yax'
// const result = str.includes(search);
// result;

/* indexOf */
// const str = "arslonbek bolz yaxshi Bola";
// const search = 'bol'
// const idx = str.toLowerCase().indexOf(search.toLowerCase())
// const result = str.substring(idx, search.length + idx)
// idx;
// result;

/* lastIndexOf */
// const str = "arslonbek bola yaxshi BOLA";
// const search = 'bola'
// const idx = str.toLowerCase().lastIndexOf(search.toLowerCase())
// const result = str.substring(idx, search.length + idx)
// idx;
// result;

/* search */
// const str = "PDP besA of the besS";
// const startIdx = str.search(/bes[a-zA-Z]/);
// console.log(startIdx);

/* replace and RegExp */
// let str = "PDP best of pdp the bePDPst pdp"; // NT
// let searchText = "p"
// let enter = "-"
// let result = str.replace(new RegExp(searchText, "gi"), enter);
// result

/* match and RegExp */
// let str = "Pcp besA of pdp the besSK pap"; // NT
// let searchText =  "bes[a-z][a-z]?"
// let enter = "-"
// let result = str.match(new RegExp(searchText, "gi"), enter);
// result

/* split */

const str = "pdp-g-10";
const result = str.split("-"); // ["pdp", "g", "10"];

result;

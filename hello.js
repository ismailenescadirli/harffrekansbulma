let paragraf = prompt("Bir paragraf giriniz:");
let harfSayilari = {};

for (let i = 0; i < paragraf.length; i++) {
 let harf = paragraf[i].toLowerCase();
  if (harf>="a" && harf<="z") {
    if (harfSayilari[harf]) {
        harfSayilari[harf]++;
    }
  
   else{
    harfSayilari[harf]=1
   } 
                                           }   
                                                                              }
console.log("Harf Sayıları:",harfSayilari);
                                           
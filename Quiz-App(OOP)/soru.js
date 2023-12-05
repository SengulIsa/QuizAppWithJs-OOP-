function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni=soruMetni;
    this.cevapSecenekleri=cevapSecenekleri;
    this.dogruCevap=dogruCevap;

   // console.log(this);
}


//Prototype sayesinde her olıuşturulan soru nesnesinde method kullanılmış olmaz sadece gerekli olan kısımda Soru constructorunun prototype ndın alınmış olur.
Soru.prototype.cevabiKontrolEt= function(cevap){
        return cevap===this.dogruCevap;
    }

let sorular=[
    new Soru("1-What is the js packet management apps ?", { a: "Node.js", b: "Typescript",c: "Npm",d:"Nuget" },"c"),
    new Soru("2-Which one cannot be considered within the scope of front-end? ?", { a: "css", b: "html",c: "javascript",d:"sql"},"d"),
    new Soru("3-Which one considered within the scope of back-end? ?", { a: "node.js", b: "Typescript",c: "Angular",d:"react" },"a"),
    new Soru("4-Which one is not use js programming language ?", { a: "react", b: "angular",c: "vuejs",d:"asp.net" },"d")
    

]
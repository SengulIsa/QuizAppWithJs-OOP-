function UI(){
    this.btn_start=document.querySelector('.btn-start'),
    this.next_btn=document.querySelector(".next-btn"),
    this.btn_replaye=document.querySelector(".btn_replaye"),
    this.btn_quit=document.querySelector(".btn_quit"),
    this.quiz_box=document.querySelector(".quiz_box"),
    this.score_box=document.querySelector(".score_box"),
    this.option_list= document.querySelector(".option-list"),
    this.correctIcon=` <div class="icon"><i class="fas fa-check"></i></div>`,
    this.incorrectIcon=` <div class="icon"><i class="fas fa-times"></i></div>`,
    this.time_second=document.querySelector(".time_second"),
    this.time_text=document.querySelector(".time_text"),
    this.time_line=document.querySelector(".time_line"),
    this.correctAnswer=document.querySelector(".correct-answer")
};

UI.prototype.soruGöster= function(soru){
    let question=`<span>${soru.soruMetni}</span>`;
    let options=``;

    for(let cevap in soru.cevapSecenekleri){
        options +=
        `
            <div class="option">
            <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
            
            </div>
        
        `;
            
    }
    document.querySelector(".question-text").innerHTML=question;
    this.option_list.innerHTML=options;

    const option=this.option_list.querySelectorAll(".option");

    for(let opt of option){
        opt.setAttribute("onclick","optionSelected(this)");
    }

};

UI.prototype.soruSayisiGoster= function(sorusirasi, toplamSoru){
    let tag=`<span class="badge bg-warning"> ${sorusirasi}/${toplamSoru}</span>`;
     document.querySelector(".quiz_box .question-index").innerHTML=tag;
 }

 UI.prototype.skoruGoster = function(toplam, dogruCevap){
    let tag=` You gived ${dogruCevap} correct answer from ${toplam} question.`
    document.querySelector(".score_box .score_text").innerHTML=tag;
}
 

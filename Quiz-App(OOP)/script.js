//OOP
//object

//ES5(class tanımı yok yerine constructor var) ,ES6,ES7(class var)

const quiz= new Quiz(sorular);
const ui= new UI();

ui.btn_start.addEventListener("click", function(){
  
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.soruGöster(quiz.soruGetir());
    ui.soruSayisiGoster(quiz.soruIndex +1, quiz.sorular.length);
    ui.next_btn.classList.remove("show");
})

ui.next_btn.addEventListener("click",function(){
    if(quiz.sorular.length != quiz.soruIndex+1){
        quiz.soruIndex +=1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.soruGöster(quiz.soruGetir());
        ui.soruSayisiGoster(quiz.soruIndex +1, quiz.sorular.length);
        ui.next_btn.classList.remove("show");
        ui.correctAnswer.textContent=``;
       }
       else{
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skoruGoster(quiz.sorular.length,quiz.dogruCevapSayisi);
       }
       
})

ui.btn_quit.addEventListener("click",function(){
    window.location.reload();
})

ui.btn_replaye.addEventListener("click",function(){
    quiz.soruIndex=0;
    quiz.dogruCevapSayisi=0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
})


function optionSelected(option){
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap= option.querySelector("span b").textContent;
    let soru=quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){
        quiz.dogruCevapSayisi +=1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
    }else{
            option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
       let correctAnsw=`
       <p>correct Answer:${soru.dogruCevap}</p>
       
       `;
       ui.correctAnswer.insertAdjacentHTML('beforeend',correctAnsw);

    }

    for(let i=0; i<ui.option_list.children.length;i++){
        ui.option_list.children[i].classList.add("disabled");
    }

    ui.next_btn.classList.add("show");
}

let counter;
function startTimer(time){
    counter=setInterval(timer, 1000);

    function timer(){
        ui.time_second.textContent=time;
        time--;
        if(time<0){
            clearInterval(counter);

            ui.time_text.textContent="Time Finished";

            let cevap=quiz.soruGetir().dogruCevap;

            for(let option of ui.option_list.children){
                if(option.querySelector("span b").textContent==cevap){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend",ui.correctIcon);
                    
                }

                option.classList.add("disabled");
                
            }
                ui.next_btn.classList.add("show");

        }
    }
}

let counterLine;
function startTimerLine(){
    let line_width=0;

   counterLine= setInterval(timer,20);

    function timer(){
        line_width+=1;
        ui.time_line.style.width =line_width + "px";

        if(line_width >549){
            clearInterval(counterLine);
        }
    }
}

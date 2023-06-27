function check_answer(id, containerID){
    alternativa = document.getElementById(id);
    if(alternativa.classList.contains('right_answer')){
        alternativa.classList.add("alt_correta");
    }
    else{
        alternativa.classList.add('alt_errada');
        const elements = document.querySelectorAll('.alternativa');
        Array.from(elements).forEach((element, index) => {
            if(element.classList.contains('right_answer')){
                element.classList.add('alt_correta');
            }
        });
    }
    localStorage.setItem(localStorage.length, containerID);
}

function update_table(){
    for(var i = 0; i < localStorage.length; i++){
        var question = localStorage.getItem(localStorage.key(i));
        var element = document.getElementById(question);
        element.classList.add("question_done");
        console.log(localStorage.getItem(localStorage.key(i)));
    }
    console.log(localStorage.length);
}

function reset_local(){
    localStorage.clear();
}
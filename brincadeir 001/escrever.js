function tela(){
    const conteudoDIV = document.getElementById("conteudo");
    const mensagem = document.getElementById("campo").value;
    if(mensagem!=""){
        const paragrafo = document.createElement("p");
    const br = document.createElement("br");
    paragrafo.textContent = mensagem;

    conteudoDIV.appendChild(paragrafo);
    conteudoDIV.appendChild(br);
    document.getElementById("campo").value= "";

    }
}

const input= document.getElementById("campo");
input.addEventListener("keydown", function(event){

    if(event.keyCode == 13){
        minhafuncao();
    }


});

function minhafuncao() {


    const conteudoDIV = document.getElementById("conteudo");
    const mensagem = document.getElementById("campo").value;
    if(mensagem!=""){
        const paragrafo = document.createElement("p");
    const br = document.createElement("br");
    paragrafo.textContent = mensagem;

    conteudoDIV.appendChild(paragrafo);
    conteudoDIV.appendChild(br);
    document.getElementById("campo").value= "";

    }

}

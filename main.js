const btnAbrir = document.querySelector("#btn-abrir");
const btnFechar = document.querySelector("#btn-fechar");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

btnAbrir.addEventListener("click",() =>{
    modal.style.display = 'block';
    fade.style.display = 'block';
})

btnFechar.addEventListener("click", () =>{
    modal.style.display = 'none';
    fade.style.display = 'none';
})
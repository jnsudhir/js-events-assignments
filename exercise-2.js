const input=document.querySelector('#input');
const q = document.querySelector('#button');
q.addEventListener('click', ()=> {
            input.value--;
});
const w = document.querySelector('#button-1');
w.addEventListener('click', () => {
            input.value++;
});
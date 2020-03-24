window.addEventListener('DOMContentLoaded', ()=>{
    const formData = document.querySelector('#inputData');
    let afterEncrypted = document.querySelector('#afterCesar');


    formData.addEventListener('submit', (e)=>{
        e.preventDefault(); 
        const rot = parseInt(document.querySelector('#rot').value);
        const cesarData = document.querySelector('#cesar').value;

        afterEncrypted.innerHTML = '';
        afterEncrypted.innerHTML = cesar(cesarData, rot);
    });
});
window.addEventListener('DOMContentLoaded', function(){
    const formData = document.querySelector('#inputData');
    let afterEncrypted = document.querySelector('#afterCesar');


    formData.addEventListener('submit', function(e){
        e.preventDefault();
        const rot = parseInt(document.querySelector('#rot').value);
        const cesarData = document.querySelector('#cesar').value;
        
        const cesar = new Cesar(cesarData, rot)

        afterEncrypted.innerHTML = '';
        afterEncrypted.innerHTML = cesar.getCesar();
    });
});
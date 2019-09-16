//подбор сервисов в конкретном городе

let allModelList = document.querySelector('#popup-model'),
    allWorkList = document.querySelector('#popup-work'), // получаем само модальное окно
    buttonModel = document.querySelector('.open-popup'),
    buttonUslugi = document.querySelector('#work'),
    pageUrl = document.querySelector('#btn-submit2'), // кнопка найти
    carModel = document.querySelector('.row-modal-model');
    workName = document.querySelector('.row-modal-work');

// a-ия которая формирует ссылку для события onclick кнопки 
    let getCurrentUrl = window.location; // получаем адрес текущей страницы
    var workUrl = 'vse-uslugi';
    var modelUrl = 'vse-modeli';
    
    function getWorkName(event){
    let target = event.target; // получаем элемент на котором произошло событие
    workUrl = target.id; 
    pageUrl.setAttribute('onclick', `document.location='${getCurrentUrl}/${workUrl}/${modelUrl}'`)// заменяем атрибут onclick

    buttonUslugi.innerHTML = target.textContent;
    allWorkList.classList.add('hide-popup');
    }
    
workName.addEventListener('click', getWorkName)

    

  
function getModelName(event){
    let target = event.target; // получаем элемент на котором произошло событие
    modelUrl = target.id; 
    pageUrl.setAttribute('onclick', `document.location='${getCurrentUrl}/${workUrl}/${modelUrl}'`)// заменяем атрибут onclick
    buttonModel.innerHTML = target.dataset.model;
    allModelList.classList.add('hide-popup');
    
}
carModel.addEventListener('click', getModelName)

  

// let urlModel = getModelName();
// console.log(urlModel);


let popupsToggle = document.querySelectorAll('.open-popup'),
    popupClose = document.querySelectorAll('.close');
    
    popupsToggle.forEach(function(item){
        item.addEventListener('click', function(){
            let popupName = item.getAttribute('data-popup');
            document.getElementById(popupName).classList.remove('hide-popup');
        });
    });
    popupClose.forEach(function(item){
        item.addEventListener('click', function(){
            let popup = item.closest('.popup');
             popup.classList.add('hide-popup');
        });
    });

    // закрыть все модальные окна по нажатию Escape
    document.onkeydown = function (event){ // событие onkeypress на функциональных клавишах не работает
        if(event.keyCode == 27){
            document.querySelectorAll('.popup').forEach(function(element){
                element.classList.add('hide-popup');
            });
        }
    };
    // закрыть модальное окно по клику мимо окна
    window.onclick = function(e){
        if(e.target.classList.contains('popup')){
            e.target.classList.add('hide-popup');
        }
    }


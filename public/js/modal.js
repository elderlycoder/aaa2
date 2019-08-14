let popupsToggle = document.querySelectorAll('.open-popup'),
    popupClose = document.querySelectorAll('.close');
    
    popupsToggle.forEach(function(item){
        item.addEventListener('click', function(){
            let popupName = item.getAttribute('data-popup');
            // document.getElementById(popupName).style.display = "block";
            document.getElementById(popupName).classList.remove('hide-popup');
        });
    });
    popupClose.forEach(function(item){
        item.addEventListener('click', function(){
            let popup = item.closest('.popup');
           // popup.style.display = "none";
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


// ф-ия скрывает все блоки с чек-боксами
function init(){
    let tabBody = document.querySelectorAll('.tab-body')
    for (let i = 0; i<tabBody.length; i++){
        tabBody[i].style.display = 'none';
    }
}
init();

let tabs = document.querySelectorAll('.tab')
tabs.forEach(function(element){
    element.onclick = showTab;
});

function showTab(){
    let data = this.getAttribute('data-oper');
    
    let tabBody = document.querySelectorAll('.tab-body')
    for (let i = 0; i<tabBody.length; i++){
        tabBody[i].style.display = 'none'; // снова делает блок не видимым после выбора другого
    };
    
    document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
    //document.querySelector('.tab-body[data="'+data+'"').style.display = 'block';
}
let to = document.querySelectorAll('.tab');
    to.forEach(function(item){
    item.addEventListener('click', function(){
        let operation = item.getAttribute('data-oper');
        alert(`здесь сервисы по:${operation}`);
        });
    })

let userCity = document.querySelectorAll('.city');
    userCity.forEach(function(elem){
        elem.addEventListener('click', function(){
            console.log(elem.id);
        })
    })

let tab = document.querySelector('.setting-tab'),
    tabPoint = document.querySelectorAll('.setting-tab__point'),
    tabWrapper = document.querySelectorAll('.setting-tab__wrapper');

if(tab !== null) {
    function tabHide(e) {
        for(let i = e; i < tabPoint.length; i++) {
            tabPoint[i].classList.remove('active');
            tabWrapper[i].classList.remove('setting-tab__wrapper_active'); 
        }
    }
    tabHide(1);
    function tabShow(b) {
        if(!tabPoint[b].classList.contains('active')) {
            tabPoint[b].classList.add('active');
            tabWrapper[b].classList.add('setting-tab__wrapper_active'); 
        }
    }
    tab.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('setting-tab__point')) {
            for(let i = 0; i < tabPoint.length; i++) {
                if (target == tabPoint[i]) {
                    tabHide(0);
                    tabShow(i);
                    break;
                }
            }
        }
    });
}

let modalWithdrawal = document.querySelector('.modal-withdrawal'),
    modalWithdrawalBtn = document.querySelector('.modal-withdrawal__btn'),
    modalWithdrawalOverflow = document.querySelector('.modal-withdrawal__overflow'),
    modalWithdrawalClose = document.querySelector('.modal-withdrawal__close');

if(modalWithdrawal !== null) {
    modalWithdrawalBtn.addEventListener('click', ()=>{
        modalWithdrawal.classList.add('modal-withdrawal__active');
    });
    modalWithdrawalOverflow.addEventListener('click', ()=>{
        modalWithdrawal.classList.remove('modal-withdrawal__active');
    });
    modalWithdrawalClose.addEventListener('click', ()=>{
        modalWithdrawal.classList.remove('modal-withdrawal__active');
    });
}

let modalPlus = document.querySelector('.modal-plus'),
    modalPlusBtn = document.querySelector('.modal-plus__btn'),
    modalPlusOverflow = document.querySelector('.modal-plus__overflow'),
    modalPlusClose = document.querySelector('.modal-plus__close');

if(modalPlus !== null) {
    modalPlusBtn.addEventListener('click', ()=>{
        modalPlus.classList.add('modal-plus__active');
    });
    modalPlusOverflow.addEventListener('click', ()=>{
        modalPlus.classList.remove('modal-plus__active');
    });
    modalPlusClose.addEventListener('click', ()=>{
        modalPlus.classList.remove('modal-plus__active');
    });
}

let modalTrade = document.querySelector('.modal-trade'),
    modalTradeBtn = document.querySelector('.modal-trade__btn'),
    modalTradeOverflow = document.querySelector('.modal-trade__overflow'),
    modalTradeClose = document.querySelector('.modal-trade__close');

if(modalTrade !== null) {
    modalTradeBtn.addEventListener('click', ()=>{
        modalTrade.classList.add('modal-trade__active');
    });
    modalTradeOverflow.addEventListener('click', ()=>{
        modalTrade.classList.remove('modal-trade__active');
    });
    modalTradeClose.addEventListener('click', ()=>{
        modalTrade.classList.remove('modal-trade__active');
    });
}
// Admin tabs start

let tabNavItem = document.querySelectorAll('.tab-nav-item');
let tabContentItem = document.querySelectorAll('.tab_content');

tabNavItem.forEach(function(eLem) {
  eLem.addEventListener('click', activeTab);
})

function activeTab() {
  tabNavItem.forEach(function(eLem) {
    eLem.classList.remove('active');
  })
  this.classList.add('active');
  let tabName = this.getAttribute('data-tab');

  activeTabContent(tabName);
}


function activeTabContent(tabName) {
  tabContentItem.forEach(function(item) {
    if (item.classList.contains(tabName)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}



// Admin tabs end


(function () {
    const popupEls = document.querySelectorAll("[data-popup]");

    if (popupEls.length) {
        const hidePopupsOther = () => {
            popupEls.forEach((el) => {
                el.querySelector("[data-popup-open]").classList.remove("active");
                el.classList.remove('active')
            })
        }

        popupEls.forEach((el) => {
            const popupBody = el.querySelector("[data-popup-open]");

            el.addEventListener("click", (e) => {
                if(!el.classList.contains('active')) hidePopupsOther()

                if(!e.target.closest('.text-pop__popup')) {
                    popupBody.classList.toggle("active");
                    el.classList.toggle("active");
                }
            });
        });
    }

    
})()
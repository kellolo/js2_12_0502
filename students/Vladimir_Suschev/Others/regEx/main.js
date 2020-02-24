// замена кавычек //
document.querySelector('#butTxt').onclick = function () {
  let str = document.querySelector('#txt')
  str.innerHTML = str.innerHTML.replace(/\s\'/g, ' "').replace(/'\B/g, '"')
}

//******************************** */
//валидация формы..

const valObj = {
  name: /^[a-zA-ZА-ЯЁа-яё]+$/,
  phone: /^((\+?7)?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{4})$/,
  mail: /^[a-z0-9._%+-]+@[a-z0-9-]+.+.[a-z]{2,4}$/,
  txt: /.+/
}
const falS = document.querySelector('#fal')
function valid() {
  let act = document.activeElement
  act.onblur = function () {
    if (act.classList.contains('red')) {
      falS.innerHTML = act.dataset.fal
    }
  }
  act.onfocus = function () {
    falS.innerHTML = ""
  }  
  act.oninput = function () {
    if ((valObj[act.name]).test(act.value) == false) {
      act.className = 'red'
    } else {
      act.className = 'green '
    }
  }

};


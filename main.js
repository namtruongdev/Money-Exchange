// let type = ['USD', 'AUD', 'EUR', 'GBP', 'JPY', 'THB'];
let money = {
  USD: 23660,
  AUD: 14647,
  EUR: 26496,
  GBP: 29317,
  JPY: 220.08,
  THB: 746.59
};

const fType = document.querySelector('#ftype');
const fRate = document.querySelector('#money--rate');
let result = document.querySelector('#result');

function loadData() {
  let moneyCode = [];
  for (i in money) {
    moneyCode.push(i);
  }
  const moneyCodeHtml = moneyCode.map((a) => {
    return `<option value="${a}">` + a + '</option>';
  });
  fType.innerHTML = moneyCodeHtml;
  const defaultSelected = fType.options[fType.selectedIndex].text;
  let newSpanItem = document.createElement('span');
  let att = document.createAttribute('id');
  att.value = 'rate--value';
  newSpanItem.setAttributeNode(att);
  newSpanItem.textContent = money[`${defaultSelected}`];
  fRate.appendChild(newSpanItem);
}

function exChange() {
  let input = document.querySelector('input');
  let newSpanItem = document.createElement('span');
  let att = document.createAttribute('id');
  att.value = 'vnd';
  newSpanItem.setAttributeNode(att);
  result.appendChild(newSpanItem);
  input.addEventListener('keyup', (e) => {
    let v = e.target.value;
    if (isNaN(v) || v < 0) {
      newSpanItem.textContent = 'Số tiền không được âm';
      let spanResult = document.querySelector('#vnd');
      spanResult.classList.add('danger');
    } else if (v === '') {
      newSpanItem.textContent = 0;
      let spanResult = document.querySelector('#vnd');
      if (spanResult.classList.contains('danger') === true)
        spanResult.classList.remove('danger');
      spanResult.classList.add('vnd');
    } else {
      const rate = document.querySelector('#rate--value').textContent;
      const ok = parseFloat(v) * parseFloat(rate);
      let spanResult = document.querySelector('#vnd');
      if (spanResult.classList.contains('danger') === true)
        spanResult.classList.remove('danger');
      spanResult.classList.add('vnd');
      newSpanItem.textContent = ok;
    }
  });
}

function main() {
  loadData();
  fType.addEventListener('change', (e) => {
    let rateValue = document.querySelector('#rate--value');
    rateValue.textContent = money[`${e.target.value}`];
  });
  exChange();
}

main();

const nums = document.querySelectorAll('.num'),
  viewer = document.querySelector('.viewer'),
  operators = document.querySelectorAll('.ops'),
  equal = document.querySelector('#equals'),
  clear = document.querySelector('#clear');

let res = '';
let operand1 = 0;
let operand2 = 0;
let operatorClicked = false;
let operatorType = '';

let showed_res = '' + res;

const setViewer = (item) => {
  showed_res += item.dataset.num;
  viewer.innerHTML = showed_res;
};

operators.forEach((item) => {
  item.addEventListener('click', () => {
    operatorClicked = true;
    operatorType = item.dataset.ops;
    if (operand2 !== 0) {
      calc();
    }

    viewer.innerHTML = res;

    showed_res = '';

    console.log('op1: ', operand1, 'op2: ', operand2, 'res: ', res);
  });
});

clear.addEventListener('click', () => {
  res = '';
  operand1 = 0;
  operand2 = 0;
  operatorClicked = false;
  operatorType = '';

  showed_res = '' + res;
  viewer.innerHTML = 0;
});

nums.forEach((item) => {
  item.addEventListener('click', () => {
    if (showed_res.length > 8) return;

    if (operatorClicked === false) {
      setViewer(item);
      res = showed_res;
      res = +res;
      operand1 = +res;
    } else {
      setViewer(item);
      operand2 = showed_res;
      //   res = +showed_res;
    }
  });
});

const setRes = () => {
  operand1 = res;

  viewer.innerHTML = res;
  operatorClicked = false;
  showed_res = res;
  operand2 = 0;

  console.log(operand1, operand2, res, operatorClicked);
};

const calc = () => {
  console.log(operatorClicked);
  switch (operatorType) {
    case 'plus':
      res = +operand1 + +operand2;
      setRes();

      break;

    case 'minus':
      res = +operand1 - +operand2;
      setRes();

      break;

    case 'times':
      res = +operand1 * +operand2;
      setRes();

      break;

    case 'divided by':
      res = (+operand1 / +operand2).toFixed(6);
      setRes();
      break;

    default:
      operatorClicked = false;
      console.log(res);
      showed_res = res;
      break;
  }
};

equal.addEventListener('click', calc);

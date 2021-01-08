const binaryInput = document.querySelector('#binary');
const decimalOutput = document.querySelector('#decimal');

function convertToDecimal() {
  let bin = binaryInput.value.trim();
  if(bin == '') {
    return -1;
  }
  let i=0;
  let dec = 0;
  while(i<bin.length) {
    dec = dec*2;
    if(bin[i]=='1') {
      dec++;
    }
    else if(bin[i]!='0') {
      return -1;
    }
    i++;
  }
  return dec;
}

document.querySelector('.btn').addEventListener('click',function() {
  let decimal = convertToDecimal();
  if(decimal == -1) {
    // invalid input
    alert("Please enter only 0s and 1s");
  }
  else {
    decimalOutput.value = decimal;
  }
});

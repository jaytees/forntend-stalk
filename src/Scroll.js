import React from 'react'

function Scroll(){

  let lightBox = document.getElementById('main-log');
  let upperBound = 50;
  let lowerBound = 20;

let tickValue = (upperBound - lowerBound) / window.innerHeight;

document.addEventListener('scroll', function(e) {
  let offset = window.pageYOffset;
  let count = upperBound - offset * tickValue;

  lightBox.style.width = count + '%';
});


}

export default Scroll

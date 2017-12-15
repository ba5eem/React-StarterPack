export function rotateHelper(e){
  let id = e;
  var image = document.getElementById('photo-view-true');
  var view = document.getElementById('photo-view');
  let deg;
  if(id === 'rotateLeft'){deg = '-'+90}
  if(id === 'rotateRight'){deg = 90}
  
  let VW = view.clientWidth;//778
  let VH = view.clientHeight;//480
  let mSide = VW - image.height;
  let ML = mSide/2;
  image.style.transform = `rotate(${deg}deg)`;
  image.width = VH-30;
  image.style.marginLeft = ML+'px';
  if(id === 'rotateReset'){
    deg = 0;
    image.style.transform = `rotate(${deg}deg)`;
    image.width = VH+ML-60;
    image.style.marginLeft = (ML/2-30)+'px'
  }

}
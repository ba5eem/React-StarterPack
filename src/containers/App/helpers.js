export function reSizeOnImport(){
    var image = document.getElementById('photo-view-true');
    var view = document.getElementById('photo-view');
    let VW = view.clientWidth;//778
    let VH = view.clientHeight;//480
    let IW = VW * 0.8
    let IH = VH * 0.8
    let mSide = VW-IW;
    let ML = mSide/2;
    let mTop = VH - IH;
    let MT = mTop/2;
    image.width = IW;
    image.height = IH;
    image.style.marginLeft = ML+'px';
    image.style.marginTop = MT+'px';
    localStorage.setItem('IW', IW);
    localStorage.setItem('IH',IH);
    localStorage.setItem('ML',ML);
    localStorage.setItem('MT',MT);
}


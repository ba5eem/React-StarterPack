import React from 'react';

const dropHere = "http://bit.ly/2CH7JMA";
const arr = [
{id:"0", src: dropHere},
{id:"1", src: dropHere},
{id:"2", src: dropHere},
{id:"3", src: dropHere},
{id:"4", src: dropHere},
{id:"5", src: dropHere},
{id:"6", src: dropHere},
{id:"7", src: dropHere},
{id:"8", src: dropHere}]


const changeSrc = (idx,url) => {
  let res = arr.filter((elem,i) => {
      if(parseInt(elem.id) === parseInt(idx)){
        elem.src = url;
      }
      return arr;
    })
  return res;
}






export { dropHere, arr, changeSrc };
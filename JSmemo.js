'use strict';
{
    const points=document.querySelectorAll('.point');

    points.forEach(point=>{
        point.addEventListener('click',()=>{
            point.classList.add('appear')
            points.forEach(el=>{
                if(point !== el){
                    el.classList.remove('appear')
                }
            })
        })
    })
    
}
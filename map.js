const newEkle = document.querySelector('#task');
const button = document.querySelector('.button');
const liste = document.querySelector('ul');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')): [];
localStorage.setItem('items',JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

for (let i =0; i<liste.children.length; i++ )
{
    liste.children[i].innerHTML += `<button style="margin-right:20px; margin-top:15px;" class="close">&times</button></li>`

}



function newElement() 
{
    
    if (newEkle.value !='')
    {
        liste.innerHTML += `<li>${newEkle.value}<button style="margin-right:20px; margin-top:15px; " class="close">&times</button></li>`;
        let Success = document.querySelector('.success');
        let alertSuccess = new bootstrap.Toast(Success);
        alertSuccess.show();
        
    }
    else
    {
        let basarisiz = document.querySelector('.error');
        let alertBasarisiz = new bootstrap.Toast(basarisiz);
        alertBasarisiz.show();
    }

}

button.addEventListener('submit',newElement);

liste.addEventListener('click', function(e) 
{
    
    if (e.target.className == '' || e.target.className == 'checked')
    {
        e.target.classList.toggle('checked');
    }
    else
    {
        e.target.parentElement.remove();
    }

}


)
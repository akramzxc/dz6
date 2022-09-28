let row = document.querySelector('.row')
let images = [
    {id: 1, img: './img/image 1.png' ,title: 'Syltherine', subtitle: 'Stylish cafe chair' ,price: 'Rp 2.500.000' , line:'Rp 3.500.000'},
    {id: 2, img: '/img/image 2.png' ,title: 'Leviosa', subtitle: 'Stylish cafe chair', price:'Rp 2.500.000',line:'.'},
    {id: 3, img: './img/image 3.png' ,title: 'Lolito', subtitle: 'Luxury big sofa', price:'Rp 7.000.000' , line:'Rp 14.000.000'},
    {id: 4, img: './img/image 4.png' ,title: 'Respira', subtitle: 'Minimalist fan', price:'Rp 500.000',line:'.'},
    {id: 5, img: './img/image 6.png' ,title: 'Grifo', subtitle: 'Night lamp', price:'Rp 1.500.000',line:'.'},
    {id: 6, img: './img/image 7.png' ,title: 'Muggo', subtitle: 'Small mug', price:'Rp 150.000',line:'.'},
    {id: 7, img: './img/image 8.png' ,title: 'Pingky', subtitle: 'Cute bed set', price:'Rp 7.000.000' , line:'Rp 14.000.000'},
    {id: 8, img: './img/image 9.png' ,title: 'Potty', subtitle: 'Minimalist flower pot', price:'Rp 500.000',line:'.'}
]
const h1 = document.createElement('h1');
const link = document.createElement('a');
const newElement = document.createElement('div');
h1.innerHTML = 'Our Products';
row.before (h1);
row.after(newElement)
newElement.className = 'linkbtn'
link.innerHTML = 'Show More'
newElement.append (link)
link.href = '#';
link.className = 'btn'

images.forEach ((item) => {
    row.innerHTML += 
    `<div class="idys" id="${item.id}">
    <img class="all-images" src="${item.img}">
    <p class="all-title" id = 'iner'>${item.title}</p>
    <p class="text-title" id = 'iner'>${item.subtitle}</p>
    <p class="title" id = 'iner'>${item.price}</p>
    <p class="lte">${item.line}</p>
    <button class = 'btn'>Delete</button>
    </div>`
})
const btn = document.querySelector('button')

addEventListener('click',function () {
    row.removeChild(row.firstChild)
})
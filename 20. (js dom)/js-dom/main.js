let box = document.createElement('div');
let list = document.createElement('ul');
let headingThree = document.createElement('h3');
let address = document.createElement('p');
let btn = document.createElement('button');

//setAttribute, getAttribute, hasAttribute, removeAttribute, 
box.classList.add('box');
headingThree.style.color = 'red';
address.innerHTML = 'Address <em>Baku, Azerbaijan</em>';
btn.classList.add('btn');
btn.setAttribute('disabled',true);
btn.textContent = 'Disabled Button';

let arr = [
    {
        href: 'https://google.com',
        content: 'google'
    },
    {
        href: 'https://youtube.com',
        content: 'youtube'
    },
    {
        href: 'https://twitter.com',
        content: 'twitter'
    }
]
for (let i = 0; i < arr.length; i++) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = arr[i].content;
    link.setAttribute('target','_blank');
    link.setAttribute('href',arr[i].href);
    listItem.appendChild(link);
    list.appendChild(listItem);
}
box.append(list);


document.body.append(box,headingThree,address,btn);
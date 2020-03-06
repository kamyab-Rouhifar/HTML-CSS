// Data for the "HTML Lists" Page

const fruits = ['Apples', 'Oranges', 'Pears', 'Grapes', 'Pineapples', 'Mangos'];

const directory = [
  { type: 'file', name: 'file1.txt' },
  { type: 'file', name: 'file2.txt' },
  {
    type: 'directory',
    name: 'HTML Files',
    files: [
      { type: 'file', name: 'file1.html' },
      { type: 'file', name: 'file2.html' }
    ]
  },
  { type: 'file', name: 'file3.txt' },
  {
    type: 'directory',
    name: 'JavaScript Files',
    files: [
      { type: 'file', name: 'file1.js' },
      { type: 'file', name: 'file2.js' },
      { type: 'file', name: 'file3.js' }
    ]
  }
];
//---------------------------------------------------
window.onload = function() {
  let Table1 = document.getElementById('Table1');
  let ol = document.createElement('ol');
  for (let i = 0; i < fruits.length; i++) {
    let txt = document.createTextNode(`${fruits[i]}`);
    let li = document.createElement('li');
    li.appendChild(txt);
    ol.appendChild(li);
  }
  Table1.appendChild(ol);
  //-------------------------------------------------------
  let Table2 = document.getElementById('Table2');
  let ul = document.createElement('ul');
  for (let i = 0; i < directory.length; i++) {
    let t = document.createTextNode(`${directory[i].name}`);
    let li = document.createElement('li');
    li.appendChild(t);
    ul.appendChild(li);

    if (directory[i].files) {
      let ul1 = document.createElement('ul');
      for (let x = 0; x < directory[i].files.length; x++) {
        let li1 = document.createElement('li');
        let t = document.createTextNode(`${directory[i].files[x].name}`);
        li1.appendChild(t);
        ul1.appendChild(li1);
      }
      li.appendChild(ul1);
    }
    Table2.appendChild(ul);
  }

};
//---------------------------------------------------
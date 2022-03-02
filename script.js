let company = [
  {
    picture: './yeji.jpg',
    name: "Park Yeji",
    age: 'Age: 21',
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil deleniti distinctio facilis, hic unde quisquam voluptate consequuntur quia nobis nemo repellendus minima dolorum harum excepturi omnis cumque rem commodi.",
    profession: "Profession: Rap-singer, dancer"
  },
  {
    picture: './leehee.gif',
    name: "Lee Heesung",
    age: 'Age: 20',
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil deleniti distinctio facilis, hic unde quisquam voluptate consequuntur quia nobis nemo repellendus minima dolorum harum excepturi omnis cumque rem commodi.",
    profession: "Profession: Singer"
  },
  {
    picture: './kimsunoo.jpg',
    name: "Kim Sunoo",
    age: 'Age: 19',
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil deleniti distinctio facilis, hic unde quisquam voluptate consequuntur quia nobis nemo repellendus minima dolorum harum excepturi omnis cumque rem commodi.",
    profession: "Profession: Singer"
  },
  {
    picture: './jake.png',
    name: "Jake",
    age: 'Age: 19',
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil deleniti distinctio facilis, hic unde quisquam voluptate consequuntur quia nobis nemo repellendus minima dolorum harum excepturi omnis cumque rem commodi.",
    profession: "Profession: Singer"
  },
];

const container2 = document.querySelector('#container2');
container2.style.display = 'flex';
company.forEach((item) => {
  const worker = document.createElement('div');
  const img = document.createElement('img');
  const h1 = document.createElement('h1');
  const age = document.createElement('span');
  const p = document.createElement('p');
  const span = document.createElement('span');

  img.src = item.picture;
  h1.textContent = item.name;
  age.textContent = item.age;
  p.textContent = item.resume;
  span.textContent = item.profession;

  worker.style.padding = '15px';
  worker.style.margin = '15px';
  worker.style.border = '2px solid black';
  worker.style.borderRadius = '20px';
  img.style.width = '260px';
  img.style.height = '260px';
  img.style.borderRadius = '50%';
  h1.style.textAlign = 'center';
  age.style.display = 'block';
  age.style.marginBottom = '20px';
  span.style.fontWeight = 'bold';
  span.style.fontSize = '20px';
  worker.style.backgroundColor = 'lightyellow';

  worker.append(img);
  worker.append(h1);
  worker.append(age);
  worker.append(span);
  worker.append(p);
  container2.append(worker);
}
)
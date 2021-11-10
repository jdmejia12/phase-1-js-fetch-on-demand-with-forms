const init = () => {
  const base_URL = 'http://localhost:3000/movies';
  const inputForm = document.querySelector('form');
  
  
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textbox = document.querySelector('#searchByID');
    console.log(textbox.value);

   fetch(base_URL+ `/${textbox.value}`)
    .then(result=> result.json())
    .then(data=>{
        const title = document.querySelector('#movieDetails h4');
        const summary = document.querySelector('#movieDetails p');
  
        title.innerText = data.title;
        summary.innerText = data.summary;
        textbox.value = '';
            })
        });
}

document.addEventListener('DOMContentLoaded', init);
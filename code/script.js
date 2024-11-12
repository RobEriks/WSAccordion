
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const faqContainer = document.querySelector('#faq-container');

    data.forEach((post, index) => {
      if (index < 12) { 
        const section = document.createElement('div');
        section.classList.add('section');


        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = post.title;

   
        const description = document.createElement('div');
        description.classList.add('description');
        description.textContent = post.body;


        title.addEventListener('click', () => {
          title.classList.toggle('active');
        });


        section.appendChild(title);
        section.appendChild(description);
        faqContainer.appendChild(section);
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));



  

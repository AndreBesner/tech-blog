const newFormHandler = async (event) => {
    event.preventDefault();

    const blogName = document.querySelector('#blog-title').value.trim();

    const blogBody = document.querySelector('#blog-content').value.trim();

    if (blogName && blogBody) {
        const response = await fetch(`/api/blogs`, {
          method: 'POST',
          body: JSON.stringify({ name: blogName, description: blogBody }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
          console.log('you did it?');
        } else {
          const errorResponse = await response.json();
  const errorMessage = errorResponse.errors[0].message;
  console.log('Failed to create blog:', errorMessage);
  alert('Failed to create blog: ' + errorMessage);
          // alert('Failed to create blog');
        }
      }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-blogid')) {
      const id = event.target.getAttribute('data-blogid');

      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }
  };


  document
  .querySelector('#new-blog')
  .addEventListener('submit', newFormHandler);

  // document.querySelector("#delete-blog").addEventListener('click', delButtonHandler);
  const delButtons = document.querySelectorAll(".delete-blog");
delButtons.forEach(button => {
  button.addEventListener('click', delButtonHandler);
});
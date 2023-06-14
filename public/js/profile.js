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
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
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

  document.querySelectorAll(".delete-blog").addEventListener('click', delButtonHandler);
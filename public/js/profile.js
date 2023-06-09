const newFormHandler = async (event) => {
    event.preventDefault();

    const blogName = document.querySelector('#blog-name').value.trim();

    const blogBody = document.querySelector('#blog-body').value.trim();

    if (blogName && blogBody) {
        const response = await fetch(`/api/blogs`, {
          method: 'POST',
          body: JSON.stringify({ blogName, blogBody }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to create blog');
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
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  // query selector and event listener for add new blog to run above function

  // query selector and event listen for delete blog to run above function
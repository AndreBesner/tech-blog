// const { response } = require("express");

const commentFormHandler = async (event) => {
    event.preventDefault();

    const blog_id = document.querySelector('#comment-form').dataset.blogid;

    const comment_description = document.querySelector('#comment-input').value.trim();

	if (blog_id && comment_description) {
		const response = await fetch('/api/comments', {
		  method: 'POST',
		  body: JSON.stringify({ blog_id, comment_description, }),
		  headers: { 'Content-Type': 'application/json' },
		});
	
		if (response.ok) {
		//   document.location.replace('/');
		console.log("comment posted");
		document.location.reload();
		} else {
		  alert(response.statusText);
		}
	  }
	  else{
		alert("bad day");
	  }
};

document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);
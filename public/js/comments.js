const commentFormHandler = async (event) => {
    event.preventDefault();

    const blog_id = document.querySelector('.comment-name').dataset.blogid;

    const comment_body = document.querySelector('.comment-body').value.trim();

    if (comment_body) {
        await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				blog_id,
				comment_body,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		document.location.reload();
    }
}

document.querySelector('.comment-name').addEventListener('submit', commentFormHandler);
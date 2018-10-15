import React from 'react';
import Post from './Post.js';

const PostList = ({post, username}) => {

	return (

		

		<div>
			
          	{
				post.map((userpost,i) => {
					let realName = username.filter(user => user.userId === userpost.userId );

					return (
						<Post 
							key={i}
				            title={userpost.title}
				            message={userpost.body}
				            postId={userpost.id}
				            userId={userpost.userId}
				            userName={realName[0].name} 
				        />
					);
				})
			}

		</div>

	);
}




export default PostList;
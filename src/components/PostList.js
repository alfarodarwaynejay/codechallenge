import React from 'react';
import Post from './Post.js';

const PostList = ({post, users}) => {

	return (
		<div>	
          	{
          		!post.length ?

          		(
					<Post 
						key={'no-user'}
			            title={'NO USER FOUND'}
			            message={'This is only a sample app. Users range from numbers 1-10 only. Thank you!'}
			            postId={'***************'}
			            userId={'XXXXXXX'}
			            userName={'ADMIN'} 
			        />
			     )

				: post.map((userpost,i) => {
					let name = users[userpost.userId-1]
					
					return (
						<Post 
							key={i}
				            title={userpost.title}
				            message={userpost.body}
				            postId={userpost.id}
				            userId={userpost.userId}
				            userName={name} 
				        />
					);
				})
			} 		
		</div>
	);
}




export default PostList;
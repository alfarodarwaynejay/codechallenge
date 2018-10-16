import React from 'react';
import Post from './Post.js';

const PostList = ({post, username}) => {

	return (
		<div>	
          	{
          		!post.length ?

          		(
					<Post 
						key={'no-user'}
			            title={'NO USER FOUND'}
			            message={'This is only a sample app. Users range from nubers 1-10 only. Thank you!'}
			            postId={'***************'}
			            userId={'XXXXXXX'}
			            userName={'ADMIN'} 
			        />
			     )

				: post.map((userpost,i) => {
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
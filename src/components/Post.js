import React from 'react';

const Post = ({title, message, userName, userId, postId}) => {
	const longNames = (name) => {
		const nameArray = name.split(' ');

		return nameArray.reduce((acc, val) => {
			if(val.length > 6) {
				acc = true
				return acc;
			} else { 
				acc = false;
				return acc;
			}
		} , false)
	}

	return (
		<div className='dib br3 ma2 pa3 grow bw2 tc w-70'>
			<div className='w-75 pa3 mr2 tc db' style={{margin: '5px auto'}}>
				<img alt='robotUser' src={`https://robohash.org/${userId}?100x100`} style={{margin: '5px auto'}}/>
				<h1 className='username' style={{margin: 'auto'}}>{userName}</h1>
				<h3 className='userIDS' style={{margin: 'auto'}}>User Id: {userId}</h3>
			</div>
			<div className='bg-lightest-blue  w-150 mr2 br4 o-70  shadow-5'>
				<div>
					<h2 className='pa4 title-header'>{title}</h2>
					<h5 className='userIDS'>Post Id: {postId}</h5>
				</div>
				<div>
					<p className='tj pa5 post-message'>{message}</p>
				</div>
			</div>
		</div>
	);
};

export default Post;
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
		<div className='db br3 ma2 pa3 grow bw2 shadow-5 flex w-450 justify-around'>
			<div className='w-25 pa3 mr2'>
			<img alt='robotUser' src={`https://robohash.org/${userId}?100x100`} />
			<h1 className={`${!(userId === 1 || userId === 2) ? 'username-long':'username' }`}>{userName}</h1>
			<h3 className='userIDS'>User Id: {userId}</h3>
			</div>
			<div className='bg-lightest-blue  w-150 mr2 br4 o-70'>
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
import React from 'react';

const SearchBox = ({onOrderChange, onSearchChange, result}) => {
	return (
		<div className='justify-center'>
			<input 
				className='pa3 ma2 ba b--green bg-lightest-blue'
				type='search'
				placeholder='search user name/ID'
				onChange={onSearchChange}
			/>
			<span className='searchSpan'>Sort Post By:</span>
			<select 
				onChange={onOrderChange}
				className='ma2 ba b--green bg-lightest-blue'
			>
				<option value='ascending'>Ascending</option>
				<option value='descending'>Descending</option>
			</select>
			<span className='searchSpan flex flex-wrap justify-center'>Results: {result} </span>
		</div>
	);
}

export default SearchBox;
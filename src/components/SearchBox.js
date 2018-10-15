import React from 'react';

const SearchBox = ({onOrderChange, onSearchChange}) => {

	return (

		<div>
			<input 
				className='pa3 ma2 ba b--green bg-lightest-blue'
				type='search'
				placeholder='search user by ID'
				onChange={onSearchChange}
			/>
			Sort Post By:
			<select 
				onChange={onOrderChange}
				className='ma2 ba b--green bg-lightest-blue'
			>
				<option value='ascending'>Ascending</option>
				<option value='descending'>Descending</option>
			</select>
		</div>

	);
}

export default SearchBox;
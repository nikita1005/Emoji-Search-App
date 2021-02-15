import React from 'react'

function Search (props) {
	const onChange = e => {
		props.onChange(e.target.value)
	  }
	return (
		<section className="searchbox-wrap">
			 <input
   				 className="searchbox"
   				 type="text"
  			     placeholder="Search for a emoji..."
 			    onChange={onChange}
 			  />
		</section>
	)
}

export default Search




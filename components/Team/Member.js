const Member = ({ image, name, designation, twitter }) => {
	return (
		<div className='team-member'>
			<img src={image} alt='' />
			<h4>
				{name}
				<a href={twitter}>
					<i className='fab fa-twitter'></i>
				</a>
			</h4>
			<p>{designation}</p>
		</div>
	)
}

export default Member

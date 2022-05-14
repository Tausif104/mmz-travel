const Member = ({ image, name, designation, twitter, linkedIn }) => {
  return (
    <div className='team-member'>
      <div className='team-author'>
        <img src={image} alt='' />
      </div>
      <h4>
        {name}
        <a rel='noreferrer' target='_blank' href={twitter}>
          <i className='fab fa-twitter'></i>
        </a>
        <a rel='noreferrer' target='_blank' href={linkedIn}>
          <i className='fab fa-linkedin-in'></i>
        </a>
      </h4>
      <p>{designation}</p>
    </div>
  )
}

export default Member

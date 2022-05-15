const Member = ({ image, name, designation, twitter, linkedIn }) => {
  return (
    <div className='team-member'>
      <div className='team-author'>
        <img src={image} alt='' />
      </div>
      <h4>
        {name}
        {linkedIn && <a rel='noreferrer' target='_blank' href={linkedIn}>
          <i className='fab fa-linkedin'></i>
        </a>}
        
        {twitter && <a rel='noreferrer' target='_blank' href={twitter}>
          <i className='fab fa-twitter'></i>
        </a>}
      </h4>
      <p>{designation}</p>
    </div>
  )
}

export default Member

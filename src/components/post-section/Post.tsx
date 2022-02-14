import React from 'react'
import { Wrapper } from './style'
import zohaibPic from '../../assets/zohaib.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Post = () => {
  return (
    <Wrapper>
        <div>
            <img src={zohaibPic} alt="" width='50px' height='50px' style={{borderRadius: '50%' , objectFit:'cover'}} />
        </div>
        <div>
            <section>
                <input type="text" placeholder='Whats Happeining' style={{width:'415px' , border:'none' , padding:'20px'}}/>
                <div>
                    <div style={{border: '.3px solid lightblue'}} ></div>   
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={'coffee'} />
                    </div>
                </div>
            </section>
        </div>
    </Wrapper>
  )
}

export default Post
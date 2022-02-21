import React from 'react'
import { Wrapper } from './style'
import zohaibPic from '../../assets/zohaib.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Post = () => {
    return (
        <Wrapper>
            <div>
                <img src={zohaibPic} alt="profile-logo" />
            </div>
            <div>
                <section>
                    <input type="text" placeholder='Whats Happeining' />
                    <div className='border-div'>
                        <div></div>
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
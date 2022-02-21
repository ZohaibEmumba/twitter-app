import { FaRegCheckCircle, FaComment, FaRegChartBar, FaHeart, FaLeaf, FaEllipsisH } from 'react-icons/fa'
import img from '../../assets/zohaib.jpg'
import pakistanImg from '../../assets/Pakistan.jpg'
import { FirstPost, PostDetails, PostImg, PostImgDetails, PostName, PostReactions, PostSection, PostUserName, WholeWrapper } from './style'

const DsiplayTweet = () => {
  return (
    <WholeWrapper>
      <PostSection>
        <FirstPost>
          <div>
            <PostImg>
              <img src={img} alt="profile img" />
            </PostImg>
          </div>
          <div className="post-wrapper" >
            <PostName>
              <strong><span>Muhammad Zohaib</span> </strong> <FaRegCheckCircle className="verify" />
            </PostName>
            <PostUserName>
              <span>@zohaibEmumba</span> . <span>6m</span>
            </PostUserName>
          </div>
          <div>
            <FaEllipsisH />
          </div>
        </FirstPost>
        <PostDetails>
          <PostImgDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id
            iure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere
            aliquid dolores placeat vitae accusamus excepturi officiis magnam
            pariatur?
          </PostImgDetails>
          <PostImgDetails>
            <img src={pakistanImg} alt="post" />
          </PostImgDetails>
          <PostReactions>
            <div className="cmnt-icon">
              <span >
                <FaComment  /> 
              </span>
              <span>45</span> 
            </div>
            <div className="share-icon">
              <FaRegChartBar  /> 
              <span>4</span>
            </div>
            <div className="heart-icon" >
              <FaHeart /> 
             <span>345</span> 
            </div>
            <div  className="leaf-icon">
              <FaLeaf /> 
              <span>234</span>
            </div>
          </PostReactions>
        </PostDetails>

      </PostSection>
    </WholeWrapper>
  )
}

export default DsiplayTweet
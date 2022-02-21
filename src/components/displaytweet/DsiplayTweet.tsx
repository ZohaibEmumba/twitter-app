import { FaRegCheckCircle, FaComment, FaRegChartBar, FaHeart, FaLeaf } from 'react-icons/fa'
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
              <span>@zohaibEmumba</span>  <span>6m</span>
            </PostUserName>
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
            <span>
              <FaComment className="re" /> 45
            </span>
            <span>
              <FaRegChartBar className="re" /> 4
            </span>
            <span>
              <FaHeart className="re" /> 345
            </span>
            <span>
              <FaLeaf className="re" /> 234
            </span>
          </PostReactions>
        </PostDetails>

      </PostSection>
    </WholeWrapper>
  )
}

export default DsiplayTweet
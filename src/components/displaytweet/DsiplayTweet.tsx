import { FaRegCheckCircle, FaComment, FaRegChartBar, FaHeart, FaLeaf } from 'react-icons/fa'
import img from '../../assets/zohaib.jpg'
import pakistanImg from '../../assets/Pakistan.jpg'
import { FirstPost, PostDetails, PostImg, PostImgDetails, PostName, PostReactions, PostSection, PostUserName } from './style'

const DsiplayTweet = () => {
  return (
    <PostSection>
    <FirstPost>
      <PostImg>
        <img src={img} alt="profile img" />
      </PostImg>
      <PostName>
        <strong>Muhammad Zohaib</strong> <FaRegCheckCircle className="verify" />
      </PostName>
      <PostUserName>
        @zohaibEmumba <span>6m</span>
      </PostUserName>
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
  )
}

export default DsiplayTweet
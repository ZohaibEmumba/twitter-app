import { Wrapper } from "./style"
import zohaib from '../../../assets/zohaib.jpg'
import TwitterButton from "../../common/Button/TwitterButton"
import { NAME, USERNAME } from "../../../constants"

const PopoverContent = () => {
    return (
        <Wrapper>
            <div>
                <div>
                    <img src={zohaib} alt="logo" className="logo-img" />
                </div>
                <div>
                    <TwitterButton title="Follow" className='followBtn' />
                </div>
            </div>
            <div>
                <span>{NAME}</span>
                <span>{USERNAME}</span>
            </div>
            <div>
                <span>
                    PTI | Professor UI | PhD in Leadership
                </span>
            </div>
            <div className="follower-sect">
                <span>278k</span> Following
                <span>27k</span> Followers
            </div>
        </Wrapper>
    )
}

export default PopoverContent
import { Dropdown } from "antd";
import { FC, useContext, useState } from "react";
import {
  IoEllipsisHorizontalOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { SHOWTREND, SHOW_MORE, TREND } from "../../constants";
import { TwitterContext } from "../../context/TwitterContext";
import { menu } from "../../utils/trendsUtils";
import TwitterButton from "../common/Button/TwitterButton";
import {
  CountryHeading,
  Key,
  KeywordHeading,
  KeywordName,
  KeywordTweets,
  ShowMore,
  TrendWrapper,
  Wrapper,
} from "./style";
import TrendModal from "./trend-modal/TrendModal";


const Trends: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const {state , dispatch} = useContext(TwitterContext);
  const {trendingPostData} = state;
  const Navigate = useNavigate();
  

  const handleSettingClick = () => {
    setShowModal(true);
  };
  const handleTrendClick = (name:string) => {
    dispatch({
      type:SHOWTREND,
      payload: {
        trending: true,
        name: name
      }      
    })
    Navigate(`/trending`);
    
  };
  return (
    <>
      {showModal && (
        <TrendModal
          showModal={showModal}
          setShowModal={setShowModal}
          modalTitle={"Trends"}
          children={undefined}
        />
      )}
      <Wrapper>
        <div className="keywords">
          <Key>
            <KeywordHeading>
              <div>
                <span>{TREND}</span>
              </div>
              <div>
                <TwitterButton
                  title={<IoSettingsOutline className="setting-icon" />}
                  handleClick={handleSettingClick}
                />
              </div>
            </KeywordHeading>
            {trendingPostData.map((trend :any) => (
              <TrendWrapper key={trend.id} onClick={() => handleTrendClick(trend?.keyword)}>
                <div>
                  <CountryHeading>{trend.country}</CountryHeading>
                  <KeywordName>
                    <strong>{trend.keyword}</strong>
                  </KeywordName>
                  <KeywordTweets>{trend.totalKeywords}</KeywordTweets>
                </div>
                <div>
                  <span>
                    <Dropdown
                      overlay={menu}
                      trigger={["click"]}
                      placement="bottomRight"
                    >
                      <IoEllipsisHorizontalOutline />
                    </Dropdown>
                  </span>
                </div>
              </TrendWrapper>
            ))}
            <ShowMore>
              <span>{SHOW_MORE}</span>
            </ShowMore>
          </Key>
        </div>
      </Wrapper>
    </>
  );
};

export default Trends;

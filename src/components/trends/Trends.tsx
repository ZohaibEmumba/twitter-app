import { Dropdown, Menu } from 'antd';
import React, { FC, useState } from 'react'
import { FaRegSadTear } from 'react-icons/fa';
import { IoEllipsisHorizontalOutline, IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { SHOW_MORE, TREND } from '../../constants';
import TwitterButton from '../common/Button/TwitterButton';
import { MenuWrapper } from '../sidebar/dropdown-menu/style';
import { CountryHeading, Key, KeywordHeading, KeywordName, KeywordTweets, ShowMore, TrendWrapper, Wrapper } from './style';
import TrendModal from './trend-modal/TrendModal';

export const menu = (
    <div>
        <MenuWrapper>
            <Menu.Item key="0" className='padding'>
                <Link to="/" className='link-padding'>
                    <FaRegSadTear className='icon' />
                    <span>Not interested in this Tweet</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="1" className='padding' >
                <Link to="/" className='link-padding'>
                    <FaRegSadTear className='icon' />
                    <span>This Trend is harmful</span>
                </Link>
            </Menu.Item>
        </MenuWrapper>
    </div>
)

const Trends: FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleSettingClick = () => {
        setShowModal(true);
    };
    const [state, setState] = React.useState([
        {
            id: 1,
            country: "Trending in Pakistan",
            keyword: "ISPR",
            totalKeywords: "2000k",
        },
        {
            id: 2,
            country: "Trending in Pakistan",
            keyword: "IMRANKAHN",
            totalKeywords: "6000k",
        },
        {
            id: 3,
            country: "Trending in Pakistan",
            keyword: "YoutubeinPakistan",
            totalKeywords: "2560k",
        },
    ]);
    return (
        <>
            {
                showModal && (<TrendModal showModal={showModal} setShowModal={setShowModal} modalTitle={'Trends'} children={undefined} />)
            }
            <Wrapper>
                <div className="keywords">
                    <Key>
                        <KeywordHeading>
                            <div>
                                <span>{TREND}</span>
                            </div>
                            <div>
                                <TwitterButton
                                    title={<IoSettingsOutline
                                        className='setting-icon' />}
                                    handleClick={handleSettingClick}
                                />
                            </div>
                        </KeywordHeading>
                        {state.map((keyword) => (
                            <TrendWrapper key={keyword.id}>
                                <div>
                                    <CountryHeading>{keyword.country}</CountryHeading>
                                    <KeywordName>
                                        <strong>{keyword.keyword}</strong>
                                    </KeywordName>
                                    <KeywordTweets>{keyword.totalKeywords}</KeywordTweets>
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

export default Trends
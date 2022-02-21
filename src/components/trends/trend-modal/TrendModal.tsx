import { Checkbox } from 'antd';
import { LOCATION, LOC_DESP, LOC_PARA } from '../../../constants';
import { propsType } from '../../../types';
import ModalWrapper from '../../common/Modal/Modal'
import { Wrapper } from './style';

const TrendModal = (props: propsType) => {
    const { showModal, setShowModal } = props;

    return (
        <ModalWrapper showModal={showModal} setShowModal={setShowModal} modalTitle={'Trends'}>
            <Wrapper>
                <div>
                    <span className='title'>{LOCATION}</span>
                </div>
                <div>
                    <div className='main-div'>
                        <div className='innner-div'>
                            <span>{LOC_DESP}</span>
                            <span><Checkbox checked></Checkbox></span>
                        </div>
                        <div>
                            {LOC_PARA}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </ModalWrapper>
    )
}

export default TrendModal
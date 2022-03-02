export type Action =
  |{
    type: 'SHOWTREND', payload: {
      trending: boolean ,
      name : string
    } ,
    
  }
  
export type Dispatch = React.Dispatch<Action>;

export type propsType = {
  showModal: boolean;
  setShowModal: any;
  children: any;
  modalTitle: string;
  width?: number;
};
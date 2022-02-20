export type Action =
  | {
    type: 'SHOW_MODAL', payload: {
      isvisible: boolean ,
    }
  }
  
export type Dispatch = React.Dispatch<Action>;


export type propsType = {
  showModal: boolean;
  setShowModal: any;
  children: any;
  modalTitle: string;

};
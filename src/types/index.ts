export type Action =
  | {
    type: 'SHOWTREND', payload: {
      trending: boolean,
      name: string
    }
  }
  | {
    type: 'GETALLUSERS', payload: {
      allUsers: any[]
    }
  }
  | {
    type: 'GETSPECIFICUSERS', payload: {
      loginuser: any
    }
  }

export type Dispatch = React.Dispatch<Action>;

export type propsType = {
  showModal: boolean;
  setShowModal: any;
  children: any;
  modalTitle: string;
  width?: number;
};
export type Action =
  | {
    type: 'SHOW_MODAL', payload: {
      isvisible: boolean ,
    }
  }
  
export type Dispatch = React.Dispatch<Action>;

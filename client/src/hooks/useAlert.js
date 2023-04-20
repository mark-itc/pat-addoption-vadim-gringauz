import { useSelector, useDispatch } from "react-redux";


export default function useAlert () {
    const dispatch = useDispatch();
    const { openSnackBarAlert, alertMessage } = useSelector(
        state => state.general
      )

    return { openSnackBarAlert, alertMessage }
}
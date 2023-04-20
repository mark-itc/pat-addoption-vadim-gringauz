import { useSelector, useDispatch } from "react-redux";

export default function useAlert() {
  const dispatch = useDispatch();
  const { openSnackBarAlert, alertMessage } = useSelector(
    (state) => state.general
  );

  const showAlert = (message) => {
    dispatch(showAlert({ message }))
  }

  const hideAlert = () => {
    dispatch(hideAlert())
  }

  return { openSnackBarAlert, alertMessage, showAlert, hideAlert };
}

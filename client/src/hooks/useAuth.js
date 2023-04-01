import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signIn } from "../features/auth/authSlice";
import useToken from "../hooks/useToken";
import AuthAPI from "../API/AuthAPI";

export default function useAuth() {
  const dispatch = useDispatch();
  const { saveToken } = useToken();

  const { isSignedIn, signedUser, accessToken } = useSelector(
    (state) => state.auth
  );
  const auth = { isSignedIn, signedUser, accessToken };

  const setAuth = (signedUser, accessToken) => {
    return dispatch(signIn({ signedUser, accessToken }));
  };

  const signInUser = async (credentials) => {
    const result = await AuthAPI.signIn(credentials);
    console.log(result)
    if (!result.accessToken) {
      return {
        success: false,
        message: "Wrong email or password",
      };
    }

    setAuth(result.signedUser, result.accessToken);
    saveToken(result.accessToken);

    return {
      success: true,
    }
  };

  const signUpUser = (credentials) => {};

  const signOutUser = (credentials) => {};

  return { auth, setAuth, signInUser, signUpUser, signOutUser };
}

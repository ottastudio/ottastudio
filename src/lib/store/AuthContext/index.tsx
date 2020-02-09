import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useContext
} from "react";
import cookie from "js-cookie";

export type TokenType = string | null | undefined;
export type SetTokenType = Dispatch<SetStateAction<TokenType>>;

export interface AuthContextProps {
  token: TokenType;
  setToken: SetTokenType;
}
export const AuthContext = createContext<AuthContextProps>({
  token: undefined,
  setToken: () => {}
});
export const AuthProvider: React.FC<{}> = ({ children }) => {
  const [token, setToken] = useState<TokenType>(() => cookie.get("token"));

  useEffect(() => {
    const getCookie = cookie.get("token");
    setToken(getCookie);
  });
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
export const useAuthContext = () => useContext(AuthContext);

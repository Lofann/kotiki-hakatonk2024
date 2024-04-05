import { AuthorizationStatus } from "../../consts";

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export default PrivateRouteProps;

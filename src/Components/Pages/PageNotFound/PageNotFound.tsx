import { FC} from "react";
import useValidateUser from "../../../Hooks/useValidateUser";
import { OverlayNotification } from "../../Common/OverlayNotification/OverlayNotification";
import { useAuth } from "../../../Hooks/useAuth";

export const PageNotFound: FC = () => {

    const { isLoggedIn } = useAuth();
    const { token } = useValidateUser();

    if (!isLoggedIn) {
        return <OverlayNotification message={'Authentication required'} />;
    }
    return (
        <>
            return <OverlayNotification message={'404: Page not found'} />;
        </>
    )
}
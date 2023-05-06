import { FC } from "react";
import { OverlayNotification } from "../../Common/OverlayNotification/OverlayNotification";

export const PageNotFound: FC = () => {
    return <OverlayNotification message={'404: Page not found'} />
}
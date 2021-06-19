import React, { useCallback, useState } from "react"
import { uniqueId } from "lodash"

import { childrenInterface } from "../../utils/types/interfaces"
import { ALERT_SEVERITY, PLACEMENT_ENUMS } from "src/constants"
import { GlobalContext } from "../context"
import { getMessageString } from "src/utils"

export interface NotificationMessage {
  id: number
  severity: string
  text: string
}

export interface NotificationProps {
  list: NotificationMessage[]
  placement: string
}

export type DefaultGlobalContextTypes = {
  lightMode: boolean
  handleModeChange: () => void
  notifications: NotificationProps
  dismissNotification: (messageId: number) => void
  notify: (
    notificationStringOrObject: string | object,
    severity?: "success" | "primary" | "danger",
    notificationPlacement?:
      | "top-right"
      | "top-center"
      | "top-left"
      | "bottom-left"
      | "bottom-right"
      | "bottom-center"
  ) => void
}

export const notificationsInitialState: NotificationProps = {
  list: [],
  placement: "top-left",
}

const GlobalContextProvider = ({ children }: childrenInterface) => {
  const [lightMode, setLightMode] = useState(false)
  const [notifications, setNotifications] = useState<NotificationProps>(
    notificationsInitialState
  )

  const handleModeChange = () => setLightMode(prev => !prev)

  const dismissNotification = useCallback(id => {
    setNotifications(prev => ({
      ...prev,
      list: [...prev.list.filter(message => message?.id !== id)],
    }))
  }, [])

  const handleAlert = useCallback((newState, placement) => {
    setNotifications(prevState => ({
      ...prevState,
      placement: placement ? placement : prevState?.placement,
      list: [
        ...prevState.list,
        {
          ...newState,
          text: getMessageString(newState.text),
          id: parseInt(uniqueId(), 10),
        },
      ],
    }))
  }, [])

  const notify = useCallback(
    (text, severity, placement = PLACEMENT_ENUMS.topLeft) =>
      handleAlert(
        {
          severity,
          text,
        },
        placement
      ),
    [handleAlert]
  )

  return (
    <GlobalContext.Provider
      value={{
        dismissNotification,
        handleModeChange,
        lightMode,
        notifications,
        notify,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider

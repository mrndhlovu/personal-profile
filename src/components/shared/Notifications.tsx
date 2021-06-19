import React from "react"
import styled from "styled-components"

import { useGlobalContext } from "src/helpers/context"
import { FiX } from "react-icons/fi"

const Container = styled.div`
  min-width: 20vw;
  position: fixed;
  margin-bottom: 15px;
  z-index: 1000;

  &.top-left {
    left: 12px;
    top: 12px;
  }

  &.top-right {
    right: 12px;
    top: 12px;
  }

  &.top-center {
    left: 50%;
    transform: translateX(-50%);
    top: 12px;
  }

  &.bottom-left {
    left: 12px;
    bottom: 12px;
  }

  &.bottom-right {
    right: 12px;
    bottom: 12px;
  }

  &.bottom-center {
    left: 50%;
    transform: translateX(-50%);
    bottom: 12px;
  }
`

interface Props {
  variant: string
}

const AlertBox = styled.div<Props>`
  width: 100%;
  margin: 20px auto;
  padding: 15px;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 0 15px 5px #ccc;

  background-color: ${props => {
    switch (props.variant) {
      case "danger":
        return props.theme.colors?.foursquare

      case "success":
        return props.theme.colors?.delicious
      default:
        return props.theme.colors?.bgDark
    }
  }};

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`

const Notifications = () => {
  const { notifications, dismissNotification } = useGlobalContext()

  return (
    <Container className={`mi-alert-container ${notifications?.placement}`}>
      {notifications?.list.map((message, index) => (
        <AlertBox
          key={index}
          variant={message?.severity}
          className="mi-alert-box"
        >
          <span>{message.text}</span>
          <FiX
            cursor="pointer"
            onClick={() => dismissNotification(message?.id)}
          />
        </AlertBox>
      ))}
    </Container>
  )
}

export default Notifications

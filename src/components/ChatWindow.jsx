import { useState } from "react";
import { Card } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";

function ChatWindow(props) {
  return (
    props.showChatWindow && (
      <Card className="align-self-end" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {props.userSelected.username}
            <AiFillCloseCircle
              className="ms-3"
              onClick={() => props.setShowChatWindow(false)}
            />{" "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            SocketId:{props.userSelected.socketId}{" "}
          </Card.Subtitle>
          <Card.Text>Message one</Card.Text>
          <Card.Text>Message two</Card.Text>
        </Card.Body>
      </Card>
    )
  );
}

export default ChatWindow;

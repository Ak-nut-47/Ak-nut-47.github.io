import { Button, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Modal from "react-modal";

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "600px",
    padding: "24px",
    backgroundColor: "#ef775f",
    borderRadius: "10px",
  },
};

Modal.setAppElement("#root");

const MyModal = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        width="100%"
        h="100%"
        onClick={openModal}
        bgGradient="linear(45deg, #41474e, #ffffff)"
      >
        {text ? text : "Open Modal"}
      </Button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Example Modal"
      >
        <img
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          alt="Modal Image"
          style={{ width: "100%", marginBottom: "16px" }}
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          accusamus architecto quos neque blanditiis, velit, ducimus ratione
          dolor nam harum aliquid officiis quia tenetur perferendis saepe
          doloremque voluptas ad sint placeat unde? Maxime?
        </p>
        <Center>
          <Button variant="ghost" onClick={closeModal}>
            <RiCloseLine size={35} />
          </Button>
        </Center>
      </Modal>
    </>
  );
};

export default MyModal;

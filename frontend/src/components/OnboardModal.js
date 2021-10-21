import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const OnboardModal = (props) => {

    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(true)
    const [nestedModal, setNestModal] = useState(false)
    const [closeAll, setCloseAll] = useState(false)

    const toggle = () => setModal(!modal)
    const toggleNested = () => {
        setNestModal(!nestedModal)
        setCloseAll(false)
    }

    const toggleAll = () => {
        setNestedModal(!nestedModal)
        setCloseAll(true)
    }

    return (
        <>
            <div>
                <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
                <Modal>
                    <ModalHeader>Welcome!</ModalHeader>
                    <ModalBody>If you would like to learn more about how to use our app and out classes click below, otherwise have fun!
                        <br />
                        <Button></Button>
                    </ModalBody>
                </Modal>
            </div>
        </>
    )

}

export default OnboardModal
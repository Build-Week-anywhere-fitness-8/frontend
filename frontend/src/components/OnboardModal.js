import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const OnboardModal = (props) => {

    const [modal, setModal] = useState(false)
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
        null
    )

}

export default OnboardModal
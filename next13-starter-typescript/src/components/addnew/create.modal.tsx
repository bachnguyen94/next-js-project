'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast, Bounce } from 'react-toastify';

export default function CreateModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        formik.setErrors({});
        setShow(false);
    };
    const handleShow = () => setShow(true);
    const notify = () => toast.success("Wow so easy!");
    const formik = useFormik({
        initialValues: {
            title: '',
            content: '',
            author: '',
        },
        validationSchema: Yup.object({
        title: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        content: Yup.string()
            .max(200, 'Must be 200 characters or less')
            .required('Required'),
        author: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <Button className='btn btn-primary mb-3 text-left' onClick={handleShow}>Add new</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Add new</Modal.Title>
                <button onClick={notify}>Notify!</button>
                </Modal.Header>
                <form onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <Form.Label htmlFor="title">Title</Form.Label>
                        <Form.Control
                            id="title"
                            name="title"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <div>{formik.errors.title}</div>
                        ) : null}
                    
                        <Form.Label htmlFor="content">Content</Form.Label>
                        <Form.Control
                            id="content"
                            name="content"
                            as="textarea"
                            rows={3}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.content}
                        />
                        {formik.touched.content && formik.errors.content ? (
                            <div>{formik.errors.content}</div>
                        ) : null}
                    
                        <Form.Label htmlFor="author">Author</Form.Label>
                        <Form.Control
                            id="author"
                            name="author"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.author}
                        />
                        {formik.touched.author && formik.errors.author ? (
                            <div>{formik.errors.author}</div>
                        ) : null}
                    
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary">Save</Button>
                    </Modal.Footer>
                </form>
            </Modal>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>
    )
}
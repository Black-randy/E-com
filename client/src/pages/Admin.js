import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/Form';
import { useState } from 'react';
import Message from './Component/Modal';

function AdminPage() {
    const [show, setShow] = useState(false);
    const [id, setId] = useState();
    const [name,setName] = useState();
    const [price,setPrice] = useState();
    const [description,setDescription] = useState();
    const [url,setUrl] = useState();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, name,price,description,url })
    };

    function UploadData() {
        console.log("Uploading Data")
        fetch('/api/post_product', requestOptions)
        .then(response => response.json())
        .then(
            
            ResetForm());
    }
    function ResetForm(){
        setShow(true)
        setId("")
        setName("")
        setPrice("")
        setDescription("")
        setUrl("")
    }
        console.log(show)
  return (
    <div>
  
    <Message show={show}/>
    <Card style={{ width: '80%', marginLeft: '10%' }}>
    <Card.Header>ADMIN PAGE</Card.Header>
    <Card.Body>
      <Card.Title>PRODUCT DATA INPUT</Card.Title>
        <Form>
            <FloatingLabel
                controlId="id"
                label="ID"
                className="mb-3"
            >
                <Form.Control value={id} type="text" placeholder="ID" onChange={e => setId(e.target.value)}/>
            </FloatingLabel>
            <FloatingLabel controlId="name" label="Name">
                <Form.Control value={name} type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
            </FloatingLabel>

            <FloatingLabel controlId="price" label="Price">
                <Form.Control value={price} type="text" placeholder="Enter your price" onChange={e => setPrice(e.target.value)}/>
            </FloatingLabel>

            <FloatingLabel controlId="description" label="Description">
                <Form.Control value={description} type="text" placeholder="Description" onChange={e => setDescription(e.target.value)}/>
            </FloatingLabel>

            <FloatingLabel controlId="url" label="URL">
                <Form.Control value={url} type="text" placeholder="URL" onChange={e => setUrl(e.target.value)}/>
            </FloatingLabel>
        </Form>
        <br/>
      <Button variant="primary" onClick={UploadData}>UPLOAD</Button>
    </Card.Body>
  </Card>
  </div>
  );
}

export default AdminPage;
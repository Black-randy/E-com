import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, FloatingLabel} from 'react-bootstrap';

function AdminPage() {
    const [currentView] = useState('home');
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        price: '',
        description: '',
        url: ''
    });

    const getTitle = () => ({
        'product-input': 'Product Input',
        'product-list': 'Product List',
        'settings': 'Settings',
        'log-out': 'Log Out'
    })[currentView] || 'Welcome';

    const handleChange = (field) => (e) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/post_product', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            resetForm();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const resetForm = () => {
        setFormData({ id: '', name: '', price: '', description: '', url: '' });
    };

    return (
        <Container fluid>
            <Row>
                <Col md={12}>
                    <Card>
                        <Card.Header>ADMIN DASHBOARD - {getTitle()}</Card.Header>
                        <Card.Body>
                            <Form>
                                {Object.entries(formData).map(([key, value]) => (
                                    <FloatingLabel key={key} controlId={key} label={key.toUpperCase()} className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder={key.toUpperCase()}
                                            value={value}
                                            onChange={handleChange(key)}
                                        />
                                    </FloatingLabel>
                                ))}
                                <Button variant="primary" onClick={handleSubmit}>Upload</Button>
                                <Button variant="secondary" onClick={resetForm} className="ms-2">Reset</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminPage;

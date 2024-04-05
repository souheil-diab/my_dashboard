import React, {useContext} from 'react';
import UserCard from './UserCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import UserContext from './UserContext';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

function UserList() {

    const { t } = useTranslation();

    const {users, loading, error, totalUsers,activeUsers,inactiveUsers} = useContext(UserContext);

    if (loading) return <Container>Loading user profiles..</Container>;
    if (error) return <div>Error: {error}</div>;

    

  return (
        <div className='container'>
            <Row>
                <Col>
                <Card
            bg="primary"
            key="primary"
            text= 'white'
            style={{ width: '18rem' }}
            className="mb-2 mt-2"
            >
            <Card.Header>{t('total_users')}</Card.Header>
            <Card.Body>
                <Card.Title>{totalUsers} </Card.Title>
            </Card.Body>
            </Card>
                </Col>
                <Col>
                <Card
            bg="success"
            key="success"
            text= 'white'
            style={{ width: '18rem' }}
            className="mb-2 mt-2"
            >
            <Card.Header>{t('active_users')}</Card.Header>
            <Card.Body>
                <Card.Title>{activeUsers} </Card.Title>
            </Card.Body>
            </Card>
                </Col>
                <Col>
                <Card
            bg="danger"
            key="danger"
            text= 'white'
            style={{ width: '18rem' }}
            className="mb-2 mt-2"
            >
            <Card.Header>{t('inactive_users')}</Card.Header>
            <Card.Body>
                <Card.Title>{inactiveUsers} </Card.Title>
            </Card.Body>
            </Card>
                </Col>
            </Row>
        <div className='mt-2'>
             <Row>
                {users.map(user =>(
                    <Col key={user.id} className='mb-3'>
                        <UserCard key={user.id} user={user} />
                    </Col>
                ))}
            </Row>
        </div>
        </div>
       
    
  );
}

export default UserList;

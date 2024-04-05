import React from 'react';
import Card from 'react-bootstrap/Card';

function UserCard({ user }) {
  return (
   
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>User: {user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Username: {user.username}</Card.Subtitle>
        <div>
        <Card.Text>
          <ul>
            <li>
              Phone: {user.phone}
            </li>
            <li>
              Company: {user.company.name}
            </li>
          </ul>
        </Card.Text>
        </div>
        <Card.Link href={`mailto:${user.email}`}>Email: {user.email}</Card.Link>
      </Card.Body>
    </Card>
    
  );
}

export default UserCard;


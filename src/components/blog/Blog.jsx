import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import person from '../../../public/images/icons/sd.jpg'

const Blog = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <Card style={{ width: '90%', maxWidth: '350px', border: '1px solid #ccc', backgroundColor: '#fff' }}>
          <Image src={person} roundedCircle style={{ width: '80px', height: '80px', margin: '10px auto' }} />
          <Card.Body>
            <Card.Title style={{ fontSize: '1.2rem' }}>SD Soikot</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>Study at Moilvibazar Polytechnic Institute</Card.Subtitle>
            <Card.Text style={{ fontSize: '0.8rem' }}>
              My name is SD Soikot and I'm passionate about technology and programming. I also love to travel and explore new places. In this blog, I'll be sharing my thoughts and experiences on a variety of topics, including web development, data science and machine learning, cybersecurity and network engineering, as well as travel and lifestyle.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#f8f9fa' }}>
            <span role="img" aria-label="emoji" style={{ fontSize: '1.2rem' }}>👍</span>
            <span role="img" aria-label="emoji" style={{ fontSize: '1.2rem' }}>👎</span>
            <span role="img" aria-label="emoji" style={{ fontSize: '1.2rem' }}>❤️</span>
            <span role="img" aria-label="emoji" style={{ fontSize: '1.2rem' }}>👀</span>
          </Card.Footer>
        </Card>
      </div>
      
      
    );
};

export default Blog;

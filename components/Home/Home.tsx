import React from 'react'
import { Container } from 'react-bootstrap'
import Filter from '../Filter/Filter'
import ProfileList from '../ProfileList/ProfileList'

const Home: React.FC = () => {
  return (
    <div className="home__section">
        <Container>
            <Filter />
            <ProfileList />
        </Container>
    </div>
  )
}

export default Home
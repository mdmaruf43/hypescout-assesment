import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Filter from '../Filter/Filter'
import ProfileList from '../ProfileList/ProfileList'
import { userData }  from "../../services/API/profileDataAPI";
import ProfileDataType from '../../dto/ProfileDataType';

const Home: React.FC = () => {
    const [profileData, setProfileData]     = useState<ProfileDataType[]>([]);
    const [dataLength, setDataLenght]       = useState<number>(0);
    const [userSearch, setUserSearch]       = useState<string>("");

    useEffect(() => {
        setProfileData(userData?.data?.users);
        setDataLenght(userData?.data?.users?.length);
    }, [])

    return (
        <div className="home__section">
            <Container>
                <Filter 
                    dataLength={dataLength} 
                    setUserSearch={setUserSearch}
                    userSearch={userSearch}
                />
                <ProfileList 
                    profileData={profileData}
                    userSearch={userSearch}
                />
            </Container>
        </div>
    )
}

export default Home
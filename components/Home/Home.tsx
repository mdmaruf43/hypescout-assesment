import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Filter from '../Filter/Filter'
import ProfileList from '../ProfileList/ProfileList'
import { userData }  from "../../services/API/profileDataAPI";
import ProfileDataType from '../../dto/ProfileDataType';

const Home: React.FC = () => {
    const [profileData, setProfileData]                         = useState<ProfileDataType[]>([]);
    const [dataLength, setDataLenght]                           = useState<number>(0);
    const [userSearch, setUserSearch]                           = useState<string>("");
    const [influencerIndustry, setInfluencerIndustry] 	        = useState<string>("");
	const [influencerCountry, setInfluencerCountry] 	        = useState<string>("");
	const [influencerSocialMedia, setInfluencerSocialMedia] 	= useState<string>("");

    useEffect(() => {
        setProfileData(userData?.data?.users);
        setDataLenght(userData?.data?.users?.length);
    }, [])

    const handleReset = () => {
        setInfluencerIndustry("");
        setInfluencerCountry("");
        setInfluencerSocialMedia("");
        setProfileData(userData?.data?.users);
        setDataLenght(userData?.data?.users?.length);
    }

    const handleSearch = () => {
        const newData = userData?.data?.users
                            .filter(profile => profile.categories === (influencerIndustry === '' ? profile?.categories : influencerIndustry))
                            .filter(y => y.country === (influencerCountry === '' ? y?.country : influencerCountry))
                            .filter(z => z?.active_social_media === (influencerSocialMedia === '' ? z?.active_social_media : influencerSocialMedia));
        setProfileData(newData);
        setDataLenght(newData?.length);
    }

    return (
        <div className="home__section">
            <Container>
                <Filter 
                    dataLength={dataLength} 
                    setUserSearch={setUserSearch}
                    userSearch={userSearch}
                    setInfluencerIndustry={setInfluencerIndustry}
                    setInfluencerCountry={setInfluencerCountry}
                    setInfluencerSocialMedia={setInfluencerSocialMedia}
                    handleSearch={handleSearch}
                    handleReset={handleReset}
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
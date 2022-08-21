/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import ProfileDataType from '../../dto/ProfileDataType';
import ReactPaginate from 'react-paginate';

interface PropsDataType {
    profileData:    ProfileDataType[];
    userSearch:     string;
}

const ProfileList: React.FC<PropsDataType> = ({ profileData, userSearch }) => {
    const [currentItems, setCurrentItems] = useState<ProfileDataType[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
  
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(profileData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(profileData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, profileData]);
  
    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = (event.selected * itemsPerPage) % profileData.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div>
            <div className="profile__grid">
            {
                currentItems?.length > 0 ? 
                    currentItems?.map((user, index) => (
                        user?.name?.toLocaleLowerCase().includes(userSearch.toLowerCase()) && (
                            <div key={index} className="each">
                                <div className="img__wraper">
                                    <img src={user?.photo} alt={user?.name} />
                                </div>
                                <div className="content">
                                    <h6>{user?.name}</h6>
                                    <p className="loaction"><img src="/assets/images/icon/location.svg" alt="icon" /> {user?.location}</p>
                                    <p className="join"><img src="/assets/images/icon/clock.svg" alt="icon" /> Joined On: {user?.join_at}</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <ul className="social__list d-flex list-unstyled">
                                        <li><a href={user?.social?.facebook_link} target="_blank" rel="noopener noreferrer"><img src="/assets/images/icon/fb-color.svg" alt="icon" /></a></li>
                                        <li><a href={user?.social?.instagrame_link} target="_blank" rel="noopener noreferrer"><img src="/assets/images/icon/insta-color.svg" alt="icon" /></a></li>
                                        <li><a href={user?.social?.linkedin_link} target="_blank" rel="noopener noreferrer"><img src="/assets/images/icon/linkedin-color.svg" alt="icon" /></a></li>
                                        <li><a href={user?.social?.twitter_link} target="_blank" rel="noopener noreferrer"><img src="/assets/images/icon/twitter-color.svg" alt="icon" /></a></li>
                                    </ul>
                                </div>
                                <div className="bottom d-flex justify-content-between">
                                    <div className="each__sec w-100">
                                        <p><span>{user?.follwers}</span> <br /> Follwers</p>
                                    </div>
                                    <div className="each__sec w-100">
                                        <p><span>{user?.categories}</span> <br /> Categories</p>
                                    </div>
                                    <div className="each__sec w-100">
                                        <p><span>{user?.gender}</span> <br /> Gender</p>
                                    </div>
                                </div>
                            </div>
                        )
                    ))    
                    : null
            }
            
            </div>
            <div className="d-flex justify-content-center">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next 🡢"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="🡠 Previous"
                    containerClassName="pagination"
                    pageClassName="page__count"
                    activeLinkClassName="active"
                />
            </div>
        </div>
    )
}

export default ProfileList
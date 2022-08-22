/* eslint-disable @next/next/no-img-element */
import React, { useState, Dispatch, SetStateAction } from 'react';
import { Form, OverlayTrigger, Popover } from 'react-bootstrap';
import Slider from 'react-rangeslider';
import ThemeToggleContext from '../../context/ThemeToggleContext';
import ThemeContextType from '../../dto/ThemeContextType';

interface PropsDataType {
    dataLength:     number;
    userSearch:     string;
    setUserSearch:  Dispatch<SetStateAction<string>>;
}

const Filter: React.FC<PropsDataType> = ({ dataLength, setUserSearch, userSearch }) => {
    const [checked, setChecked]                     = useState(false);
    const [femaleCheck, setFemaleCheck]             = useState(false);
    const [sliderValue, setSliderValue ]            = useState<number>(50);
    const { updateTheme }                    = React.useContext(ThemeToggleContext) as ThemeContextType; 

    const handleChangeHorizontal = (value: number) => {
        setSliderValue(value);
    }
    
    const horizontalLabels = {
        1: '1K',
        100: '100K',
        200: '200K',
        400:  '400K',
        500: '500K'
    }

    const filterPopover = (
        <Popover id="popover-basic" className={`filter__popover ${updateTheme}`}>
            <Popover.Body>
                <div className="filter__dropdown">
                    <h6 className="header">Filter Options</h6>
                    <div className="filter__form">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Influencer’s Industry</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select Options</option>
                                    <option value="1">Industry</option>
                                    <option value="2">Industry</option>
                                    <option value="3">Industry</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Influencer’s Industry</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Influencer’s Country</option>
                                    <option value="1">Industry</option>
                                    <option value="2">Industry</option>
                                    <option value="3">Industry</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Audience’s Country</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select Options</option>
                                    <option value="1">Industry</option>
                                    <option value="2">Industry</option>
                                    <option value="3">Industry</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Influencer’s Social Media Platform</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select Options</option>
                                    <option value="1">Industry</option>
                                    <option value="2">Industry</option>
                                    <option value="3">Industry</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Influencer’s Social Media Platform</Form.Label>
                                <div className='slider custom-labels'>
                                    <Slider
                                        min={1}
                                        max={500}
                                        value={sliderValue}
                                        labels={horizontalLabels}
                                        format={(value) => value + "K"}
                                        onChange={handleChangeHorizontal}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Influencer’s Gender</Form.Label>
                                <div className="d-flex">
                                    <Form.Check
                                        inline
                                        label="Male"
                                        name="male"
                                        type="radio"  
                                        id={`default1`}
                                        checked={checked}
                                        onChange={(e) => setChecked(e.target.checked)}
                                        onClick={() => setChecked(prevState => !prevState)}
                                    />
                                    <Form.Check
                                        inline
                                        label="Female"
                                        name="female"
                                        type="radio"
                                        id={`inline-radio-2`}
                                        checked={femaleCheck}
                                        onChange={(e) => setFemaleCheck(e.target.checked)}
                                        onClick={() => setFemaleCheck(prevState => !prevState)}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <div className="d-flex justify-content-end">
                                    <div>
                                        <button className="default__btn reset" type="reset">Reset</button>
                                        <button className="default__btn" type="submit">Submit</button>
                                    </div>
                                </div>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <div className={`filter__grid ${updateTheme}`}>
            <div className="d-flex align-items-lg-center left">
                <h6>Profile ({dataLength})</h6>
            </div>
            <div className="form__section d-flex align-items-lg-center">
                <div className="w-100">
                    <Form>
                        <Form.Group>
                            <div className="position-relative">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Search Profile"
                                    value={userSearch}  
                                    onChange={(e) => setUserSearch(e.target.value)}
                                />
                                <img className="search__icon" src="/assets/images/icon/search.svg" alt="icon" />
                            </div>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-lg-end justify-content-center right">
                <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={filterPopover}>
                    <button className="default__btn"><img src="/assets/images/icon/filter.svg" alt="icon" /> Advance Filter</button>
                </OverlayTrigger>
            </div>
        </div>
    )
}

export default Filter
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Form } from 'react-bootstrap';

const Filter: React.FC = () => {
    return (
        <div className="filter__grid">
            <div className="d-flex align-items-lg-center left">
                <h6>Profile (100)</h6>
            </div>
            <div className="form__section d-flex align-items-lg-center">
                <div className="w-100">
                    <Form>
                        <Form.Group>
                            <div className="position-relative">
                                <Form.Control type="text" placeholder="Search Profile" />
                                <img className="search__icon" src="/assets/images/icon/search.svg" alt="icon" />
                            </div>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-lg-end justify-content-center right">
                <button className="default__btn"><img src="/assets/images/icon/filter.svg" alt="icon" /> Advance Filter</button>
            </div>
        </div>
    )
}

export default Filter
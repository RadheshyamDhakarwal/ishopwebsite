import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfilePageUser = () => {
    const { user } = useSelector(Store => Store.user)
    return (
        <div>
            <Card className="m-5 profile shadow">
                <Card.Body className="py-6 px-7">
                    <Row className="align-items-center">
                        <Col lg={11} md={11} xs={10}>
                            <Row>
                                <Col lg={1} xs={12}>
                                    <div
                                        className=""
                                        style={{ width: "4.5rem", height: "4.5rem" }}
                                    >
                                        <span className="text-white rounded-full p-5 bg-[#007D88] fs-2 fw-normal" >
                                          RD
                                            {/* {data?.profile
                        ? firstName + lastName
                        : nameInitialFormatter(data?.username)} */}
                                        </span>
                                    </div>
                                </Col>
                                <Col lg={11} xs={12}>
                                    <p className="fs-3">

                                    </p>
                                    <span className="fs-6">{user.email}</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={1} md={1} xs={2}>
                            <Link to={"./"} className="m-0">
                                <Button variant="primary px-4 ">Edit</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Col lg={10} md={10} xs={12}>
                        <Row>
                            <Col lg={6} md={6} xs={12}>
                                <div className="namehead ">First Name</div>
                                {/* <div>{valueFormat(preFormData?.profile?.firstName)}</div> */}
                            </Col>
                            <Col lg={6} md={6} xs={12}>
                                <div className="namehead">Last Name</div>
                                {/* <div>{valueFormat(preFormData?.profile?.lastName)}</div> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={6} xs={12}>
                                <div className="namehead">Email</div>
                                {/* <div>{valueFormat(preFormData?.email)}</div> */}
                            </Col>
                            <Col lg={6} md={6} xs={12}>
                                <div className="namehead">Mobile</div>
                                {/* <div>{preFormData?.profile?.mobile}</div> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={6} xs={12}>
                                <div className="namehead">Date Of Birth</div>
                                {/* <div>{dateFormatter(preFormData?.profile?.dob)}</div> */}
                            </Col>
                        </Row>
                    </Col>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProfilePageUser;

import React, { useState } from "react";
import { EditProfileWrapper } from "./EditProfile.styled";
import { Col, Form, Row, Calendar, Input } from "antd";
import dropdown from "../../../assets/icon/drop-down.svg";
import CustomUpload from "../../common/upload/CustomUpload";
import CustomInput from "../../common/input/Input";
import CustomButton from "../../common/button/Button";

const EditProfile = () => {
  const [dob, setDob] = useState("");
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleDateSelect = (date) => {
    const formattedDate = date.format("DD MMMM YYYY");
    setDob(formattedDate);
    form.setFieldsValue({ dob: formattedDate });
    setIsCalendarVisible(false);
  };
  return (
    <EditProfileWrapper>
      <Row>
        <Col xl={3} lg={24} md={24} sm={24} xs={24} className="upload-col">
          <CustomUpload />
        </Col>
        <Col xl={21} lg={24} md={24} sm={24} xs={24}>
          <Form
            form={form}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row gutter={[0, 22]}>
              <Col span={24}>
                <Row gutter={[30, 15]}>
                  <Col span={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                      name="yourName"
                      rules={[
                        { required: true, message: "Please enter your name" },
                      ]}
                    >
                      <CustomInput
                        label={"Your Name"}
                        placeholder="Your Name"
                        name="yourName"
                        className={"form-input"}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                      name="userName"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your username",
                        },
                      ]}
                    >
                      <CustomInput
                        label={"User Name"}
                        placeholder="User Name"
                        name="userName"
                        className={"form-input"}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row gutter={[30, 15]}>
                  <Col span={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please enter your email" },
                        {
                          pattern:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email format",
                        },
                      ]}
                    >
                      <CustomInput
                        label={"Email"}
                        placeholder="Email"
                        name="email"
                        type="email"
                        className={"form-input"}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your password",
                        },
                        {
                          pattern:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,40}$/,
                          message:
                            "Password must include upper, lower case, number, and be 8-40 characters",
                        },
                      ]}
                    >
                      <CustomInput
                        label={"Password"}
                        placeholder="Password"
                        name="password"
                        type="password"
                        className={"form-input"}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row gutter={[30, 15]}>
                  <Col span={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                      name="dob"
                      rules={[
                        {
                          required: true,
                          message: "Please select your date of birth",
                        },
                      ]}
                    >
                      <div className="input-label">Date of Birth</div>
                      <div style={{ position: "relative" }}>
                        <Input
                          placeholder="25 January 1990"
                          name="dob"
                          value={dob}
                          readOnly
                          onClick={() =>
                            setIsCalendarVisible(!isCalendarVisible)
                          }
                          className="dob-input"
                          suffix={
                            <img
                              src={dropdown}
                              alt="dropdown"
                              style={{ width: "18px", cursor: "pointer" }}
                              onClick={() =>
                                setIsCalendarVisible(!isCalendarVisible)
                              }
                            />
                          }
                        />
                        {isCalendarVisible && (
                          <div className="calendar-dropdown above-elements">
                            <Calendar
                              fullscreen={false}
                              onSelect={handleDateSelect}
                            />
                          </div>
                        )}
                      </div>
                    </Form.Item>
                  </Col>
                  <Col span={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                      name="presentAddress"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your present address",
                        },
                      ]}
                    >
                      <CustomInput
                        label={"Present Address"}
                        placeholder="Present Address"
                        name="presentAddress"
                        className={"form-input"}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row gutter={[30, 15]}>
                  <Col span={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                      name="permanentAddress"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your permanent address",
                        },
                      ]}
                    >
                      <CustomInput
                        label={"Permanent Address"}
                        placeholder="Permanent Address"
                        name="permanentAddress"
                        className={"form-input"}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                      name="city"
                      rules={[
                        { required: true, message: "Please enter your city" },
                      ]}
                    >
                      <CustomInput
                        label={"City"}
                        placeholder="City"
                        name="city"
                        className={"form-input"}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row gutter={[30, 15]}>
                  <Col span={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                      name="postalCode"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your postal code",
                        },
                      ]}
                    >
                      <CustomInput
                        label={"Postal Code"}
                        placeholder="Postal Code"
                        name="postalCode"
                        className={"form-input"}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                      name="country"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your country",
                        },
                      ]}
                    >
                      <CustomInput
                        label={"Country"}
                        placeholder="Country"
                        name="country"
                        className={"form-input"}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col span={24} className="save-btn-col">
                <CustomButton
                  className={"save-btn"}
                  title={"Save"}
                  htmlType="submit"
                  buttonWrapperClass="save-btn-wrapper"
                />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </EditProfileWrapper>
  );
};

export default EditProfile;

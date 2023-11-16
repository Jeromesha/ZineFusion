import React from "react";
import { Form, Input, Button, Select, DatePicker, Rate, Row, Col } from "antd";
import { Container } from "react-bootstrap";

const { Option } = Select;

const AddCelebrityForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <Container>
      <div>
        <h4 className="mt-3 mb-3">Add Celebrity</h4>
        <hr />

        <Form
          style={{ paddingTop: "3%" }}
          form={form}
          name="addCelebrity"
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Full Name</span>}
                name="name"
                rules={[
                  {
                    required: true,
                    message: <span className="philosopher-font">Please enter the celebrity's full name</span>,
                  },
                ]}
              >
                <Input  className="philosopher-font"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Nick Name</span>}
                name="nick"
                rules={[
                  {
                    required: true,
                    message: <span className="philosopher-font">Please enter the celebrity's nick name</span>,
                  },
                ]}
              >
                <Input className="philosopher-font"/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Industry</span>}
                name="industry"
                rules={[
                  { required: true, message: <span className="philosopher-font">Please select the industry</span> },
                ]}
              >
                <Select className="philosopher-font" placeholder={<span className="philosopher-font">Select industry</span>}>
                  <Option value="Kollywood">Kollywood</Option>
                  <Option value="Tollywood">Tollywood</Option>
                  <Option value="Mollywood">Mollywood</Option>
                  <Option value="Sandalwood">Sandalwood</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Date of Birth</span>}
                name="dob"
                rules={[
                  {
                    required: true,
                    message: <span className="philosopher-font">Please select the date of birth</span>,
                  },
                ]}
              >
                <DatePicker className="philosopher-font"/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Debut</span>}
                name="debut"
                rules={[
                  { required: true, message: <span className="philosopher-font">Please enter the debut movie</span> },
                ]}
              >
                <Select className="philosopher-font"
                  mode="tags"
                  tokenSeparators={[","]}
                  style={{ width: "100%" }}
                >
                  {/* Options go here */}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Movies List</span>}
                name="movies"
                rules={[
                  { required: true, message: <span className="philosopher-font">Please enter the movies list</span> },
                ]}
              >
                <Select className="philosopher-font"
                  mode="tags"
                  tokenSeparators={[","]}
                  style={{ width: "100%" }}
                >
                  {/* Options go here */}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Upcoming Movies</span>}
                name="upcomingMovies"
                rules={[
                  {
                    required: true,
                    message: <span className="philosopher-font">Please enter the upcoming movies</span>,
                  },
                ]}
              >
                <Select className="philosopher-font"
                  mode="tags"
                  tokenSeparators={[","]}
                  style={{ width: "100%" }}
                >
                  {/* Options go here */}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Spouse</span>}
                name="spouse"
                rules={[
                  { required: true, message: <span className="philosopher-font">Please enter the spouse's name</span> },
                ]}
              >
                <Input className="philosopher-font"/>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Children</span>}
                name="children"
                rules={[
                  {
                    required: true,
                    message: <span className="philosopher-font">Please enter the children's names</span>,
                  },
                ]}
              >
                <Select
                className="philosopher-font"
                  mode="tags"
                  tokenSeparators={[","]}
                  style={{ width: "100%" }}
                >
                  {/* Options go here */}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Awards</span>}
                name="awards"
                rules={[{ required: true, message: <span className="philosopher-font">Please enter the award</span> }]}
              >
                <Select className="philosopher-font"
                  mode="tags"
                  tokenSeparators={[","]}
                  style={{ width: "100%" }}
                >
                  {/* Options go here */}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Bio</span>}
                name="bio"
                rules={[
                  { required: true, message: <span className="philosopher-font">Please enter the celebrity bio</span> },
                ]}
              >
                <Input.TextArea className="philosopher-font"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Rating</span>}
                name="rating"
                rules={[
                  { required: true, message: <span className="philosopher-font">Please rate the celebrity</span> },
                ]}
              >
                <Rate className="philosopher-font"/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} style={{ paddingTop: "3%" }}>
            <Col span={24}>
              <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                <Button
                className="philosopher-font"
                  type="primary"
                  htmlType="submit"
                  style={{ display: "block", margin: "0 auto" }}
                >
                  Add Celebrity
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default AddCelebrityForm;
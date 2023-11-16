import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Upload,
  Col,
  Row,
  Rate,
} from "antd";
import { Container } from "react-bootstrap";
import { InboxOutlined, DeleteOutlined } from "@ant-design/icons";
import "../../../Css/Admin.css";

const { Option } = Select;

const AddTVS = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const [imageFiles, setImageFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFormSubmit = (values) => {
    // Include the image files in the form data
    const formData = new FormData();
    imageFiles.forEach((file, index) => {
      formData.append(`image${index}`, file);
    });
    for (const key in values) {
      formData.append(key, values[key]);
    }

    // Handle form submission with formData
    onSubmit(formData);
    form.resetFields();
  };

  const customRequest = ({ file, onSuccess, onError }) => {
    // You can handle the file upload here, for example, using Axios or Fetch.
    // Once the upload is successful, call onSuccess, and if there's an error, call onError.
    // Here, we simulate a successful upload.
    setTimeout(() => {
      onSuccess();
      setImageFiles([...imageFiles, file]); // Add the uploaded file to the imageFiles array
      setUploadedImages([
        ...uploadedImages,
        {
          file,
          url: URL.createObjectURL(file),
        },
      ]); // Set the uploaded images for rendering
    }, 1000);
  };

  const removeImage = (fileToRemove) => {
    const updatedFiles = imageFiles.filter((file) => file !== fileToRemove);
    const updatedImages = uploadedImages.filter(
      (image) => image.file !== fileToRemove
    );
    setImageFiles(updatedFiles);
    setUploadedImages(updatedImages);
  };

  // Define an array of field configurations
  const formFields = [
    {
      label: <span className="philosopher-font">Select</span>,
      name: "type",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">Please select tv show type</span>
          ),
        },
      ],
      component: (
        <Select
          mode="single"
          style={{ fontFamily: "'Philosopher', sans-serif" }}
          placeholder="Fiction / Non-Fiction"
        >
          <Option
            value="Fiction"
            style={{ fontFamily: "'Philosopher', sans-serif" }}
          >
            Fiction
          </Option>
          <Option
            value="Non-Fiction"
            style={{ fontFamily: "'Philosopher', sans-serif" }}
          >
            Non-Fiction
          </Option>
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">Tv Show Title</span>,
      name: "tvshowTitle",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the tv show title
            </span>
          ),
        },
      ],
      component: <Input className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">Director</span>,
      name: "directorName",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the director name
            </span>
          ),
        },
      ],
      component: <Input className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">Writer</span>,
      name: "writerName",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the writer name
            </span>
          ),
        },
      ],
      component: <Input className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">Genre</span>,
      name: "genre",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please select at least one genre
            </span>
          ),
        },
      ],
      component: (
        <Select
          mode="multiple"
          placeholder="Select genre(s)"
          className="philosopher-font"
        >
          <Option value="Action" className="philosopher-font">
            Action
          </Option>
          <Option value="Drama" className="philosopher-font">
            Drama
          </Option>
          <Option value="Comedy" className="philosopher-font">
            Comedy
          </Option>
          <Option value="Horror" className="philosopher-font">
            Horror
          </Option>
          <Option value="Romance" className="philosopher-font">
            Romance
          </Option>
          <Option value="Science Fiction" className="philosopher-font">
            Science Fiction
          </Option>
          <Option value="Adventure" className="philosopher-font">
            Adventure
          </Option>
          <Option value="Fantasy" className="philosopher-font">
            Fantasy
          </Option>
          <Option value="Documentry" className="philosopher-font">
            Horror
          </Option>
          <Option value="Thriller" className="philosopher-font">
            Thriller
          </Option>
          <Option value="Crime" className="philosopher-font">
            Crime
          </Option>
          <Option value="Mystery" className="philosopher-font">
            Mystery
          </Option>
          <Option value="Animation" className="philosopher-font">
            Animation
          </Option>
          <Option value="War" className="philosopher-font">
            War
          </Option>
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">Cast</span>,
      name: "castAndCrew",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the cast details
            </span>
          ),
        },
      ],
      component: <Input className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">Music Director</span>,
      name: "music Director",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the music director
            </span>
          ),
        },
      ],
      component: <Input className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">Cinematographer</span>,
      name: "cinematographer",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the Cinematographer
            </span>
          ),
        },
      ],
      component: <Input className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">Production Company</span>,
      name: "production",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the Production Company
            </span>
          ),
        },
      ],
      component: <Input className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">Initial Release</span>,
      name: "initialrelease",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the release date
            </span>
          ),
        },
      ],
      component: <DatePicker className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">Runtime</span>,
      name: "runtime",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Invalid runtime format. Please use the format "2h 45min".
            </span>
          ),
        },
        {
          pattern: /^(\d+)h (\d+)min$/,
          message: (
            <span className="philosopher-font">
              Invalid runtime format. Please use the format "2h 45min".
            </span>
          ),
        },
      ],
      component: (
        <Input placeholder="e.g., 2h 45min" className="philosopher-font" />
      ),
    },
    {
      label: <span className="philosopher-font">Description</span>,
      name: "description",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the description
            </span>
          ),
        },
      ],
      component: <Input.TextArea className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">Images</span>,
      name: "images",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please upload at least one image
            </span>
          ),
        },
      ],
      component: (
        <Upload
          customRequest={customRequest}
          accept=".jpg, .jpeg, .png, .gif"
          multiple
          showUploadList={false}
          className="phiosopher-font"
        >
          <Button className="philosopher-font" icon={<InboxOutlined />}>
            Click or drag files to upload
          </Button>
        </Upload>
      ),
    },
    {
      label: <span className="philosopher-font">Rating</span>,
      name: "rating",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">Please rate the web series</span>
          ),
        },
      ],
      component: <Rate className="philosopher-font" />,
    },

    // Add more field configurations here
  ];

  return (
    <div>
      <Container>
        <h4 className="mt-3 mb-3">Add Tv Shows</h4>
        <hr />

        <Form
          style={{ paddingTop: "3%" }}
          form={form}
          onFinish={handleFormSubmit}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Row gutter={16}>
            <Col md={12} lg={12}>
              {formFields.slice(0, 7).map((field) => (
                <Form.Item
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  rules={field.rules}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  {field.component}
                </Form.Item>
              ))}
            </Col>
            <Col md={12} lg={12}>
              {formFields.slice(7).map((field) => (
                <Form.Item
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  rules={field.rules}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  {field.component}
                </Form.Item>
              ))}
            </Col>
          </Row>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 8,
              style: { textAlign: "center", paddingTop: "3%" },
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <div className="picture-wall">
          {uploadedImages.map((image, index) => (
            <div key={index} className="picture-wall-item">
              <img
                src={image.url}
                alt={`Uploaded ${index}`}
                className="picture-wall-image-small"
              />
              <Button
                icon={<DeleteOutlined />}
                onClick={() => removeImage(image.file)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AddTVS;
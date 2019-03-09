import React from "react";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Modal,
  message
} from "../components/design";

const { Option } = Select;

class ChannelForm extends React.Component {
  rules = [
    {
      required: true,
      message: "cannot be blank"
    }
  ];

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.channel
          .create(values)
          .then(() => {
            this.props.closeModal();
            message.success("Added channel");
            this.props.channel.getAll();
            this.props.form.resetFields();
          })
          .catch(e => {
            message.error(e);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    return (
      <Modal
        title="Add Channel"
        visible={this.props.visible}
        onOk={this.handleSubmit}
        onCancel={this.props.closeModal}
      >
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Channel Name" hasFeedback>
            {getFieldDecorator("channel_name", {
              rules: this.rules
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Rank" hasFeedback>
            {getFieldDecorator("rank", {
              rules: this.rules
            })(<InputNumber style={{ width: "100%" }} min={5001} />)}
          </Form.Item>

          <Form.Item label="Grade" hasFeedback>
            {getFieldDecorator("grade", {
              rules: this.rules
            })(
              <Select>
                <Option key="A++">A++</Option>
                <Option key="A+">A+</Option>
                <Option key="A">A</Option>
                <Option key="A-">A-</Option>
                <Option key="B+">B+</Option>
              </Select>
            )}
          </Form.Item>

          <Form.Item label="Videos Uploads" hasFeedback>
            {getFieldDecorator("video_uploads", {
              rules: this.rules
            })(<InputNumber style={{ width: "100%" }} min={0} />)}
          </Form.Item>

          <Form.Item label="Subscribers" hasFeedback>
            {getFieldDecorator("subscribers", {
              rules: this.rules
            })(<InputNumber style={{ width: "100%" }} min={0} />)}
          </Form.Item>

          <Form.Item label="Video Views" hasFeedback>
            {getFieldDecorator("video_views", {
              rules: this.rules
            })(<InputNumber style={{ width: "100%" }} min={0} />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const WrappedForm = Form.create({ name: "channel_form" })(ChannelForm);

export default WrappedForm;

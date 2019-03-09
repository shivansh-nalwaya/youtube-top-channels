import React from "react";
import { Card, Row, Col } from "./design";
import First from "../images/first.png";
import Second from "../images/second.png";
import Third from "../images/third.png";
import { Link } from "react-router-dom";

const Title = props => {
  const logo = [First, Second, Third];
  return (
    <Row type="flex" justify="space-around">
      <Col> </Col>
      <Col>
        <Link to={`/${props.channel._id}`}>{props.channel.channel_name}</Link>
      </Col>
      <Col>
        <img
          src={logo[props.channel.rank - 1]}
          alt="Logo"
          width={30}
          height={30}
        />
      </Col>
    </Row>
  );
};

export const TopCard = props => {
  if (!props.channel) return <Card />;
  return (
    <Card title={<Title {...props} />} style={{ marginBottom: 20 }}>
      <Row>
        <Col span={12}>Grade</Col>
        <Col span={12}>{props.channel.grade}</Col>
      </Row>
      <Row>
        <Col span={12}>Video Uploads</Col>
        <Col span={12}>{props.channel.video_uploads}</Col>
      </Row>
      <Row>
        <Col span={12}>Subscribers</Col>
        <Col span={12}>{props.channel.subscribers}</Col>
      </Row>
      <Row>
        <Col span={12}>Video Views</Col>
        <Col span={12}>{props.channel.video_views}</Col>
      </Row>
    </Card>
  );
};

import React from "react";
import { Card, Row, Col, Spin } from "../components/design";
import ChannelModel from "../models/ChannelModel";
import { extendObservable } from "mobx";
import { observer } from "mobx-react";

const Title = props => {
  return (
    <Row type="flex" justify="space-around">
      <Col> </Col>
      <Col>{props.channel.channel_name}</Col>
      <Col />
    </Row>
  );
};

class ChannelCard extends React.Component {
  constructor(props) {
    super(props);
    this.channelModel = new ChannelModel();
    extendObservable(this, {
      channel: {},
      isLoading: true
    });
    this.channelModel.find(props.match.params.channel_id).then(res => {
      this.channel = res.result;
      this.isLoading = false;
    });
  }

  render() {
    return (
      <Spin spinning={this.isLoading}>
        <Card
          title={<Title channel={this.channel} />}
          style={{ marginBottom: 20 }}
        >
          <Row>
            <Col span={12}>Rank</Col>
            <Col span={12}>{this.channel.rank}</Col>
          </Row>
          <Row>
            <Col span={12}>Grade</Col>
            <Col span={12}>{this.channel.grade}</Col>
          </Row>
          <Row>
            <Col span={12}>Video Uploads</Col>
            <Col span={12}>{this.channel.video_uploads}</Col>
          </Row>
          <Row>
            <Col span={12}>Subscribers</Col>
            <Col span={12}>{this.channel.subscribers}</Col>
          </Row>
          <Row>
            <Col span={12}>Video Views</Col>
            <Col span={12}>{this.channel.video_views}</Col>
          </Row>
        </Card>
      </Spin>
    );
  }
}

export default observer(ChannelCard);

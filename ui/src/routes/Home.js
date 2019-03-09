import React, { Component } from "react";
import { Layout, Row, Col, Spin } from "../components/design";
import { observer } from "mobx-react";
import { extendObservable } from "mobx";
import ChannelTable from "../components/ChannelTable";
import { TopCard } from "../components/TopCard";

const { Content } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    extendObservable(this, { topChannels: {}, isLoading: false });
    props.channel.topChannels().then(res => {
      this.topChannels.first = res.data[0];
      this.topChannels.second = res.data[1];
      this.topChannels.third = res.data[2];
    });
  }

  render() {
    return (
      <Content style={{ padding: 20 }}>
        <Spin spinning={this.isLoading}>
          <Row gutter={16}>
            <Col span={8}>
              <TopCard channel={this.topChannels.second} />
            </Col>
            <Col span={8}>
              <TopCard channel={this.topChannels.first} />
            </Col>
            <Col span={8}>
              <TopCard channel={this.topChannels.third} />
            </Col>
          </Row>
        </Spin>
        <ChannelTable channel={this.props.channel} />
      </Content>
    );
  }
}

export default observer(Home);

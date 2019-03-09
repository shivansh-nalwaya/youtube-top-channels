import React from "react";
import { Link } from "react-router-dom";
import { Table, Layout, Button, Input, Icon } from "../components/design";
import { observer } from "mobx-react";

const Content = Layout.Content;

class ChannelTable extends React.Component {
  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    }
  });

  render() {
    const columns = [
      {
        title: "Rank",
        key: "rank",
        dataIndex: "rank",
        defaultSortOrder: "ascend",
        width: "10%",
        sorter: (a, b) => a.rank - b.rank,
        sortDirections: ["ascend", "descend"]
      },
      {
        title: "Grade",
        key: "grade",
        dataIndex: "grade",
        width: "10%",
        filters: [
          { text: "A++", value: "A++" },
          { text: "A+", value: "A+" },
          { text: "A", value: "A" },
          { text: "A-", value: "A-" },
          { text: "B+", value: "B+" }
        ],
        onFilter: (value, record) => record.grade === value
      },
      {
        title: "Channel Name",
        key: "channel_name",
        dataIndex: "channel_name",
        width: "35%",
        ...this.getColumnSearchProps("channel_name"),
        render: (text, row) => <Link to={`/${row._id}`}>{text}</Link>
      },
      {
        title: "Video Uploads",
        key: "video_uploads",
        dataIndex: "video_uploads",
        width: "15%",
        sorter: (a, b) => a.video_uploads - b.video_uploads,
        sortDirections: ["ascend", "descend"]
      },
      {
        title: "Subscribers",
        key: "subscribers",
        dataIndex: "subscribers",
        width: "15%",
        sorter: (a, b) => a.subscribers - b.subscribers,
        sortDirections: ["ascend", "descend"]
      },
      {
        title: "Video Views",
        key: "video_views",
        dataIndex: "video_views",
        sorter: (a, b) => a.video_views - b.video_views,
        sortDirections: ["ascend", "descend"]
      }
    ];

    return (
      <Content>
        <Table
          columns={columns}
          dataSource={this.props.channel.all.filter(e => {
            return e.rank > 3;
          })}
          loading={this.props.channel.isLoading}
        />
      </Content>
    );
  }
}

export default observer(ChannelTable);

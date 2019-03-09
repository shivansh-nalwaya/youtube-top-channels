import React from "react";
import { Link } from "react-router-dom";
import ChannelForm from "./ChannelForm";
import {
  Header,
  HeaderContainer,
  Logo,
  HeaderNav,
  HeaderNavItem,
  HeaderNavItemLink,
  HeaderNavItemSpan
} from "../styles/NavbarStyles";

const NoStyleLink = props => (
  <Link to={`${props.to}`} style={{ textDecoration: "none" }}>
    {props.children}
  </Link>
);

export default class NavBar extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({ visible: true });
  };

  closeModal = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <Header>
        <HeaderContainer>
          <NoStyleLink to="/">
            <Logo>Youtube</Logo>
          </NoStyleLink>
          <HeaderNav>
            <HeaderNavItem>
              <NoStyleLink to="/">
                <HeaderNavItemLink>Home</HeaderNavItemLink>
                <HeaderNavItemSpan />
              </NoStyleLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <a onClick={this.showModal}>
                <HeaderNavItemLink>Add Channel</HeaderNavItemLink>
                <HeaderNavItemSpan />
              </a>
            </HeaderNavItem>
          </HeaderNav>
        </HeaderContainer>
        <ChannelForm
          visible={this.state.visible}
          closeModal={this.closeModal}
          channel={this.props.channel}
        />
      </Header>
    );
  }
}

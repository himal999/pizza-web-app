import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideButtonWrap,
  SidebarRoute,
} from './SidebarElemet';
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Menu</SidebarLink>
        <SidebarLink to="/">Category</SidebarLink>
        <SidebarLink to="/">Tracking</SidebarLink>
      </SidebarMenu>
      <SideButtonWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideButtonWrap>
    </SidebarContainer>
  );
};

export default Sidebar;

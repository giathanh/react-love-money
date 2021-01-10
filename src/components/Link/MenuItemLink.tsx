import React from 'react';
import LinkItem from '@material-ui/core/ListItem';

const MenuItemLink = (props: any) => {
  return (
    <LinkItem button component="a" {...props} />
  );
}

export default MenuItemLink;
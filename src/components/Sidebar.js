import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, List, ListItem } from '@chakra-ui/react';

function Sidebar() {
  return (
    <Box as="aside" width="250px" p={4} bg="gray.100">
      <List spacing={3}>
        <ListItem>
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/getting-started" activeClassName="active-link">
            Getting Started
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/installation" activeClassName="active-link">
            Installation
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/usage" activeClassName="active-link">
            Usage
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/api" activeClassName="active-link">
            API Reference
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/submit-observation" activeClassName="active-link">
            Submit Observation
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/submit-resource" activeClassName="active-link">
            Submit Resource
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;

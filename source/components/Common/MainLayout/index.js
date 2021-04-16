import * as React from 'react';
import PropTypes from 'prop-types';
import { ContainerView } from './styles';

const MainLayout = ({ children }) => <ContainerView>{children}</ContainerView>;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainLayout;

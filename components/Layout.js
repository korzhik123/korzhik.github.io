import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import theme from "../static/theme";
import TypewriterContainer from "../containers/TypewriterContainer";
import { isDarkMode } from "../utils/isDarkMode";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChildrenContainer = styled.div`
  max-width: 640px;
  margin: 0 2em;
`;

const HeaderContainer = styled.div`
  margin-bottom: 3em;
`;

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <ThemeProvider theme={isDarkMode() ? theme.dark : theme.day}>
      <PageContainer>
        <ChildrenContainer>
          <HeaderContainer>
            <TypewriterContainer />
          </HeaderContainer>
          {children}
        </ChildrenContainer>
      </PageContainer>
    </ThemeProvider>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

Layout.defaultProps = {
  title: "teleginzhenya.github.io"
};

export default Layout;

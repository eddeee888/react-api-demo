import React, { Component } from "react";
import {
  Page,
  Header,
  Content,
  Footer
} from "./../../../common/components/page_structures";

function withPageWrapper(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <Page>
          <Header />
          <Content>
            <WrappedComponent {...this.props} />
          </Content>
          <Footer />
        </Page>
      );
    }
  };
}

export default withPageWrapper;

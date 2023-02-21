import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, fas, far);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FontAwesomeIcon icon="fa-brands fa-space-awesome" />
      </div>
    );
  }
}

export default App;

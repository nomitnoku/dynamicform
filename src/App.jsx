import React from 'react';
import Form from './pages/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataType: 'profile',
      config: {
        title: 'Create Account',
        form: {
          fields: [{
            label: 'Name',
            id: 'name',
            type: 'textbox',
            sequence: 1,
          }, {
            label: 'DOB',
            id: 'dob',
            type: 'date',
            sequence: 2,
          }, {
            label: 'Address',
            id: 'address',
            type: 'textarea',
            sequence: 3,
          }],
        },
      },

    };
  }

  render() {
    const { config, dataType } = this.state;
    return (
      <div
        className="flex-column h-100"
      >
        <div
          className="py-3 px-4 bg-primary
          text-white"
        >
          <h3
            className="mb-0"
          >
            Dynamic Form
          </h3>
        </div>
        <div>
          <Form
            config={config}
            dataType={dataType}
          />
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import Storage from '../utilities/Storage';

const formComponent = (type, value, handler) => {
  switch (type) {
    case 'textbox':
      return (
        <Form.Control
          value={value || ''}
          className="maxw-400"
          onChange={(e) => {
            handler(e.target.value);
          }}
        />
      );
    case 'date':
      return (
        <Form.Control
          type={type}
          value={value || ''}
          className="maxw-400"
          onChange={(e) => {
            handler(e.target.value);
          }}
        />
      );
    case 'textarea':
      return (
        <Form.Control
          as={type}
          rows={3}
          value={value || ''}
          className="maxw-400"
          onChange={(e) => {
            handler(e.target.value);
          }}
        />
      );
    default:
      return null;
  }
};

class DyanamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: Storage.getFormData(
        props.dataType,
      ) || {},
    };
  }

  onSave = () => {
    const { dataType } = this.props;
    const { formData } = this.state;
    Storage.setFormData(dataType, formData);
  }

  render() {
    const { config } = this.props;
    const { formData } = this.state;
    return (
      <div
        className="h-100 overflow-auto"
      >
        <div
          className="fs-3 px-4 py-2"
        >
          <b>
            {config.title}
          </b>
        </div>
        <div
          className="px-4 py-2"
        >
          {config.form.fields.map((item) => (
            <Form.Group
              key={item.id}
            >
              <Form.Label
                className="text-medium"
              >
                {item.label}
              </Form.Label>
              <div>
                {
                  formComponent(
                    item.type,
                    formData[item.id],
                    (value) => {
                      this.setState({
                        formData: {
                          ...formData,
                          [item.id]: value,
                        },
                      });
                    },
                  )
                }
              </div>
            </Form.Group>
          ))}
        </div>
        <div
          className="px-4"
        >
          <Button
            onClick={this.onSave}
          >
            Save
          </Button>
        </div>
      </div>
    );
  }
}

DyanamicForm.propTypes = {
  dataType: PropTypes.string.isRequired,
  config: PropTypes.shape({
    title: PropTypes.string,
    form: PropTypes.shape({
      fields: PropTypes.arrayOf(
        PropTypes.shape({}),
      ),
    }),
  }).isRequired,
};

export default DyanamicForm;

import React, { Component } from "react";
import axios from "axios";
import { MdDelete, MdEdit, MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

class ServicesAdmin extends Component {
  state = {
    services: [],
    title: "",
    price: "",
    editingServiceId: null,
    showAddService: false,
  };

  componentDidMount() {
    this.fetchServices();
  }

  fetchServices = async () => {
    try {
      const response = await axios.get("https://api-s5hih6nmta-uc.a.run.app/services");
      this.setState({ services: response.data });
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { title, price, editingServiceId } = this.state;
    const serviceData = { title, price };

    try {
      if (editingServiceId) {
        await axios.put(`https://api-s5hih6nmta-uc.a.run.app/services/${editingServiceId}`, serviceData);
      } else {
        await axios.post("https://api-s5hih6nmta-uc.a.run.app/services", serviceData);
      }

      this.fetchServices();
      this.clearForm();

      this.setState({ showAddService: false });
    } catch (error) {
      console.error("Error submitting service:", error);
    }
  };

  handleDelete = async (id) => {
    try {
      await axios.delete(`https://api-s5hih6nmta-uc.a.run.app/services/${id}`);
      this.fetchServices();
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  handleEdit = (service) => {
    this.setState({
      editingServiceId: service.id,
      title: service.title,
      price: service.price,
    });
  };

  clearForm = () => {
    this.setState({
      title: "",
      price: "",
      editingServiceId: null,
    });
  };

  toggleAddService = () => {
    this.setState((prevState) => ({
      showAddService: !prevState.showAddService,
    }));
  };

  render() {
    const { title, price, editingServiceId, services, showAddService } = this.state;

    return (
      <div style={containerStyle}>
        <h1>List of Services</h1>

        {!showAddService && editingServiceId === null ? (
          <div>
            <Link to="/admin" style={backToAdminButton}>
              <MdArrowBack />
            </Link>
            <button onClick={this.toggleAddService} style={addnewServiceButton}>
              Add new service
            </button>
          </div>

        ) : (
          <form style={formStyle} onSubmit={this.handleSubmit}>
            <div>
              <label>Title:</label>
              <input
                style={inputStyle}
                type="text"
                name="title"
                value={title}
                onChange={this.handleInputChange}
              />
            </div>

            <div>
              <label>Price:</label>
              <input
                style={inputStyle}
                type="text"
                name="price"
                value={price}
                onChange={this.handleInputChange}
              />
            </div>

            <button style={buttonStyle} type="submit">
              {editingServiceId ? "Update" : "Add new service"}
            </button>
          </form>
        )}

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Edit</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={service.id} style={{ backgroundColor: index % 2 === 0 ? "gray" : "black" }}>
                <td style={{ ...tdStyle, backgroundColor: index % 2 === 0 ? "gray" : "black" }}>{service.title}</td>
                <td style={{ ...tdStyle, backgroundColor: index % 2 === 0 ? "gray" : "black" }}>{service.price}</td>
                <td style={{ ...tdStyle, backgroundColor: index % 2 === 0 ? "gray" : "black" }}>
                  <button
                    onClick={() => this.handleEdit(service)}
                    style={editButtonStyle}
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => this.handleDelete(service.id)}
                    style={deleteButtonStyle}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const containerStyle = {
  padding: "20px",
  maxWidth: "800px",
  margin: "0 auto",
  fontFamily: 'Poppins',
  textAlign: "center",
};

const formStyle = {
  marginBottom: "20px",
};

const inputStyle = {
  width: "30%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  margin: "5px",
};

const buttonStyle = {
  padding: "10px 20px",
  background: "#FFD530",
  color: "#333333",
  border: "none",
  borderRadius: "5px",
  display: "block",
  width: "40%",
  justifyContent: 'center',
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  padding: "10px",
  margin: "10px",

  justifyContent: 'center',
};

const thStyle = {
  backgroundColor: "#FFD530",
  color: "#333333",
  padding: "10px",
  textAlign: "center",
  margin: "10px",
  justifyContent: 'center',
};

const tdStyle = {
  padding: "10px",
  color: "white",
  margin: "10px",
  paddingButton: '10px',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '40%',
};

const editButtonStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  marginRight: '10px',
  justifyContent: 'center',
};

const deleteButtonStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
};

const backToAdminButton = {
  color: 'black',
  padding: '10px',
  margin: '10px',
};

const addnewServiceButton = {
  backgroundColor: '#FFD530',
  color: '#333333',
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
  margin: '10px',
  cursor: 'pointer',
};

export default ServicesAdmin;
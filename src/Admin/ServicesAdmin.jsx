import React, { Component } from "react";
import axios from "axios";

class ServicesAdmin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            services: [],
            title: "",
            price: "",
            editingServiceId: null,
        };
    }

    componentDidMount() {
        this.fetchServices();
    }

    fetchServices = () => {
        axios.get("https://api-s5hih6nmta-uc.a.run.app/services").then((response) => {
            this.setState({ services: response.data });
        });
    };

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    };

    handlePriceChange = (event) => {
        this.setState({ price: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { title, price, editingServiceId } = this.state;

        if (editingServiceId) {
            const updatedService = {
                title,
                price,
            };

            axios
                .put(`https://api-s5hih6nmta-uc.a.run.app/services/${editingServiceId}`, updatedService)
                .then(() => {
                    this.fetchServices();
                    this.setState({
                        editingServiceId: null,
                        title: "",
                        price: "",
                    });
                });
        } else {
            const newService = {
                title,
                price,
            };

            axios.post("https://api-s5hih6nmta-uc.a.run.app/services", newService).then(() => {
                this.fetchServices();
                this.setState({
                    title: "",
                    price: "",
                });
            });
        }
    };

    handleDelete = (id) => {
        axios.delete(`https://api-s5hih6nmta-uc.a.run.app/services/${id}`).then(() => {
            this.fetchServices();
        });
    };

    handleEdit = (service) => {
        this.setState({
            editingServiceId: service.id,
            title: service.title,
            price: service.price,
        });
    };

    render() {

        return (
            <div style={containerStyle}>
                <h1>List of Services</h1>
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input
                            style={inputStyle}
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                    </div>

                    <div>
                        <label>Price:</label>
                        <input
                            style={inputStyle}
                            type="text"
                            name="price"
                            value={this.state.price}
                            onChange={this.handlePriceChange}
                        />
                    </div>

                    <button style={buttonStyle} type="submit">
                        {this.state.editingServiceId ? "Update" : "Add new service"}
                    </button>
                </form>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Title</th>
                            <th style={thStyle}>Price</th>
                            <th style={thStyle}>Edit</th>
                            <th style={thStyle}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.services.map((service, index) => (
                            <tr key={service.id} style={{ backgroundColor: index % 2 === 0 ? "gray" : "black" }}>
                                <td style={{ ...tdStyle, backgroundColor: index % 2 === 0 ? "gray" : "black" }}>{service.title}</td>
                                <td style={{ ...tdStyle, backgroundColor: index % 2 === 0 ? "gray" : "black" }}>{service.price}</td>
                                <td style={{ ...tdStyle, backgroundColor: index % 2 === 0 ? "gray" : "black" }}>
                                    <button onClick={() => this.handleEdit(service)}>Edit</button>
                                </td>
                                <td style={{ ...tdStyle, backgroundColor: index % 2 === 0 ? "gray" : "black" }}>
                                    <button onClick={() => this.handleDelete(service.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div >
        );
    }
}

const containerStyle = {
    padding: "20px",
    width: "600px",
    margin: "0 auto",
    fontFamily: 'Poppins',
};

const formStyle = {
    marginBottom: "20px",
};

const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
};

const buttonStyle = {
    padding: "10px 20px",
    background: "#FFD530",
    color: "#333333",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
};

const thStyle = {
    backgroundColor: "#FFD530",
    color: "#333333",
    padding: "10px",
    textAlign: "left",
    margin: "10px",
};

const tdStyle = {
    padding: "10px",
    color: "white",
};

export default ServicesAdmin;
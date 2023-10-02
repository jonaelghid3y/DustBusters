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
            <div>
                <h1>List of Services</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                    </div>

                    <div>
                        <label>Price:</label>
                        <input
                            type="text"
                            name="price"
                            value={this.state.price}
                            onChange={this.handlePriceChange}
                        />
                    </div>

                    <button type="submit">
                        {this.state.editingServiceId ? "Update" : "Add new service"}
                    </button>
                </form>
                <ul>
                    {this.state.services.map((service) => (
                        <li key={service.id}>
                            <strong>{service.title}</strong>

                            <p>Price: {service.price}</p>
                            <button onClick={() => this.handleEdit(service)}>Edit</button>
                            <button onClick={() => this.handleDelete(service.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ServicesAdmin;
import React, { Component } from 'react'
import { Table, Tag } from 'antd';
import axios from 'axios'

import classes from './MyOrders.module.css'

class Authentication extends Component {

    state = {
        orders: []
    }

    componentDidMount = () => {

        document.title = 'Check out'

        axios.get('http://localhost:5000/order')
            .then((response) => {
                console.log(response.data.orders);

                this.setState({
                    orders: response.data.orders
                })

            })
            .catch((error) => {
                console.log(error)
            })

    }

    render() {

        const columns = [
            {
                title: 'Id',
                dataIndex: '_id',
                sorter: (a, b) => a.id - b.id
            },
            {
                title: 'Date',
                dataIndex: 'date'
            },
            {
                title: 'Salad',
                dataIndex: 'salad',
                sorter: (a, b) => a.salad - b.salad
            },
            {
                title: 'Cheese',
                dataIndex: 'chesse',
                sorter: (a, b) => a.cheese - b.cheese
            },
            {
                title: 'Meat',
                dataIndex: 'meat',
                sorter: (a, b) => a.meat - b.meat
            },
            {
                title: 'Escalope',
                dataIndex: 'escalope',
                sorter: (a, b) => a.escalope - b.escalope
            },
            {
                title: 'Total Price (DT)',
                dataIndex: 'totalPrice',
                sorter: (a, b) => a.totalPrice - b.totalPrice
            },
            {
                title: 'Delivered',
                dataIndex: 'delivered',
                render: (delivered) => {
                    if (delivered)
                        return <Tag color='green'>Yes</Tag>
                    else
                        return <Tag color='volcano'>No</Tag>
                }
            },
        ];

        const data = this.state.orders.map(order => {
            const date = new Date(order.date)
            return {

                key: order._id,
                ...order,
                date: date.toDateString() + ' - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
            }
        })


        return (
            <div className={classes.OrdersTable}>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default Authentication
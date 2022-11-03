import React from "react";
import axios from "axios";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import JsPDF from "jspdf";

export default class ProductsReport extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Products: [],
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8070/products")
            .then((res) => {
                this.setState({Products: res.data.products})
            })
            .catch((err) => console.log(err))
    }

    DownloadInvoice = () => {
        const report = new JsPDF("portrait", "px", "a1");
        report.html(document.querySelector("#report")).then(() => {
            report.save("ProductReport.pdf");
        })
    }

    render() {
        return(
            <div>
                <Table id="report">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product ID</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Product Category</TableCell>
                            <TableCell>Product Price</TableCell>
                            <TableCell>Product Quantity</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            this.state.Products.map((product) =>(
                                <TableRow>
                                    <TableCell> {product._id} </TableCell>
                                    <TableCell> {product.productName} </TableCell>
                                    <TableCell> {product.productCategory} </TableCell>
                                    <TableCell> {product.price} </TableCell>
                                    <TableCell> {product.quentity} </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                <br/>
                <Button
                    variant="contained"
                    color="inherit"
                    onClick={() => this.DownloadInvoice()}
                > Download </Button>
            </div>
        )
    }
}
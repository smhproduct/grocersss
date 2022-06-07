import React from "react";
import ItemCard from "./ItemCard";
import data from "./../../data";
import Top from './Top';
import { SnackbarProvider } from 'notistack';
import './../Header/Search2.css';
import { useState } from "react";
import { Input } from 'reactstrap';
import SearchIcon from '@mui/icons-material/Search';


const Home = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <div className="templateContainer">
                <div style={{}} className="searchInput_Container">
                    <Input style={{ color: 'black', border: '2px solid #D70F64', boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.19)' }} className="box" id="searchInput" type="text" placeholder="Search food items, products..." onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} />
                </div>
            </div>



            <section className="container-fluid">
                <div className="row justify-content-center">
                    {
                        data
                            .productData.filter((val) => {
                                if (searchTerm == "") {
                                    return val;
                                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            })
                            .map((val) => {
                                return (
                                    <div className="col-xl-2 m-xl-2 col-md-3 col-sm-4 m-1">
                                        <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
                                            <ItemCard
                                                img={val.img}
                                                price={val.price}
                                                title={val.title}
                                                item={val}
                                                desc={val.desc}
                                                category={val.category}
                                                key={Math.random()}
                                            />
                                        </SnackbarProvider>
                                    </div>
                                )
                            })
                    }
                </div>
                <Top />
            </section>

        </div>
    );
};
export default Home;

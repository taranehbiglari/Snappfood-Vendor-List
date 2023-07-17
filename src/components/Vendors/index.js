import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import VendorCard from "./VendorCard";
import { getVendorsListAction } from "../../redux/Vendors/VendorsAction";

const VendorsList = () => {
    const dispatch = useDispatch();
    const lat = useRef('35.7876592');
    const long = useRef('51.3784825');
    const page = useRef(0);
    const pageSize = useRef(10);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                lat.current = position.coords.latitude;
                long.current = position.coords.longitude;
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    const getData = () => {
        getLocation();
        const params = {
            page: page.current,
            page_size: pageSize.current,
            lat: lat.current,
            long: long.current,
        };
        dispatch(getVendorsListAction(params));
    }

    useEffect (() => {
        getData();
    }, []);
    return (
        <>
            <div>vendor list</div>
        </>
    );
};

export default VendorsList;

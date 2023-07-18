import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import VendorCard from "./VendorCard";
import { getVendorsListAction } from "../../redux/Vendors/VendorsAction";
import useObserver from "../../hooks/useObserver";

const VendorsList = () => {
  const dispatch = useDispatch();
  const { loading, finalResult, total, openCount } = useSelector(
    (state) => state.vendors.list
  );
  const hasMore = total > finalResult.length;
  const lat = useRef("35.803892");
  const long = useRef("51.350098");
  const pageSize = useRef(10);
  const [page, setPage] = useState(0);
  const { observableElement: loadingRef } = useObserver({
    callback() {
      setPage((prevState) => prevState + 1);
    },
    options: { threshold: 0.3 },
  });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat.current = position.coords.latitude;
        long.current = position.coords.longitude;
      });
    } else {
      console.error("مرورگر شما از مکان یابی پشتیبانی نمی کند");
    }
  };

  const getData = () => {
    getLocation();
    const params = {
      page,
      page_size: pageSize.current,
      lat: lat.current,
      long: long.current,
    };
    dispatch(getVendorsListAction(params));
  };

  useEffect(() => {
    getData();
  }, [page]);
  return (
    <>
      <h3 className="px-4">{openCount} فروشنده‌ی باز</h3>
      <div className="d-flex justify-center">
        <div className="d-flex justify-center flex-column">
          {finalResult.map((vendor) => (
            <div key={vendor.data.id}>
              <VendorCard key={vendor.data.id} data={vendor.data} />
            </div>
          ))}
          {hasMore && !loading && <div ref={loadingRef}>بارگذاری بیشتر</div>}
        </div>
      </div>
    </>
  );
};

export default VendorsList;

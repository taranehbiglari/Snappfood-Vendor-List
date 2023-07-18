import style from "./style.module.scss";

const VendorCard = ({ data }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + data.backgroundImage + ")",
        }}
        className={`${style.card} shadow border-light`}
      >
        <div className={`${style.card__body} bg-white w-100`}>
          <div className="d-flex justify-between align-center px-3 mt-4">
            <span className={style.card__body_title}>{data.title}</span>
            <div className={`${style.card__body_rating} fs-1 d-flex justify-around align-center`}>
              <span className="fw-400">{data.rate}</span>
              <svg
                className={style.card__body_ratingStar}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  fill="green"
                />
              </svg>
            </div>
          </div>
          <div className="mt-1 px-3 fs-1 fw-400">{data.description}</div>
          <div className={`${style.card__body_delivery} fs-1 d-flex`}>
            <div className={`${style.card__body_deliveryType} fw-300`}>
              {data.deliveryGuarantee ? "ارسال اکسپرس" : "پیک فروشنده"}
            </div>
            <div className="fw-300 text-black">
              {data.deliveryFee === 0 ? "رایگان" : `${data.deliveryFee} تومان`}
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(" + data.logo + ")",
          }}
          className={style.card__logo}
        />
      </div>
    </>
  );
};

export default VendorCard;

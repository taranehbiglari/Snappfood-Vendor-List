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
        <div className={`${style.card__caption} bg-white w-100`}>
          <div className={style.card__caption__header}>
            <span className={style.card__caption__header__title}>
              {data.title}
            </span>
            <div className={`${style.card__caption__header__rating} fs-1`}>
              {data.rate}
            </div>
          </div>
          <div className={style.card__caption__description}>
            {data.description}
          </div>
          <div className={`${style.card__caption__delivery} fs-1`}>
            <span className={`${style.card__caption__delivery__type} fw-300`}>
              {data.deliveryGuarantee ? "ارسال اکسپرس" : "پیک فروشنده"}
            </span>
            <span className="fw-300 text-black">
              {data.deliveryFee === 0 ? "رایگان" : `${data.deliveryFee} تومان`}
            </span>
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

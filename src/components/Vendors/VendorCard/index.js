import style from "./style.module.scss";

const VendorCard = ({data}) => {
  return (
    <>
      <div className={style.card}>
        <div className={style.card__caption}>
          <div className={style.card__caption__header}>
            <span className={style.card__caption__header__title}>
              {data.title}
            </span>
            <div className={style.card__caption__header__rating}>test</div>
          </div>
          <div className={style.card__caption__description}>
            {data.description}
          </div>
          <div className={style.card__caption__delivery}>
            <span className={style.card__caption__delivery__type}>ارسال اکسپرس</span>
            <span className={style.card__caption__delivery__price}>۱۰۰۰۰ تومان</span>
          </div>
        </div>
        <div className={style.card__logo}/>
      </div>
    </>
  );
};

export default VendorCard;

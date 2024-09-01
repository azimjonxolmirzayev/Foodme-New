import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

function Price() {
  const { ref: serviceRef, inView: serviceInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { t, i18n } = useTranslation();

  return (
    <div
      id="price"
      className="container max-w-screen-xl dark:text-white font-['SpaceGrotesk'] flex-col md:flex-row gap-12 md:gap-16 items-center justify-center mx-auto p-4 md:p-6 lg:p-8"
    >
      <div
        ref={serviceRef}
        className={`w-full justify-items-center text-black  grid grid-cols-1 md:grid-cols-1 md:justify-center lg:grid-cols-3 gap-6 md:gap-8 mt-28 transition-transform duration-500 ease-in-out `}
      >
        <div
          className={`w-full h-[300px] text-center text-black dark:text-white flex flex-col items-center justify-between py-[30px]   hover:scale-[1.01]  transition-transform duration-300 cursor-pointer rounded-xl border border-stroke bg-white shadow-default dark:border-sky-200 dark:bg-boxdark`}
        >
          <p className={`text-xl md:text-3xl`}>{t("narxlartext2")}</p>
          <h1 className={`text-5xl font-semibold text-sky-500`}>
            {t("narxlartext3")}
          </h1>
          <p className={`text-sm text-center`}>{t("narxlartext4")}</p>
        </div>

        <div
          className={`bg-grey w-full h-[300px] flex flex-col items-center justify-between py-[30px] rounded-xl  hover:scale-[1.01] border-2 border-black transition-transform duration-300 cursor-pointer`}
        >
          <p className={`text-xl md:text-3xl`}>{t("narxlartext5")}</p>
          <h1 className={`text-5xl font-semibold text-green`}>
            {t("narxlartext6")}
          </h1>
          <p className={`text-sm text-center`}>{t("narxlartext7")}</p>
        </div>

        <div
          className={`bg-grey w-full h-[300px] flex flex-col items-center justify-between py-[30px] rounded-xl  hover:scale-[1.01] border-2 border-black transition-transform duration-300 cursor-pointer`}
        >
          <p className={`text-xl md:text-3xl`}>{t("narxlartext8")}</p>
          <h1 className={`text-5xl font-semibold text-green`}>
            {t("narxlartext9")}
          </h1>
          <p className={`text-sm text-center`}>{t("narxlartext10")}</p>
        </div>
      </div>
    </div>
  );
}

export default Price;

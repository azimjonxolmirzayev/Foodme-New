import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import userThree from "../assets/logo/logo-01.png";
function ProductDetail() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-5 mb-5 sm:gap-5 items-center dark:text-white justify-between">
        <div className="text-center sm:text-left">
          <h1 className="font-semibold text-[18px] sm:text-[20px]">
            Product Details
          </h1>
          <h3 className="text-[12px] sm:text-[14px]">
            {" "}
            Full details of a product
          </h3>
        </div>
        <div className="flex gap-3 sm:gap-5 mt-3 sm:mt-0">
          <button
            onClick={() => navigate("/admin/product")}
            className="w-36 sm:w-45 h-10 gap-2 sm:gap-3 rounded-md cursor-pointer flex items-center justify-center font-semibold bg-sky-400 text-white dark:bg-sky-700"
          >
            <IoIosArrowRoundBack size={"20px"} />
            <span className="text-sm sm:text-base">Back to Product</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-sky-200 dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-7 dark:border-sky-200">
              <h3 className="font-medium text-black dark:text-white">
                Product Details
              </h3>
            </div>
            <div className="p-7">
              <table className="w-full text-[14px] border border-blue-200">
                <tbody>
                  <tr className="border border-blue-200">
                    <th className="w-2/6 h-13 text-start ps-5 border border-blue-200">
                      Product
                    </th>
                    <td className="text-start ps-3">Borsh</td>
                  </tr>
                  <tr className="border border-blue-200">
                    <th className="border h-13  text-start ps-5 border-blue-200">
                      Category
                    </th>
                    <td className="text-start ps-3">Pizza</td>
                  </tr>
                  <tr className="border border-blue-200">
                    <th className="border h-13  text-start ps-5 border-blue-200">
                      Size
                    </th>
                    <td className="text-start ps-3">3</td>
                  </tr>
                  <tr className="border border-blue-200">
                    <th className="border h-13  text-start ps-5 border-blue-200">
                      Price
                    </th>
                    <td className="text-start ps-3">1500.00</td>
                  </tr>
                  <tr className="border border-blue-200">
                    <th className="border h-13  text-start ps-5 border-blue-200">
                      Description
                    </th>
                    <td className="text-start ps-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-span-5 xl:col-span-2">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Product image
              </h3>
            </div>
            <div className="p-7">
              <form action="#">
                <div className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5">
                  <img src={userThree} />
                </div>

                <div className="flex  justify-between gap-4.5">
                  <button className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-sky-200 dark:text-white">
                    <FaArrowLeftLong size={"22px"} />
                  </button>
                  <button className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-sky-200 dark:text-white">
                    <FaArrowRightLong size={"22px"} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

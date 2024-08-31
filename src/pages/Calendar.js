import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";

function Calendar() {
  return (
    <>
      <Breadcrumb pageName="Calendar" />

      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <table className="w-full">
          <thead>
            <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
              {[
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].map((day, index) => (
                <th
                  key={index}
                  className={`flex h-15 items-center justify-center ${
                    index === 0 ? "rounded-tl-sm" : ""
                  } ${
                    index === 6 ? "rounded-tr-sm" : ""
                  } p-1 text-xs font-semibold sm:text-base xl:p-5`}
                >
                  <span className="hidden lg:block">{day}</span>
                  <span className="block lg:hidden">{day.slice(0, 3)}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }, (_, rowIndex) => (
              <tr key={rowIndex} className="grid grid-cols-7">
                {Array.from({ length: 7 }, (_, colIndex) => {
                  const dayNumber = rowIndex * 7 + colIndex + 1;
                  return (
                    <td
                      key={colIndex}
                      className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"
                    >
                      <span className="font-medium text-black dark:text-white">
                        {dayNumber > 31 ? "" : dayNumber}
                      </span>
                      {dayNumber === 24 && (
                        <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                          <span className="group-hover:text-primary md:hidden">
                            More
                          </span>
                          <div className="event invisible absolute left-2 z-99 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[290%] md:opacity-100">
                            <span className="event-name text-sm font-semibold text-black dark:text-white">
                              App Design
                            </span>
                            <span className="time text-sm font-medium text-black dark:text-white">
                              25 Dec - 27 Dec
                            </span>
                          </div>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Calendar;

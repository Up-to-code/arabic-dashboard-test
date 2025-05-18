import Image from "next/image";
interface StatCardProps {
    value: string;
    label: string;
    percentage: string;
    comparison: string;
    valueColor: string;
    trend: string;
    className: string;
    srcIcon: string;
}
 
const StatCard = ({
    value = "1.470",
    label = "الزيـــارات",
    percentage = "+48%",
    comparison = "110+ مقارنة بالشهر الماضي",
    valueColor = "text-red-400",
    trend = "up",
    className = "",
    srcIcon = "/icons/ViewIcon.svg",
} : StatCardProps) => {
    return (
 <div className="flex flex-col justify-center items-end w-[373px] gap-[18px] p-5 rounded-[30px] bg-white " dir="ltr">
  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-12 h-12 relative gap-3 px-[15px] rounded-[40px] bg-[#3b4b65]">
      <svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M12.75 12.75L5.25 5.25M5.25 5.25V12M5.25 5.25H12"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>


    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-12 h-12 relative gap-3 px-[15px] rounded-[40px] bg-[#f6f6f6]">
   <Image src={srcIcon} alt="icon" width={18} height={18} />
    </div>
  </div>
  <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 w-[153px] relative gap-2">
    <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
      <p className="flex-grow-0 flex-shrink-0 text-[34px] font-bold text-right text-[#e97f72]">
        {value}
      </p>
    </div>
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[153px] text-xs font-bold text-right text-[#3b4b65]">
     {label}
    </p>
  </div>
  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[58px] h-[30px] relative p-2.5 rounded-[40px] bg-[#f6f6f6]">
      <svg
        width={15}
        height={14}
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-3.5 h-3.5 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M7.50016 3.5V10.5M7.50016 3.5L4.5835 6.41667M7.50016 3.5L10.4168 6.41667"
          stroke="#3B4B65"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-[10px] font-bold text-right text-[#3b4b65]">
        {percentage}
      </p>
    </div>
    <p className="flex-grow-0 flex-shrink-0 text-xs text-right">
      <span className="flex-grow-0 flex-shrink-0 text-xs font-bold text-right text-[#e97f72]">
        110+{" "}
      </span>
      <span className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#595959]">
        {comparison}
      </span>
    </p>
  </div>
</div>
    );
};

export default StatCard;

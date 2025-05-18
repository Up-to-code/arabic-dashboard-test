import Link from "next/link"

 
export  function StatCardPrice() {
  return (
<div className="flex flex-col justify-center items-end w-[373px] gap-[18px] p-5 rounded-[30px] bg-white" dir="ltr">
  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
    <Link href="/dashboard">
 {/*  opne link  */}
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


    </Link>

    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-12 h-12 relative gap-3 px-[15px] rounded-[40px] bg-[#f6f6f6]">
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <g clip-path="url(#clip0_1008_261)">
          <path
            d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z"
            stroke="#3B4B65"
            stroke-width="1.5"
          />
          <path
            d="M10 14.1667V14.5834V15"
            stroke="#3B4B65"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M10 5V5.41667V5.83333"
            stroke="#3B4B65"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M12.5 7.91671C12.5 6.76612 11.3807 5.83337 10 5.83337C8.61925 5.83337 7.5 6.76612 7.5 7.91671C7.5 9.06729 8.61925 10 10 10C11.3807 10 12.5 10.9328 12.5 12.0834C12.5 13.234 11.3807 14.1667 10 14.1667C8.61925 14.1667 7.5 13.234 7.5 12.0834"
            stroke="#3B4B65"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1008_261">
            <rect width={20} height={20} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>



  </div>
  <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 w-[153px] relative gap-2">
    <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
      <svg
        width={23}
        height={27}
        viewBox="0 0 23 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-[23px] h-[26px] relative"
        preserveAspectRatio="none"
      >
        <g clip-path="url(#clip0_1008_269)">
          <path
            d="M14.3145 23.5331C13.904 24.4536 13.6327 25.4525 13.5288 26.5L22.2143 24.6326C22.6247 23.7123 22.8958 22.7132 23 21.6656L14.3145 23.5331Z"
            fill="#E97F72"
          />
          <path
            d="M22.2143 19.0379C22.6248 18.1176 22.8961 17.1185 23 16.0709L16.2343 17.5264V14.7285L22.2141 13.4432C22.6246 12.5229 22.8959 11.5238 22.9998 10.4763L16.2341 11.9304V1.86851C15.1973 2.45726 14.2766 3.24095 13.5282 4.16536V12.5124L10.8224 13.0941V0.5C9.78565 1.08854 8.86495 1.87244 8.11652 2.79685V13.6756L2.06217 14.9768C1.65174 15.8971 1.38024 16.8962 1.2761 17.9438L8.11652 16.4734V19.9968L0.785667 21.5725C0.375238 22.4928 0.103937 23.4919 0 24.5394L7.67335 22.8901C8.298 22.7587 8.83487 22.3852 9.18392 21.8711L10.5912 19.7609V19.7605C10.7372 19.5422 10.8224 19.279 10.8224 18.9955V15.8917L13.5282 15.31V20.9057L22.2141 19.0375L22.2143 19.0379Z"
            fill="#E97F72"
          />
        </g>
        <defs>
          <clipPath id="clip0_1008_269">
            <rect width={23} height={26} fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-[34px] font-bold text-right text-[#e97f72]">
        51.001
      </p>
    </div>
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[153px] text-xs font-bold text-right text-[#3b4b65]">
      المبيــعات
    </p>
  </div>


  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[58px] h-[30px] relative p-2.5 rounded-[40px] bg-[#f6f6f6]">
      <svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-3.5 h-3.5 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M7.00016 3.5V10.5M7.00016 3.5L4.0835 6.41667M7.00016 3.5L9.91683 6.41667"
          stroke="#3B4B65"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className="flex-grow-0 flex-shrink-0 w-7 h-2 text-[10px] font-bold text-right text-[#3b4b65]">
        +10%
      </p>
    </div>
    <p className="flex-grow-0 flex-shrink-0 text-xs text-right">
      <span className="flex-grow-0 flex-shrink-0 text-xs font-bold text-right text-[#e97f72]">
        110+{" "}
      </span>
      <span className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#595959]">
        مقارنة بالشهر الماضي
      </span>
    </p>
  </div>
</div>
  )
}

export default StatCardPrice

import React from 'react'

function MoreButtom() {
  return (
<div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-36 h-12 relative gap-1.5 p-2.5 pb-2 rounded-[34px] bg-[#3b4b65]" dir='ltr'>
  <svg
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.02479 2.78642C9.65284 2.40453 11.3472 2.40453 12.9753 2.78642C15.3263 3.33791 17.1621 5.17369 17.7136 7.52479C18.0955 9.15284 18.0955 10.8472 17.7136 12.4753C17.1621 14.8263 15.3263 16.6621 12.9753 17.2136C11.3472 17.5955 9.65284 17.5955 8.02479 17.2136C5.67369 16.6621 3.83792 14.8263 3.28642 12.4753C2.90453 10.8472 2.90453 9.15284 3.28642 7.52479C3.83792 5.17368 5.67369 3.33791 8.02479 2.78642ZM10.9786 7.60679C10.9786 7.34244 10.7643 7.12814 10.5 7.12814C10.2357 7.12814 10.0213 7.34244 10.0213 7.60679V11.5955C10.0213 11.8598 10.2357 12.0741 10.5 12.0741C10.7643 12.0741 10.9786 11.8598 10.9786 11.5955V7.60679ZM8.58541 9.20225C8.58541 8.93792 8.37111 8.72359 8.10677 8.72359C7.84242 8.72359 7.62812 8.93792 7.62812 9.20225V12.3933C7.62812 12.6576 7.84242 12.8718 8.10677 12.8718C8.37111 12.8718 8.58541 12.6576 8.58541 12.3933V9.20225ZM13.3718 10C13.3718 9.73567 13.1576 9.52134 12.8932 9.52134C12.6288 9.52134 12.4146 9.73567 12.4146 10V12.3933C12.4146 12.6576 12.6288 12.8718 12.8932 12.8718C13.1576 12.8718 13.3718 12.6576 13.3718 12.3933V10Z"
      fill="white"
    />
  </svg>
  <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-[15px]">
    <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-right text-white">
      المزيد من التقارير
    </p>
  </div>
</div>
  )
}

export default MoreButtom

const CustomTooltip = ({ active, payload, label } : any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm">
        $100.00
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
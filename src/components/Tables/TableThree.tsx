import { Product } from '../../types/product';
const productData: Product[] = [
  {
    name: '00001',
    profit: 45,
  },
  {
    name: '00002',
    profit: 125,
  },
  {
    name: '00005',
    profit: 247,
  },
  {
    name: '00006',
    profit: 103,
  },
];

const TableThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 flex justify-between md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          رقم الاشتراك 101
        </h4>
       <div className=''>
       <button type="button" className='bg-primary p-2 text-white rounded-lg py-2 px-4'>الرصيد الحالي : 45 دينار</button>
       <button type="button" className='bg-green-600 p-2 text-white rounded-lg py-2 px-4 mr-4' > ينتهي تاريخ الاشتراك : 5/2/2025</button>
       </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">رقم الفاتورة</p>
        </div>
        {/* <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">حالة الفاتورة</p>
        </div> */}
   
        <div className="col-span-1 flex items-center">
          <p className="font-medium">قيمة الفاتورة</p>
        </div>
   
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm  dark:text-white  ">
                {product.name}
              </p>
            </div>
          </div>
          {/* <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.category}
            </p>
          </div> */}
      
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3"> {product.profit} KWD</p>
          </div>
    
        </div>
      ))}
    </div>
  );
};

export default TableThree;

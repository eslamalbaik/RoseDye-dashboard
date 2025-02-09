import { Product } from '../../types/product';
const productData: Product[] = [
  {
    name: '101',
    category: '2',
    price: 'Jan 13,2025',
    profit: 45,
  },
  {
    name: '102',
    category: '3',
    price: 'Jan 13,2025',
    profit: 125,
  },
  {
    name: '103',
    category: '5',
    price: 'Jan 13,2025',
    profit: 247,
  },
  {
    name: '104',
    category: '1',
    price: 'Jan 13,2025',
    profit: 103,
  },
];

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 flex justify-between md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          جدول الاشتراكات
        </h4>
        <button type="button" className='bg-primary p-2 text-white rounded-lg py-2 px-4'>تصدير PDF</button>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">رقم الاشتراك</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">عدد الفواتير</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">تاريخ الانتهاء</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">المجموع</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">إرسال تنبيهات</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-primary cursor-pointer dark:text-white underline ">
                {product.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.category}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product.price}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3"> {product.profit} KWD</p>
          </div>
          <div className="col-span-1 flex items-center">
            <button className="text-sm bg-meta-3 text-white py-2 px-6 rounded-lg flex flex-row-reverse gap-4"> 
              <p>تنبيه</p> 
            <img src="/whatsapp-svgrepo-com.svg" alt="whatsapp" className='w-6 h-6' />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;

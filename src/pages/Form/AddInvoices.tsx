import React from 'react'
import DatePickerTwo from '../../components/Forms/DatePicker/DatePickerTwo'
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne'
import MultiSelect from '../../components/Forms/MultiSelect'

const AddInvoices = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
      <h3 className="font-bold text-xl text-black dark:text-white">
        اضافة الفواتير 
      </h3>
    </div>
    <form action="#">
      <div className="p-6.5">
        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <label className="mb-2.5 block text-black dark:text-white">
            رقم الفاتورة
            </label>
            <input
              type="number"
              placeholder="ادخل رقم الفاتورة"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div className="w-full xl:w-1/2">
           <MultiSelect id="multiSelect" />
          </div>
        </div>

        <div className="mb-4.5 ">
        <label className="mb-2.5 block text-black dark:text-white">
        قيمة الفاتورة
          </label>
          <input
            type="text"
            placeholder="اكتب قيمة الفاتورة"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

    <div className='flex justify-center items-center gap-4'>
    <button className="flex w-1/2  justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
          حفظ
        </button>
        <button className="flex w-1/2 justify-center rounded bg-red-700 p-3 font-medium text-gray hover:bg-opacity-90">
          إفراغ
        </button>
    </div>
      </div>
    </form>
  </div>  )
}

export default AddInvoices
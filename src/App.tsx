import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import AddClients from './pages/Form/AddClients';
import AddInvoices from './pages/Form/AddInvoices';
import OTPForm from './pages/Form/OTPForm';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="لوحة تحكم مصبغة الورد" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="الملف الشخصي | لوحة التحكم مصبغة الورد" />
              <Profile />
            </>
          }
        />
           <Route
          path="/forms/add-clients"
          element={
            <>
              <PageTitle title="اضافة عملاء | لوحة التحكم مصبغة الورد"  />
              <AddClients />
            </>
          }
        />
                   <Route
          path="/forms/add-invoices"
          element={
            <>
              <PageTitle title="اضافة الفواتير | لوحة التحكم مصبغة الورد"  />
              <AddInvoices />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="اضافة عملاء | لوحة التحكم مصبغة الورد"  />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | لوحة التحكم مصبغة الورد" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="الجداول | لوحة التحكم مصبغة الورد" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="الاعدادت  | لوحة التحكم مصبغة الورد" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | لوحة التحكم مصبغة الورد" />
              <Chart />
            </>
          }
        />
     
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | لوحة التحكم مصبغة الورد" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | لوحة التحكم مصبغة الورد" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | لوحة التحكم مصبغة الورد" />
              <SignUp />
            </>
          }
        />
              <Route
          path="/auth/otp-form"
          element={
            <>
              <PageTitle title="صفحة التحقق | لوحة التحكم مصبغة الورد" />
              <OTPForm />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;

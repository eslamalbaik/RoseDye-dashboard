import React, { useEffect, useRef ,useState} from 'react';

const OTPForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [bannerOpen, setBannerOpen] = useState(true); // Manage banner state
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const inputs = Array.from(form.querySelectorAll('input[type=text]')) as HTMLInputElement[];
    const submit = form.querySelector('button[type=submit]') as HTMLButtonElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        !/^[0-9]{1}$/.test(e.key) &&
        e.key !== 'Backspace' &&
        e.key !== 'Delete' &&
        e.key !== 'Tab' &&
        !e.metaKey
      ) {
        e.preventDefault();
      }

      if (e.key === 'Delete' || e.key === 'Backspace') {
        const index = inputs.indexOf(e.target as HTMLInputElement);
        if (index > 0) {
          inputs[index - 1].value = '';
          inputs[index - 1].focus();
        }
      }
    };

    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const index = inputs.indexOf(target);
      if (target.value) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        } else {
          submit.focus();
        }
      }
    };

    const handleFocus = (e: Event) => {
      (e.target as HTMLInputElement).select();
    };

    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault();
      const text = e.clipboardData?.getData('text') || '';
      if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
        return;
      }
      const digits = text.split('');
      inputs.forEach((input, index) => (input.value = digits[index]));
      submit.focus();
    };

    inputs.forEach((input) => {
      input.addEventListener('input', handleInput);
      input.addEventListener('keydown', handleKeyDown);
      input.addEventListener('focus', handleFocus);
      input.addEventListener('paste', handlePaste);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('input', handleInput);
        input.removeEventListener('keydown', handleKeyDown);
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('paste', handlePaste);
      });
    };
  }, []);

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">
            <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
              <header className="mb-8">
                <h1 className="text-2xl font-bold mb-1">رمز التحقق من الهاتف المحمول</h1>
                <br />
                <p className="text-[12px] text-slate-500">
                أدخل رمز التحقق المكون من 4 أرقام والذي تم إرساله إلى رقم هاتفك.
                </p>
              </header>
              <form id="otp-form" ref={formRef}>
                <div className="flex items-center justify-center gap-3">
                  {[...Array(4)].map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                      maxLength={1}
                    />
                  ))}
                </div>
                <div className="max-w-[260px] mx-auto mt-4">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                  >
                    تسجيل دخول
                  </button>
                </div>
              </form>
              <div className="text-sm text-slate-500 mt-4">
              لم تستلم الرمز؟ 
                <a className="font-medium text-indigo-500 mr-2 hover:text-indigo-600" href="#0">
                أعد الإرسال
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OTPForm;
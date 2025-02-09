import { useForm } from "react-hook-form";
import "../index.css";

export const DemoForm = () => {
  const form = useForm();
  const { register } = form;

  return (
    <>
      <div className=" w-100vw h-100vh flex justify-center align-middle my-0 mx-auto ">
        <div className=" w-6/12 flex justify-center text-white bg-slate-900">
          <form className=" w-auto flex flex-col gap-5">
            <div className=" flex  gap-4 ">
              {/* first name */}
              <div className="w-auto flex flex-col gap-2">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  placeholder="FIrst name"
                  className="enabled:border-gray-400 disabled:opacity-75 rounded-md text-slate-900 p-2 bg-slate-100"
                  id="firstName"
                  {...register("firstname")}
                />
              </div>
              {/* last name */}
              <div className="w-auto flex flex-col gap-2">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="enabled:border-gray-400 disabled:opacity-75 rounded-md text-slate-900 p-2 bg-slate-100"
                  id="lastName"
                  {...register("lastname")}
                />
              </div>
            </div>
            {/* email box */}
            <div className="w-auto flex flex-col gap-2">
              <label htmlFor="email"> Email</label>
              <input
                type="text"
                placeholder="email here"
                className=" w-full enabled:border-gray-200 disabled:opacity-70 p-2 rounded-md text-slate-900 bg-slate-100"
                id="email"
                {...register("email")}
              />
            </div>
            {/* subject bx */}
            <div className="w-auto flex flex-col gap-2">
              <label htmlFor="email"> Subjects</label>
              <input
                type="text"
                placeholder="email here"
                className=" enabled:border-gray-200 disabled:opacity-70 rounded-md p-2 text-slate-900 bg-slate-100"
                id="email"
                {...register("subject")}
              />
            </div>
            {/* button */}
            <div className="w-30">
              <input
                type="submit"
                value="Send"
                className="bg-blue-900 w-auto p-4 m-2 rounded-md text-white border-100"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DemoForm;

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "../index.css";

let readerCount = 0;

// form values type
type formValues = {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
};

export const DemoForm = () => {
  const form = useForm<formValues>();
  const { register, control, handleSubmit } = form;

  // on submit function
  const onSubmit = (data: formValues) => {
    console.log("Form Submited", data);
  };

  readerCount++;
  return (
    <>
      <div className=" w-100vw h-100vh flex justify-center py-5 align-middle my-0 mx-auto ">
        <div className=" w-6/12 h-auto flex flex-col justify-center align-middle py-5 gap-3 px-3 text-white bg-slate-900">
          <h1 className="text-3xl">Demo Form Count ({readerCount / 2}) </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-auto flex flex-col gap-5"
          >
            <div className=" w-full flex flex-row  gap-4 ">
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
          <DevTool control={control} />
        </div>
      </div>
    </>
  );
};

export default DemoForm;

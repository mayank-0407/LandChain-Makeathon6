import React, { useState } from "react";

function LoginPage() {
  const [userName, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  function handle(e) {
    e.preventDefault();
  }
  const css = "mt-4 text-sm font-bold";

  return (
    <div
      className="h-full flex flex-row justify-center items-center font object-cover"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/1325342016/photo/mumbai-skyline-wadala-sewri-lalbaug.jpg?s=2048x2048&w=is&k=20&c=kFqeM7qKJSdTG0FgpSZCJ6de_ALmsp889rX95LMTe48=")`,
      }}
    >
      <div className=" w-1/3  m-20 h-full  flex flex-row items-center justify-center rounded-xl backdrop-brightness-90">
        <form onSubmit={handle} className="m-10 z-50 ">
          <ul>
            <li className=" text-lg font-bold">Signup </li>
            <li className={css}>Enter Username</li>
            <li>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="rounded h-1/6 w-11/12"
              />
            </li>
            <li className={css}>Enter your Mobile Number</li>
            <li>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                className="rounded h-1/6"
              />
            </li>
            <li className={css}>Enter your E-mail</li>
            <li>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded h-1/6"
              />
            </li>
            <li className={css}>Enter your password</li>
            <li>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded h-1/6"
              />
            </li>
          </ul>
          <div className="flex items-center justify-center mt-5">
            <button
              type="submit"
              className="p-2 bg-slate-800 text-slate-100 rounded-lg"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

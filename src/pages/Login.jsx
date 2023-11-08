import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames/bind";
import style from "../Login.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginThunk } from "../redux/loginThunk";

const cx = classNames.bind(style);

// bao loi khi dang nhap
const notify = (mess) =>
     toast.error(mess, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
     });
function Login() {
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm();
     const nav = useNavigate();
     const dispatch = useDispatch();
     const onHandleSubmit = (values) => {
          console.log(values);
          dispatch(loginThunk(values))
               .then((data) => {
                    if (data.error) {
                         throw data.error;
                    } else {
                         nav("/");
                    }
               })
               .catch((error) => {
                    notify(error.message);
               });
     };

     return (
          <div className={cx("wrapper")}>
               <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
               />
               <form
                    className={cx("form")}
                    onSubmit={handleSubmit(onHandleSubmit)}
               >
                    <h2 className={cx("form-title")}>Login</h2>
                    <div className={cx("form-group")}>
                         <label htmlFor="fullname" className={cx("form-label")}>
                              Email address
                         </label>
                         <input
                              type="text"
                              className={cx("form-control")}
                              placeholder="Example: leson.devwork@gmail.com"
                              {...register("identifier", {
                                   required: true,
                                   pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                   },
                              })}
                         />
                         {errors.identifier &&
                              errors.identifier.type === "required" && (
                                   <span className={cx("error-message")}>
                                        identifier cannot be empty !
                                   </span>
                              )}
                         {errors.identifier &&
                              errors.identifier.type === "pattern" && (
                                   <span className={cx("error-message")}>
                                        Invalid email !
                                   </span>
                              )}
                    </div>
                    <div className={cx("form-group")}>
                         <label htmlFor="password" className={cx("form-label")}>
                              Password
                         </label>
                         <input
                              type="password"
                              className={cx("form-control")}
                              placeholder="Enter password"
                              autoComplete="on"
                              {...register("password", {
                                   required: true,
                                   minLength: 6,
                                   maxLength: 30,
                              })}
                         />
                         {errors.password &&
                              errors.password.type === "required" && (
                                   <span className={cx("error-message")}>
                                        Password cannot be empty !
                                   </span>
                              )}
                    </div>

                    <div className={cx("form-group-option")}>
                         <div className={cx("gi-more")}>
                              <label
                                   className={cx("save-pass")}
                                   htmlFor="save-pass"
                              >
                                   <span>Save Password</span>
                                   <input type="checkbox" id="save-pass" />
                                   <span className={cx("checkmark")}></span>
                              </label>
                              <a href="#!" className={cx("forget-pass")}>
                                   Forget your Password
                              </a>
                         </div>
                    </div>

                    <button className={cx("submit")}>SIGN IN</button>

                    <div className={cx("switch")}>
                         <Link to="/register" className={cx("switch-login")}>
                              Or Create An Account
                         </Link>
                    </div>
               </form>
          </div>
     );
}

export default Login;

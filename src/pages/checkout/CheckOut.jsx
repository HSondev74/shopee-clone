import { useForm } from "react-hook-form";
import classNames from "classnames/bind";
import style from "./CheckOut.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarts, clearCart } from "../../redux/cartSlice";
import { formatPrice } from "../../utils/helpers";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const cx = classNames.bind(style);

function CheckOut() {
     const carts = useSelector(getAllCarts);
     const dispatch = useDispatch();
     const form = useRef();

     const sendEmail = (e) => {
          e.preventDefault();

          emailjs
               .sendForm(
                    "service_2lzlru1",
                    "template_7rkvbye",
                    form.current,
                    "F6PF7nYsEALIvsp1G"
               )
               .then(
                    (result) => {
                         // console.log(result.text);
                    },
                    (error) => {
                         console.log(error.text);
                    }
               );
     };
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm();
     const successOrder = () => {
          sendEmail();
          dispatch(clearCart());
     };
     return (
          <div className={cx("wrapper")}>
               <div className={cx("container")}>
                    <form
                         ref={form}
                         action="#"
                         className={cx("checkout-form")}
                         onSubmit={handleSubmit(successOrder)}
                    >
                         <div className={cx("row")}>
                              <div className={cx("form-left")}>
                                   <div className={cx("checkout-content")}>
                                        <Link
                                             to="/login"
                                             className={cx("content-btn")}
                                        >
                                             Click Here To Login
                                        </Link>
                                   </div>
                                   <h4 className={cx("bill-title")}>
                                        Billing CheckOuts
                                   </h4>
                                   <div className={cx("form-group")}>
                                        <label
                                             htmlFor="fullName"
                                             className={cx("form-label")}
                                        >
                                             Full Name <span>*</span>
                                        </label>
                                        <input
                                             type="text"
                                             className={cx("form-control")}
                                             {...register("FullName", {
                                                  required: true,
                                             })}
                                             name="FullName"
                                        />
                                        {errors.FullName &&
                                             errors.FullName.type ===
                                                  "required" && (
                                                  <span
                                                       className={cx(
                                                            "error-message"
                                                       )}
                                                  >
                                                       FullName cannot be empty
                                                       !
                                                  </span>
                                             )}
                                   </div>
                                   <div className={cx("form-group")}>
                                        <label
                                             htmlFor="email"
                                             className={cx("form-label")}
                                        >
                                             Email <span>*</span>
                                        </label>
                                        <input
                                             type="text"
                                             className={cx("form-control")}
                                             {...register("Email", {
                                                  required: true,
                                                  pattern: {
                                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                  },
                                             })}
                                             name="email"
                                        />
                                        {errors.Email &&
                                             errors.Email.type ===
                                                  "required" && (
                                                  <span
                                                       className={cx(
                                                            "error-message"
                                                       )}
                                                  >
                                                       Email cannot be empty !
                                                  </span>
                                             )}
                                        {errors.Email &&
                                             errors.Email.type ===
                                                  "pattern" && (
                                                  <span
                                                       className={cx(
                                                            "error-message"
                                                       )}
                                                  >
                                                       Invalid email !
                                                  </span>
                                             )}
                                   </div>
                                   <div className={cx("form-group")}>
                                        <label
                                             htmlFor="phone"
                                             className={cx("form-label")}
                                        >
                                             Phone <span>*</span>
                                        </label>
                                        <input
                                             type="text"
                                             className={cx("form-control")}
                                             {...register("PhoneNumber", {
                                                  required: true,
                                                  maxLength: 15,
                                                  minLength: 9,
                                                  valueAsNumber: false,
                                             })}
                                             name="phone"
                                        />
                                        {errors.PhoneNumber &&
                                             errors.PhoneNumber.type ===
                                                  "required" && (
                                                  <span
                                                       className={cx(
                                                            "error-message"
                                                       )}
                                                  >
                                                       Phone number cannot be
                                                       empty !
                                                  </span>
                                             )}
                                        {errors.PhoneNumber &&
                                             errors.PhoneNumber.type ===
                                                  "maxLength" && (
                                                  <span
                                                       className={cx(
                                                            "error-message"
                                                       )}
                                                  >
                                                       Invalid phone number
                                                  </span>
                                             )}
                                        {errors.PhoneNumber &&
                                             errors.PhoneNumber.type ===
                                                  "minLength" && (
                                                  <span
                                                       className={cx(
                                                            "error-message"
                                                       )}
                                                  >
                                                       Invalid phone number
                                                  </span>
                                             )}
                                   </div>
                                   <div className={cx("form-group")}>
                                        <label
                                             htmlFor="country"
                                             className={cx("form-label")}
                                        >
                                             Country <span>*</span>
                                        </label>
                                        <input
                                             type="text"
                                             className={cx("form-control")}
                                             {...register("Country", {
                                                  required: true,
                                             })}
                                             name="country"
                                        />
                                        {errors.Country &&
                                             errors.Country.type ===
                                                  "required" && (
                                                  <span
                                                       className={cx(
                                                            "error-message"
                                                       )}
                                                  >
                                                       Country cannot be empty !
                                                  </span>
                                             )}
                                   </div>
                                   <div className={cx("form-group")}>
                                        <label
                                             htmlFor="city"
                                             className={cx("form-label")}
                                        >
                                             City <span>*</span>
                                        </label>
                                        <input
                                             type="text"
                                             className={cx("form-control")}
                                             {...register("City", {
                                                  required: true,
                                             })}
                                             name="city"
                                        />
                                        {errors.City &&
                                             errors.City.type ===
                                                  "required" && (
                                                  <span
                                                       className={cx(
                                                            "error-message"
                                                       )}
                                                  >
                                                       City cannot be empty !
                                                  </span>
                                             )}
                                   </div>
                                   <div className={cx("form-group")}>
                                        <label
                                             htmlFor="address"
                                             className={cx("form-label")}
                                        >
                                             Street Address <span>*</span>
                                        </label>
                                        <input
                                             type="text"
                                             className={cx("form-control")}
                                             {...register("Address", {
                                                  required: true,
                                             })}
                                             name="street_address"
                                        />
                                        {errors.Address &&
                                             errors.Address.type ===
                                                  "required" && (
                                                  <span
                                                       className={cx(
                                                            "error-message"
                                                       )}
                                                  >
                                                       Address cannot be empty !
                                                  </span>
                                             )}
                                   </div>
                                   <div className={cx("form-group")}>
                                        <label
                                             htmlFor="address"
                                             className={cx("form-label")}
                                        >
                                             Note
                                        </label>
                                        <textarea
                                             type="text"
                                             className={cx("form-note")}
                                             name="note_message"
                                        />
                                   </div>
                              </div>
                              <div className={cx("form-right")}>
                                   <div className={cx("checkout-content")}>
                                        <input
                                             className={cx("content-btn")}
                                             placeholder="Enter Your Coupon Code"
                                        />
                                   </div>
                                   <h4 className={cx("bill-title")}>
                                        Your Order
                                   </h4>
                                   <div className={cx("order-total")}>
                                        {carts.map((cart, idx) => {
                                             return (
                                                  <ul
                                                       key={idx}
                                                       className={cx(
                                                            "order-table"
                                                       )}
                                                  >
                                                       <li>
                                                            Product{" "}
                                                            <span>Total</span>
                                                       </li>
                                                       <li
                                                            className={cx(
                                                                 "fw-normal"
                                                            )}
                                                       >
                                                            {cart?.title}
                                                            &emsp; x{" "}
                                                            {
                                                                 cart?.quantity
                                                            }{" "}
                                                            <span>
                                                                 {formatPrice(
                                                                      cart?.discountedPrice
                                                                 )}
                                                                 $
                                                            </span>
                                                       </li>
                                                       <li
                                                            className={cx(
                                                                 "total-price"
                                                            )}
                                                       >
                                                            Total{" "}
                                                            <span>
                                                                 {formatPrice(
                                                                      cart?.totalPrice
                                                                 )}{" "}
                                                                 $
                                                            </span>
                                                       </li>
                                                  </ul>
                                             );
                                        })}

                                        <div className={cx("payment-check")}>
                                             <div className={cx("pc-item")}>
                                                  <label htmlFor="pc-cod">
                                                       COD
                                                       <input
                                                            type="checkbox"
                                                            id="pc-cod"
                                                            name="COD"
                                                       />
                                                       <span
                                                            className={cx(
                                                                 "checkmark"
                                                            )}
                                                       ></span>
                                                  </label>
                                             </div>
                                             <div className={cx("pc-item")}>
                                                  <label
                                                       htmlFor="pc-atm"
                                                       style={{ color: "red" }}
                                                  >
                                                       ATM/ Visa ( Developing
                                                       more)
                                                       <input
                                                            type="checkbox"
                                                            id="pc-atm"
                                                            name="ATM"
                                                       />
                                                       <span
                                                            className={cx(
                                                                 "checkmark"
                                                            )}
                                                       ></span>
                                                  </label>
                                             </div>
                                             <div className={cx("pc-item")}>
                                                  <label
                                                       htmlFor="pc-momo"
                                                       style={{ color: "red" }}
                                                  >
                                                       Momo ( Developing more)
                                                       <input
                                                            type="checkbox"
                                                            id="pc-momo"
                                                            name="momo"
                                                       />
                                                       <span
                                                            className={cx(
                                                                 "checkmark"
                                                            )}
                                                       ></span>
                                                  </label>
                                             </div>
                                        </div>

                                        <div className={cx("order-btn")}>
                                             <button
                                                  type="submit"
                                                  className={cx("place-btn")}
                                             >
                                                  Place Order
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </form>
               </div>
          </div>
     );
}

export default CheckOut;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AuthorizationWindow.module.css";
import { useDispatch, useSelector } from "react-redux";

function AuthorizationWindow(props) {
  let current_user_address;

  const [loginInputValue, setLogin] = React.useState();
  const [passwordInputValue, setPassword] = React.useState();
  const [arrAccounts, setAccounts] = React.useState([]);

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [arr_registred_users, setRegistredUsersArr] = React.useState([]);

  const all_accounts = useSelector((state) => state.all_users_array);
    // console.log(all_accounts);

  React.useEffect(()=>{
    console.log(all_accounts)
  },[all_accounts])

//   console.log(navigate);

  function enterAccount(event) {
    event.preventDefault();
    props.contractInstance.methods
      .users(loginInputValue)
      .call()
      .then((val) => {
        if (val.password == passwordInputValue) {
          console.log("passed");
          dispatch({ type: "SET_CURRENT_ADDRESS", payload: loginInputValue });
          navigate("/account");
        } else {
          console.log(" not passed");
        }
      });
  }
//   console.log(props);

  // setAccounts(props.accounts_arr)
  React.useEffect(() => {
    (() => {
      setAccounts(props.accounts_arr);

      all_accounts.forEach(async (el, index) => {
        props.contractInstance.methods
          .users(el)
          .call()
          .then((val) => {
            if (val.role != "") {
              setRegistredUsersArr((oldArr) => [...oldArr, el]);
            }
          });
      });
    })();

    // console.log(props.accounts_arr)
  }, [props.accounts_arr]);

  return (
    <div className={classes.authorization_window}>
      <form className={classes.auth_form} onSubmit={enterAccount}>
        <h2 className="h2-auth">Авторизация</h2>
        <select
          name=""
          id=""
          className="select-auth"
          onChange={(event) => {
            let selected_option =
              event.target.closest("select")[
                event.target.closest("select").selectedIndex
              ].value;
            setLogin(selected_option);
          }}
        >
          {arr_registred_users.map((el) => (
            <option>{el}</option>
          ))}
        </select>
        <input
          type="text"
          className="auth-login-input"
          placeholder="Enter your login"
          value={loginInputValue}
        />
        <input
          type="text"
          className="auth-password-input"
          placeholder="Enter your password"
          onInput={(event) => {
            let input_value = event.target.value;
            setPassword(input_value);
          }}
        />
        <button className={classes.btn_enter}>Войти</button>
      </form>
      <button className={classes.btn_reg}>Регистрация</button>
    </div>
  );
}
export default AuthorizationWindow;

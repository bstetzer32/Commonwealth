import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { getStates } from "../../store/state";
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("")
  const [address_1, setAddress_1] = useState("");
  const [address_2, setAddress_2] = useState("");
  const [city, setCity] = useState("");
  const [st, setSt] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, fullname, email, address_1, address_2, city, st, zipcode, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };
  const updateFullname = (e) => setFullname(e.target.value)
  const updateAddress_1 = (e) => setAddress_1(e.target.value);
  const updateAddress_2 = (e) => setAddress_2(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateSt = (e) => setSt(e.target.value);
  const updateZipcode = (e) => setZipcode(e.target.value);
  
  useEffect(() => {
    let errors = {};
    if (!username) {
      errors.address_1 = "Please enter a username";
    }
    if (!fullname) {
      errors.address_1 = "Please enter a name";
    }
    if (!address_1) {
      errors.address_1 = "Please enter an address";
    }
    if (!city) {
      errors.city = "Please enter a city";
    }
    if (!st) {
      errors.st = "Please select a state";
    }
    if (zipcode.toString().length !== 5) {
      errors.zipcode = "Zipcode must be 5 numbers";
    }
    setErrors(errors);
  }, [username, fullname, address_1, city, st, zipcode]);const states = useSelector((state) => {
    return Object.values(state.states);
  });

  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="projectForm">
      <form onSubmit={onSignUp}>
        <fieldset>
          <legend>Create an Account</legend>
          <div>
            <label>User Name</label>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullname"
              onChange={updateFullname}
              value={fullname}
            ></input>
          </div>
          <div>
            <label>Address Line 1</label>
            <input
              type="text"
              name="address_1"
              onChange={updateAddress_1}
              value={address_1}
            ></input>
          </div>
          <div>
            <label>Address Line 2</label>
            <input
              type="text"
              name="address_2"
              onChange={updateAddress_2}
              value={address_2}
            ></input>
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              onChange={updateCity}
              value={city}
            ></input>
          </div>
          <div className="projectForm__input--category projectForm__input">
            <label>
              State
              {errors.st && (
                <div className="projectForm__error">{errors.st}</div>
              )}
              <select value={st} onChange={updateSt} required>
                {states?.map((state) => (
                  <option key={state.id} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>Zip Code</label>
            <input
              type="text"
              name="city"
              onChange={updateZipcode}
              value={zipcode}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label>Repeat Password</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button type="submit">Sign Up</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpForm;

import { useEffect, useState } from "react";
import Button from "../../components/Buttons/primary/Button";
import Label from "../../components/Label/Label";
import { useForm, Controller } from "react-hook-form";
import "./LoginForm.css";
import { useLoginForm } from "../../hooks/useLoginForm";
import { useApp } from "../../hooks/useApp";

type LoginFormProps = {
  editing?: boolean;
};

const LoginForm = ({ editing }: LoginFormProps) => {
  const { login } = useApp();
  const { formState } = useLoginForm();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "someAwesomeVisitor",
      password: "#dhfhsdkds34",
    },
  });

  useEffect(() => {
    if (editing && formState) {
      reset(formState); // Prepopulate the form with existing data
    } else {
      reset(); // Clear form if not editing
    }
  }, [editing, formState, reset]);

  const onSubmit = (data: any) => {
    console.log("🚀 ~ LOG: ");
    login();
    reset(); // Clear form after submission
  };

  return (
    <div className="card">
       <div className="login-container">
      <div className="login-text-content">
        <h3>Hi there!</h3>
        <span>Thanks for stopping by. I'm Oliver, a full stack software developer / engineer.</span>
        <p>
          As you can see, I've done something a little different with my
          website.
        </p>
        <p>
          Rather than your standard layout, I made a 'mini-Web-app' to showcase
          my work...
        </p>
        <p>
          The thing I like about it is, rather than just a few images showcasing
          stuff, this mini-webapp itself <u>is</u> part of the portfolio! (Genius Oliver! 🤓)
        </p>

        <p>
          It's a (Dockerised) Typescript React app using 100% CSS for styling - no component
          libraries - no dependancies, just good'ol fashon coding skills. 💥
        </p>

        <p>
          <strong>What's with the login form you ask?</strong>
        </p>
        <p>
          Every good app needs a login form. (This one's even prefilled for
          you!)
        </p>
        <p>Click the button to login and see the magic happen... </p>
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <Label styles={{ paddingLeft: "8px" }} fontSize={15}>
              Username:
            </Label>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="input-field"
                  type="text"
                  placeholder="Enter your username"
                  disabled
                />
              )}
            />
            {errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )}
          </div>
          <div className="input-container">
            <Label styles={{ paddingLeft: "8px" }} fontSize={15}>
              Password:
            </Label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="input-field"
                  type="password"
                  placeholder="Enter your password"
                  disabled
                />
              )}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>

          <Button
            buttonType="submit"
            buttonText={"Let's go!"}
            onButtonClick={() => {}}
          />
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;

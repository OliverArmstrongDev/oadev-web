import { useEffect, useState } from "react";
import Button from "../../components/Buttons/primary/Button";
import Label from "../../components/Label/Label";
import { useForm, Controller } from "react-hook-form";
import "./ContactForm.css";
import { useLoginForm } from "../../hooks/useLoginForm";
import { useApp } from "../../hooks/useApp";



const ContactForm = () => {


  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // useEffect(() => {
  //   if (editing && formState) {
  //     reset(formState); // Prepopulate the form with existing data
  //   } else {
  //     reset(); // Clear form if not editing
  //   }
  // }, [editing, formState, reset]);

  const onSubmit = (data: any) => {
    console.log("🚀 ~ LOG: ");
    reset(); // Clear form after submission
  };

  return (
    <div className="contact card">
      <div className="contact-text-content">
        <h3>Contact Me</h3>
        <span>I usually reply within a few hours. (If not, the next day)</span>
       
      </div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <Label styles={{ paddingLeft: "8px" }} fontSize={15}>
              name:
            </Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="input-field"
                  type="text"
                  placeholder="Enter your name"
                  
                />
              )}
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>
          <div className="input-container">
            <Label styles={{ paddingLeft: "8px" }} fontSize={15}>
              email:
            </Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="input-field"
                  type="email"
                  placeholder="Enter your email"
                  
                />
              )}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <Button
            buttonType="submit"
            buttonText={"Send"}
            onButtonClick={() => {}}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

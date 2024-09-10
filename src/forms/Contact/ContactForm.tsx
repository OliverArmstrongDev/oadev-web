import { useEffect, useState } from "react";
import Button from "../../components/Buttons/primary/Button";
import Label from "../../components/Label/Label";
import { useForm} from "react-hook-form";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const {
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_PUBLIC_KEY,
  REACT_APP_EMAILJS_TEMPLATE_ID,
} = process.env;

const ContactForm = () => {
  const [formError, setFormError] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (
      !REACT_APP_EMAILJS_SERVICE_ID ||
      !REACT_APP_EMAILJS_PUBLIC_KEY ||
      !REACT_APP_EMAILJS_TEMPLATE_ID
    ) {
      setFormError("Missing email config variable(s)");
    } else {
      setFormError("");
    }
  }, []);

  const validateFields = (fieldName: string, type: string) => {
    if (type.includes("required")) return `${fieldName} is required`;
    if (type.includes("minLength"))return `${fieldName} must be at least 2 characters`;
    if (type.includes("pattern"))return `Not a valid email address`;
    return "";
  };

  const onSubmit = (data: any) => {
    if (sending) return;
    setSending(true);
    emailjs
      .send(REACT_APP_EMAILJS_SERVICE_ID!, REACT_APP_EMAILJS_TEMPLATE_ID!, data, {
        publicKey: REACT_APP_EMAILJS_PUBLIC_KEY!,
      })
      .then(
        () => {
          setSuccessMsg("Message sent successfully. Thank you.");
        },
        (error) => {
          setFormError("Message failed to send: " + error);
        }
      ).finally(()=>{
        setSending(false);
      });
    reset(); // Clear form after submission
   
  };

  return (
    <div className="contact card">
      <div className="contact-text-content">
        <h3>Contact Me</h3>
        <span>I will reply within a few hours. (If not, the next day)</span>
      </div>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <Label styles={{ paddingLeft: "8px" }} fontSize={15}>
              Name:
            </Label>
            <input
            className="input-field"
              placeholder="Name"
              type="text"
              {...register("name", { required: true, minLength: 2 , })}
            />
            {errors.name && (
              <p className="error-message">{validateFields("Name", errors.name.type)}</p>
            )}
          </div>
          <div className="input-container">
            <Label styles={{ paddingLeft: "8px" }} fontSize={15}>
              Email:
            </Label>
            <input
              {...register("email", { required: true, pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
            }})}
              className="input-field"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="error-message">{validateFields("Email", errors.email.type)}</p>
            )}
          </div>
          <div className="input-container">
            <Label styles={{ paddingLeft: "8px" }} fontSize={15}>
              Message:
            </Label>
            <textarea
              {...register("message", { required: true})}
              className="input-field"
              rows={5}
              placeholder="Enter your message"
            />
            {errors.message && (
              <p className="error-message">{validateFields("Message", errors.message.type)}</p>
            )}
          </div>

          <Button
            buttonType="submit"
            buttonText={"Send"}
            onButtonClick={() => {}}
            disabled={sending || !!formError.length}
          />
        </form>
        {sending && <p className="sending"></p>}
        {formError && <p className="error-message">{formError}</p>}
        {successMsg && <p className="success">{successMsg}</p>}
      </div>
    </div>
  );
};

export default ContactForm;

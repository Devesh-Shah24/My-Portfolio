import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { IoMdContact } from "react-icons/io";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbx-GoajAx7OtztBP57rSrf-Knc8i39IiMbVRyRHgbNRzw6RVPWpWoRmoakgoSsD4Imu/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setMsg("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setMsg("❌ Failed to send message.");
      }
    } catch (error) {
      setMsg("❌ Network error. Try again.");
    }

    setLoading(false);
    setTimeout(() => setMsg(""), 4000);
  };



  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<IoMdContact size={40} />}
      />
      <div className="contact__content">
        <Animate play duration={1} delay={0} start={{ transform: "translateX(-200px)" }} end={{ transform: "translateX(0px)" }}>
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate play duration={1} delay={0} start={{ transform: "translateX(200px)" }} end={{ transform: "translateX(0px)" }}>
          <form className="contact__content__form" name="submit-to-google-sheet" onSubmit={handleSubmit} autoComplete="off">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input name="name" required className="inputName" type="text" value={formData.name} onChange={handleChange} />
                <label htmlFor="name" className="nameLabel">Name</label>
              </div>
              <div>
                <input name="email" required className="inputEmail" type="email" value={formData.email} onChange={handleChange} />
                <label htmlFor="email" className="emailLabel">Email</label>
              </div>
              <div>
                <textarea name="message" required className="inputDescription" rows="5" value={formData.message} onChange={handleChange} />
                <label htmlFor="message" className="descriptionLabel">Message</label>
              </div>
            </div>
            <button type="submit" disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
            <span id="msg" className="form-message">{msg}</span>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;

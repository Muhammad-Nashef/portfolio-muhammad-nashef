import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";
import Swal from "sweetalert2";


export default function Contact() {
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {

        

  e.preventDefault();

  const form = e.target;

  // 🚨 Spam protection (honeypot)
  if (form.website.value !== "") {
    return; // bot detected
  }

  // ❌ VALIDATION
let hasError = false;

if (!form.name.value) {
  form.name.classList.add("border-red-500");
  hasError = true;
} else {
  form.name.classList.remove("border-red-500");
}

if (!form.email.value) {
  form.email.classList.add("border-red-500");
  hasError = true;
} else {
  form.email.classList.remove("border-red-500");
}

if (!form.message.value) {
  form.message.classList.add("border-red-500");
  hasError = true;
} else {
  form.message.classList.remove("border-red-500");
}

if (hasError) {
  Swal.fire({
    icon: "warning",
    title: "Missing Fields",
    text: "Please fill in all fields before sending.",
  });
  return;
}

  setLoading(true);

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbxcFbfsm3iospvGIGOwn0YtwFM8fHKx1NZh2xGh5qOTbj9EZb2G9SGF3jN9_DjEe9yQ/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });

    if (res.ok) {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "I will get back to you soon 🚀",
        timer: 2000,
        showConfirmButton: false,
      });

      form.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong",
      });
    }
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Network Error",
      text: "Please try again later",
    });
  } finally {
    setLoading(false);
  }
};
  return (
    <section id="contact" className="py-32 px-6">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-bold mb-6"
      >
        Get In <span className="text-[#d4a373]">Touch</span>
      </motion.h2>

      <p className="text-center opacity-70 mb-16 max-w-xl mx-auto">
        I'm open to internships, junior roles, freelance work, and collaboration opportunities.
      </p>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="
            bg-white/40 dark:bg-[#1f2937]
            border border-white/10
            rounded-2xl p-8
            shadow-lg
          "
        >

          <h3 className="text-xl font-bold mb-6">Contact Info</h3>

          <p className="mb-4">
            📧 Email: Muhammadnashef2@gmail.com
          </p>

          <p className="mb-4">
            📍 Location: Tayibe, Israel
          </p>

          <p className="mb-6">
            💼 Open to: Internships / Full-time / Freelance
          </p>

          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/muhammad-nashef" className="text-[#d4a373] hover:underline">LinkedIn</a>
            <a href="https://github.com/Muhammad-Nashef" className="text-[#d4a373] hover:underline">GitHub</a>
          </div>

        </motion.div>

                {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="
            bg-white/40 dark:bg-[#1f2937]
            border border-white/10
            rounded-2xl p-8
            shadow-lg
            flex flex-col gap-4
          "
        >

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-800 bg-white/60 dark:bg-[#111827] outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-800 bg-white/60 dark:bg-[#111827] outline-none"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded-lg border border-gray-800 bg-white/60 dark:bg-[#111827] outline-none resize-none"
          ></textarea>
          <input
            type="text"
            name="website"
            style={{ display: "none" }}
            autoComplete="off"
           />

          <button
            type="submit"
            disabled={loading}
             className="
    bg-[#d4a373]
    text-black
    py-3 rounded-lg
    font-semibold
    hover:scale-105
    active:scale-95
    transition
    flex justify-center items-center gap-2
    disabled:opacity-60
    cursor-pointer
  "
>
  {loading ? (
    <>
      <span className="animate-spin border-2 border-black border-t-transparent rounded-full w-5 h-5"></span>
      Sending...
    </>
  ) : (
    "Send Message"
  )}
          </button>

        </motion.form>

      </div>
    </section>
  );
}
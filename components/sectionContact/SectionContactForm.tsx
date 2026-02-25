"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { useTranslate } from "@/lib/useTranslate";

export default function SectionCompanyInfo() {
  const { t } = useTranslate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (!form.name.trim()) return t("contact", "errorName");
    if (!form.email.trim()) return t("contact", "errorEmail");
    if (!form.message.trim()) return t("contact", "errorMessage");

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email))
      return t("contact", "errorEmailInvalid");

    return "";
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      setSuccess(
        t("contact", "success")
      );

      setForm({
        name: "",
        email: "",
        interest: "",
        phone: "",
        message: "",
      });
    } catch {
      setError(
        t("contact", "errorSubmit")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeUp>
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-gray-900 mb-16"
          >
            {t("contact", "title")}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("contact", "sendMessage")}
              </h3>

              <p className="text-gray-500 mb-10">
                {t("contact", "subtitle")}
              </p>

              <form
                onSubmit={
                  handleSubmit
                }
                className="space-y-8"
              >

                <div className="grid sm:grid-cols-2 gap-8">

                  <div>
                    <label className="text-sm text-gray-600">
                      {t("contact", "name")}
                    </label>

                    <input
                      name="name"
                      value={
                        form.name
                      }
                      onChange={
                        handleChange
                      }
                      className="w-full border-b border-gray-400 focus:border-yellow-500 outline-none py-2 bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600">
                      {t("contact", "email")}
                    </label>

                    <input
                      name="email"
                      value={
                        form.email
                      }
                      onChange={
                        handleChange
                      }
                      className="w-full border-b border-gray-400 focus:border-yellow-500 outline-none py-2 bg-transparent"
                    />
                  </div>

                </div>

                <div className="grid sm:grid-cols-2 gap-8">

                  <div>
                    <label className="text-sm text-gray-600">
                      {t(
                        "contact",
                        "interest"
                      )}
                    </label>

                    <select
                      name="interest"
                      value={
                        form.interest
                      }
                      onChange={
                        handleChange
                      }
                      className="w-full border-b border-gray-400 focus:border-yellow-500 outline-none py-2 bg-transparent"
                    >
                      <option value="">
                        -
                      </option>

                      <option>
                        Web Development
                      </option>

                      <option>
                        UI/UX Design
                      </option>

                      <option>
                        Branding
                      </option>

                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-600">
                      {t(
                        "contact",
                        "phone"
                      )}
                    </label>

                    <input
                      name="phone"
                      value={
                        form.phone
                      }
                      onChange={
                        handleChange
                      }
                      className="w-full border-b border-gray-400 focus:border-yellow-500 outline-none py-2 bg-transparent"
                    />
                  </div>

                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    {t(
                      "contact",
                      "message"
                    )}
                  </label>

                  <textarea
                    name="message"
                    value={
                      form.message
                    }
                    onChange={
                      handleChange
                    }
                    rows={4}
                    className="w-full border-b border-gray-400 focus:border-yellow-500 outline-none py-2 bg-transparent"
                  />
                </div>

                {/* SUCCESS */}
                {success && (
                  <p className="text-green-600 text-sm">
                    {success}
                  </p>
                )}

                {/* ERROR */}
                {error && (
                  <p className="text-red-600 text-sm">
                    {error}
                  </p>
                )}

                <div className="flex justify-end">

                  <button
                    type="submit"
                    disabled={
                      loading
                    }
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-md font-medium transition disabled:opacity-50"
                  >
                    {loading
                      ? t(
                          "contact",
                          "sending"
                        )
                      : t(
                          "contact",
                          "submit"
                        )}
                  </button>

                </div>

              </form>
            </motion.div>

            {/* RIGHT */}
            <motion.div className="lg:border-l lg:pl-16 space-y-12">

              <div>
                <h4 className="font-semibold mb-3">
                  {t(
                    "contact",
                    "call"
                  )}
                </h4>

                <div className="flex gap-3 text-yellow-600">
                  <Phone size={18} />
                  <span>
                    (235) 325-1351
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">
                  {t(
                    "contact",
                    "visit"
                  )}
                </h4>

                <div className="flex gap-3 text-yellow-600">
                  <MapPin size={18} />
                  <span>
                    Bandar Lampung,
                    Indonesia
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">
                  {t(
                    "contact",
                    "liveChat"
                  )}
                </h4>

                <div className="flex gap-3 text-yellow-600">
                  <MessageCircle size={18} />
                  <span>
                    WhatsApp
                  </span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </FadeUp>
  );
}

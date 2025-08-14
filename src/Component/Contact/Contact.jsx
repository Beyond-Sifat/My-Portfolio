// src/components/Contact.jsx
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
// import { useState } from "react";

const Contact = () => {
    // const [form, setForm] = useState({
    //     email: "",
    //     phone: "",
    //     message: "",
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setForm((prev) => ({ ...prev, [name]: value }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(form);
    //     alert("Message sent!");
    //     setForm({ email: "", phone: "", message: "" });
    // };

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 transition-colors duration-300"
        >
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Get In{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Touch
                    </span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
                    Have a question or want to work together? Drop a message below.
                </p>

                <div className="grid md:grid-cols-2 gap-10">

                    <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl shadow-md p-8">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                            Contact Information
                        </h3>

                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                    <p className="font-medium text-gray-800 dark:text-gray-100">
                                        syedsifat2004@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                    <p className="font-medium text-gray-800 dark:text-gray-100">
                                        +880 1894-108866
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
                                    <p className="font-medium text-gray-800 dark:text-gray-100">
                                        +880 1894-108866
                                    </p>
                                </div>
                            </div>
                        </div>


                        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                            I usually reply within a day.
                        </p>
                    </div>


                    <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl shadow-md p-8">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                            Send a Message
                        </h3>

                        <form
                            // onSubmit={handleSubmit}
                            className="space-y-5">
                            <div>
                                <label className="block text-sm mb-2 text-gray-600 dark:text-gray-300">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    // value={form.email}
                                    // onChange={handleChange}
                                    placeholder="e.g. youremail@example.com"
                                    required
                                    className="w-full p-3 rounded-xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-white/5 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-2 text-gray-600 dark:text-gray-300">
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    // value={form.phone}
                                    // onChange={handleChange}
                                    placeholder="+880 1XXX-XXXXXX"
                                    required
                                    className="w-full p-3 rounded-xl border border-white/20 dark:border-white/10 bg-white/80 dark:bg-white/5 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-2 text-gray-600 dark:text-gray-300">
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    // value={form.message}
                                    // onChange={handleChange}
                                    placeholder="Write your message..."
                                    required
                                    className="w-full p-3 rounded-xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-white/5 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

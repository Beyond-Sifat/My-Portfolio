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
            className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 transition-colors duration-300 relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                    Get In{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Touch
                    </span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg">
                    Have a question or want to work together? Drop a message below.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl dark:shadow-blue-900/20 dark:hover:shadow-blue-900/30 p-8 transition-all duration-300 border border-white/20 dark:border-gray-700/30">
                        <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-100">
                            Contact Information
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-600/50 hover:scale-105 transition-transform duration-300">
                                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-lg">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email</p>
                                    <p className="font-semibold text-gray-800 dark:text-gray-100">
                                        syedsifat2004@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-600/50 hover:scale-105 transition-transform duration-300">
                                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-lg">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Phone</p>
                                    <p className="font-semibold text-gray-800 dark:text-gray-100">
                                        +880 1894-108866
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-600/50 hover:scale-105 transition-transform duration-300">
                                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-lg">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">WhatsApp</p>
                                    <p className="font-semibold text-gray-800 dark:text-gray-100">
                                        +880 1894-108866
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200/50 dark:border-green-700/30">
                            <p className="text-sm text-green-700 dark:text-green-300 font-medium text-center">
                                ✨ I usually reply within a day
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl dark:shadow-blue-900/20 dark:hover:shadow-blue-900/30 p-8 transition-all duration-300 border border-white/20 dark:border-gray-700/30">
                        <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-100">
                            Send a Message
                        </h3>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm mb-3 text-gray-600 dark:text-gray-300 font-semibold">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="e.g. youremail@example.com"
                                    required
                                    className="w-full p-4 rounded-xl border border-gray-200/50 dark:border-gray-600/30 bg-white/90 dark:bg-gray-700/50 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60 dark:focus:ring-blue-400/60 focus:border-transparent transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-3 text-gray-600 dark:text-gray-300 font-semibold">
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+880 1XXX-XXXXXX"
                                    required
                                    className="w-full p-4 rounded-xl border border-gray-200/50 dark:border-gray-600/30 bg-white/90 dark:bg-gray-700/50 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60 dark:focus:ring-blue-400/60 focus:border-transparent transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-3 text-gray-600 dark:text-gray-300 font-semibold">
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Write your message..."
                                    required
                                    className="w-full p-4 rounded-xl border border-gray-200/50 dark:border-gray-600/30 bg-white/90 dark:bg-gray-700/50 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60 dark:focus:ring-blue-400/60 focus:border-transparent transition-all duration-300 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-400 dark:hover:to-purple-400 hover:scale-105"
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

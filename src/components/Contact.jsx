import React, { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const form = new FormData();
        form.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
        form.append("name", formData.name);
        form.append("email", formData.email);
        form.append("message", formData.message);

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: form,
                }
            );

            const data = await response.json();

            if (data.success) {
                setSent(true);

                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });

                setTimeout(() => setSent(false), 3000);
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative px-6 md:px-12 py-24 max-w-5xl mx-auto"
        >
            <Reveal>
                <SectionLabel eyebrow="Let's talk" title="Contact" />
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
                <Reveal delay={100}>
                    <div className="glass rounded-2xl p-8 h-full flex flex-col gap-6">
                        <p className="text-sm opacity-70 leading-relaxed">
                            Open to internships, freelance work, and
                            collaboration on interesting projects. Feel free to
                            reach out.
                        </p>

                        <div className="flex items-center gap-3 text-sm">
                            <Mail size={16} className="text-teal" />
                            biwashbhattarai5@example.com
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <Github size={16} className="text-teal" />
                            https://github.com/BIwashbhatarai
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <Linkedin size={16} className="text-teal" />
                            https://www.linkedin.com/in/biwash-bhattarai/
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <MapPin size={16} className="text-teal" />
                            Itahari-2, Shantinagar, Sunsari, Nepal
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    <form
                        onSubmit={handleSubmit}
                        className="glass rounded-2xl p-8 flex flex-col gap-4"
                    >
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-teal"
                        />

                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-teal"
                        />

                        <textarea
                            name="message"
                            required
                            rows={5}
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-teal resize-none"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="glow-btn rounded-lg py-3 text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                        >
                            <Send size={16} />

                            {loading
                                ? "Sending..."
                                : sent
                                    ? "Message Sent!"
                                    : "Send Message"}
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}
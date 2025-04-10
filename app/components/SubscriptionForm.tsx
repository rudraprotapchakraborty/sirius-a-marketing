"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { db, addDoc, collection } from "@/lib/firebaseConfig";

function SubscribeButton({ loading }: { loading: boolean }) {
    return (
        <Button
            type="submit"
            size="icon"
            className="bg-purple-600 hover:bg-purple-700 rounded-full shrink-0 text-white"
            disabled={loading}
        >
            {loading ? <span className="animate-spin">↻</span> : <ArrowRight className="h-4 w-4" />}
        </Button>
    );
}

const SubscriptionForm = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email) {
            setMessage("Please enter a valid email address.");
            return;
        }
        setLoading(true);
        try {
            // Store subscriber in Firebase
            await addDoc(collection(db, "subscribers"), { email });

            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                { email: email },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (response.status === 200) {
                setMessage("Subscription successful! 🎉");
                setEmail("");
            } else {
                setMessage("Failed to subscribe. Please try again.");
            }
        } catch (error) {
            console.error("EmailJS Error:", error);
            setMessage("Error occurred. Please try again later.");
        }
        setLoading(false);
    };

    return (
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <p className="text-lg font-light mb-4 text-gray-900 dark:text-white">
                Stay in touch with the herd and receive up-to-date insights, strategies, and news.
            </p>
            <form onSubmit={sendEmail} className="gap-2 max-w-md mt-4 flex">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#e1e1eb] dark:bg-[#1A1A2E] border border-purple-800/20 px-4 py-2 rounded-md text-gray-900 dark:text-white w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />
                <SubscribeButton loading={loading} />
            </form>
            {message && <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{message}</p>}
        </div>
    );
};

export default SubscriptionForm;
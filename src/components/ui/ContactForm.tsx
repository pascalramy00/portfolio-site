"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
		company: "",
	});

	const [status, setStatus] = useState<"success" | "error" | "">("");

	const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to hold the timer ID
	if (timeoutRef.current) {
		clearTimeout(timeoutRef.current);
	}

	const inputClasses =
		"peer border py-4 px-5 rounded-2xl w-full z-20 bg-transparent";

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("");

		const response = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			setStatus("success");
			setFormData({ name: "", email: "", message: "", company: "" });
		} else {
			setStatus("error");
		}
	};

	timeoutRef.current = setTimeout(() => {
		setStatus("");
	}, 3000);

	return (
		<div className="relative">
			<h2 className="text-2xl font-semibold mb-2">
				Want to work together?
				<br />
				Reach out.
			</h2>
			<div className="flex items-center justify-start">
				<span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
				<h3>available for work and projects</h3>
			</div>
			{status && (
				<motion.div
					className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				/>
			)}
			{status && (
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
					className={`z-30 absolute top-[20%] left-[30%] -translate-x-1/2 -translate-y-1/2 
                    p-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl text-white 
                    ${status === "success" ? "bg-green-500" : "bg-red-500"}`}
				>
					{status === "success" ? (
						<CheckCircleIcon className="w-8 h-8" />
					) : (
						<XCircleIcon className="w-8 h-8" />
					)}
					<p className="text-lg">
						{status === "success"
							? "Sent!"
							: "Failed to send message."}
					</p>
				</motion.div>
			)}
			<form onSubmit={handleSubmit} className="flex flex-col">
				<div className="relative flex my-2">
					<input
						type="text"
						name="name"
						required
						onChange={handleChange}
						value={formData.name}
						placeholder=" "
						className={inputClasses}
					/>
					<label
						htmlFor="name"
						className={`absolute pl-5 text-gray-600 peer-focus:text-xs transition-all duration-150 ease-in-out ${
							formData.name.length !== 0 || "peer-focus:top-1"
						} ${
							formData.name.length !== 0
								? "top-1 text-xs"
								: "top-4"
						}`}
					>
						Name
					</label>
				</div>
				<div className="relative flex my-2">
					<input
						type="text"
						name="company"
						onChange={handleChange}
						value={formData.company}
						placeholder=" "
						className={inputClasses}
					/>
					<label
						htmlFor="company"
						className={`absolute pl-5 text-gray-600 peer-focus:text-xs transition-all duration-150 ease-in-out ${
							formData.company.length !== 0 || "peer-focus:top-1"
						} ${
							formData.company.length !== 0
								? "top-1 text-xs"
								: "top-4"
						}`}
					>
						Company (optional)
					</label>
				</div>
				<div className="relative flex my-2">
					<input
						type="email"
						name="email"
						required
						onChange={handleChange}
						value={formData.email}
						className={inputClasses}
					/>
					<label
						htmlFor="email"
						className={`absolute pl-5 text-gray-600 peer-focus:text-xs transition-all duration-150 ease-in-out ${
							formData.email.length !== 0 || "peer-focus:top-1"
						} ${
							formData.email.length !== 0
								? "top-1 text-xs"
								: "top-4"
						}`}
					>
						Email
					</label>
				</div>

				<div className="relative flex my-2">
					<textarea
						name="message"
						required
						onChange={handleChange}
						value={formData.message}
						className={`${inputClasses} min-h-48`}
					/>
					<label
						htmlFor="message"
						className={`absolute pl-5 text-gray-600 peer-focus:text-xs transition-all duration-150 ease-in-out ${
							formData.message.length !== 0 || "peer-focus:top-1"
						} ${
							formData.message.length !== 0
								? "top-1 text-xs"
								: "top-4"
						}`}
					>
						Message
					</label>
				</div>

				<button
					type="submit"
					className="bg-gray-200 hover:bg-gray-400 dark:bg-gray-600 mt-2 p-4 rounded-xl text-lg relative overflow-hidden transition-colors duration-200 ease-in-out"
				>
					Send message
				</button>
				{status && <p>{status}</p>}
			</form>
		</div>
	);
};
export default ContactForm;

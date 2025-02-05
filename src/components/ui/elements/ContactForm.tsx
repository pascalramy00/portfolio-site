"use client";

import { useState, useRef, useEffect } from "react";
import {
	CheckCircleIcon,
	XCircleIcon,
	ArrowPathIcon,
} from "@heroicons/react/24/solid";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
		company: "",
	});

	const [status, setStatus] = useState<"success" | "error" | "pending" | "">(
		""
	);

	const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to hold the timer ID

	useEffect(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(() => {
			if (status === "pending") return;
			setStatus("");
		}, 3000);

		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [status]);

	const inputClasses =
		"peer border border-gray-400 py-4 px-5 rounded-2xl w-full z-20 bg-transparent";

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("pending");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (!response.ok) throw new Error("Failed to send message");

			setStatus("success");
			setFormData({ name: "", email: "", message: "", company: "" });
		} catch (e) {
			setStatus("error");
			console.log(e);
		}
	};

	return (
		<div className="relative">
			<form onSubmit={handleSubmit} className="flex flex-col">
				<div className="relative flex my-2">
					<input
						type="text"
						id="name"
						name="name"
						required
						onChange={handleChange}
						value={formData.name}
						placeholder=" "
						className={inputClasses}
						autoComplete="name"
					/>
					<label
						htmlFor="name"
						className={`absolute pl-5 text-gray-600 dark:text-gray-400 peer-focus:text-xs transition-all duration-150 ease-in-out ${
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
						id="company"
						type="text"
						name="company"
						onChange={handleChange}
						value={formData.company}
						placeholder=" "
						className={inputClasses}
						autoComplete="company"
					/>
					<label
						htmlFor="company"
						className={`absolute pl-5 text-gray-600 dark:text-gray-400 peer-focus:text-xs transition-all duration-150 ease-in-out ${
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
						id="email"
						type="email"
						name="email"
						required
						placeholder=" "
						onChange={handleChange}
						value={formData.email}
						className={inputClasses}
						autoComplete="email"
					/>
					<label
						htmlFor="email"
						className={`absolute pl-5 text-gray-600 dark:text-gray-400 peer-focus:text-xs transition-all duration-150 ease-in-out ${
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
						id="message"
						name="message"
						required
						onChange={handleChange}
						value={formData.message}
						className={`${inputClasses} min-h-48`}
					/>
					<label
						htmlFor="message"
						className={`absolute pl-5 text-gray-600 dark:text-gray-400 peer-focus:text-xs transition-all duration-150 ease-in-out ${
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
					aria-live="polite"
					className={`relative border border-gray-200 dark:border-gray-600 flex items-center justify-center gap-3 mt-2 p-4 rounded-xl text-lg w-full transition-all duration-300 ease-in-out
						${
							status === "success"
								? "bg-green-500 text-white"
								: status === "error"
								? "bg-red-500 text-white"
								: status === "pending"
								? "bg-gray-500 text-white dark:bg-purple-600"
								: "bg-gray-200 hover:bg-gray-400 dark:bg-gray-600 hover:scale-[102%] active:scale-[98%]"
						}`}
					disabled={status === "pending"}
				>
					{status === "success" ? (
						<>
							<CheckCircleIcon className="w-6 h-6" />
							Sent! Thank you for your message.
						</>
					) : status === "error" ? (
						<>
							<XCircleIcon className="w-6 h-6" />
							Failed to send. Sorry about that!
						</>
					) : status === "pending" ? (
						<>
							<ArrowPathIcon className="w-6 h-6 animate-spin" />
							Sending...
						</>
					) : (
						"Send Message"
					)}
				</button>
			</form>
		</div>
	);
};
export default ContactForm;

const Contact = () => {
	return (
		<div
			id="contact"
			className="max-w-[1040] md:mx-[10%] lg:px-32 p-4 ">
			<h1 className="py-4 text-4xl font-bold text-center text-gray-700">
				Conatct
			</h1>
			<form
				action="https://getform.io/f/panvnlga"
				method="POST"
				encType="multipart/form-data"
			>
				<div className="grid md:grid-cols-2 gap-4 w-full py-4">
					<div className="flex flex-col">
						<label className=" uppercase text-sm py-2">Name</label>
						<input
							type="text"
							name="name"
							className="border-2 rounded-lg p-3 flex border-gray-300"
						/>
					</div>
					<div className="flex flex-col">
						<label className=" uppercase text-sm py-2">Phone</label>
						<input
							type="text"
							name="phone"
							className="border-2 rounded-lg p-3 flex border-gray-300"
						/>
					</div>
				</div>
				<div className="flex flex-col py-2">
					<label className=" uppercase text-sm py-2">Email</label>
					<input
						type="email"
						name="email"
						className="border-2 rounded-lg p-3 flex border-gray-300"
					/>
				</div>
				<div className="flex flex-col py-2">
					<label className=" uppercase text-sm py-2">Subject</label>
					<input
						type="text"
						name="subject"
						className="border-2 rounded-lg p-3 flex border-gray-300"
					/>
				</div>
				<div className="flex flex-col py-2">
					<label className=" uppercase text-sm py-2">Messsage</label>
					<textarea
						name="message"
						rows="10"
						className="border-2 rounded-lg p-3 border-gray-300"></textarea>
				</div>
				<button
					type="submit"
					className=" py-2 font-semibold text-white bg-pink-600/65 rounded-lg mt-4 w-full p-4">
					Send Message
				</button>
			</form>
		</div>
	);
};

export default Contact;

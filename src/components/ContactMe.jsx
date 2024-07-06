import { useState } from "react";

const ContactMe = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleModal = () => {
    document.getElementById("my_modal_5").showModal();
  };

  // const handleContact = async (e) => {
  //   e.preventDefault();
  //   const { name, email, message } = userData;
  //   const res = await fetch(
  //     "https://developer-portfolio-minhaj-default-rtdb.firebaseio.com/clientContactRecords.json",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         message,
  //       }),
  //     }
  //   );
  //   document.getElementById("my_modal_5").close();
  //   if (res) {
  //     // Clearing the form after successful submission
  //     setUserData({
  //       name: "",
  //       email: "",
  //       message: "",
  //     });
  //     // Showing message after 1.250s
  //     setTimeout(() => {
  //       toast.success("Message Sent Successfully");
  //     }, 1250);
  //   } else {
  //     setTimeout(() => {
  //       toast.error("Failed to send message");
  //     }, 1250);
  //   }
  // };
  const closeModal = () => {
    document.getElementById("my_modal_5").close();
  };
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <button
        onClick={handleModal}
        className="btn button-glow btn-outline hover:border-none hover:bg-blue-500 btn-sm rounded-3xl"
      >
        Contact
      </button>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-center text-lg">Contact Me</h3>
          <form
            method="POST"
            action="https://formsubmit.co/349424b3fe6dc850d83efe4d81c901a4"
          >
            {" "}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                value={userData.name}
                onChange={postUserData}
                className="mt-1 p-2 w-full border shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                value={userData.email}
                onChange={postUserData}
                className="mt-1 p-2 w-full border shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                value={userData.message}
                onChange={postUserData}
                className="mt-1 p-2 w-full border shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="modal-action w-full flex justify-between">
              {" "}
              <div className="flex justify-center  items-center">
                {" "}
                <p className="text-sm rainbow-flow">
                  Reach out to me on social media anytime!
                </p>{" "}
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm px-6 button-glow"
                >
                  Send
                </button>
                <button
                  onClick={closeModal}
                  type="button"
                  className="btn btn- btn-sm px-6 btn-warning hover:btn-error"
                  formMethod="dialog"
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ContactMe;

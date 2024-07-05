import toast from "react-hot-toast";

const ContactMe = () => {
  const handleContact = () => {
    document.getElementById("my_modal_5").showModal();
    toast.success("Contacting...");
  };
  const closeModal = () => {
    document.getElementById("my_modal_5").close();
  };
  return (
    <div>
      <button
        onClick={handleContact}
        className="btn button-glow btn-outline hover:border-none hover:bg-blue-500 btn-sm rounded-3xl"
      >
        Contact Me
      </button>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-center text-lg">Contact Me</h3>
          <form method="POST" action="/submit-form-endpoint">
            {" "}
            {/* Update action with your endpoint */}
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
                required
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
                required
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
                required
                className="mt-1 p-2 w-full border shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="modal-action w-full flex justify-">
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
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ContactMe;

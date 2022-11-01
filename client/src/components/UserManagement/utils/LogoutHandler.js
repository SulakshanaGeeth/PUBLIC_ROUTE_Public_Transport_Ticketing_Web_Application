import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Logout = () => {
  confirmAlert({
    title: "Confirm to logout",
    message: "Do want to Logout ?",
    buttons: [
      {
        label: "Yes",
        onClick: () => {
          try {
            const resolveAfter2Sec = new Promise((resolve) =>
              setTimeout(resolve, 2000)
            );

            toast.promise(resolveAfter2Sec, {
              pending: "Logout ...",
              //   success: "Logout Success 👌",
              error: "Login Faild 🤯",
            });
            setTimeout(() => {
              // set a 2seconds timeout for authentication

              localStorage.removeItem("username");
              localStorage.removeItem("id");
              localStorage.setItem("authToken", null);
              localStorage.removeItem("email");
              localStorage.removeItem("type");
              window.location = "/";
            }, 3000);
          } catch (error) {
            toast.error(error.response.data.error);
          }
        },
      },
      {
        label: "No",
        onClick: () => {
          toast.info("You clicked NO", {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
      },
    ],
  });

  return (
    <div className="container">
      <button onClick={Logout}>Confirm dialog</button>
    </div>
  );
};
export { Logout };

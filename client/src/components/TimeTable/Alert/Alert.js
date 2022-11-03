import Swal from "sweetalert2";

export const AlertCreateTable = (icon, title, text) => {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonText:"OK"
    })
    .then((ok) => {
        if (ok) {
          window.location = "/admin/viewTable"
        }
      });
};

export const AlertUpdateTable = (icon, title, text) => {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonText:"OK"
    })
    .then((ok) => {
        if (ok) {
        //   window.location = "/admin/viewTable"
        }
      });
};

export const AlertDeleteTable = (icon, title, text) => {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonText:"OK"
    })
    .then((ok) => {
        if (ok) {
        //   window.location = "/admin/viewTable"
        }
      });
};

export const AlertAddedTable = (icon, title, text) => {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonText:"OK"
    })
    .then((ok) => {
        if (ok) {
        //   window.location = "/admin/viewTable"
        }
      });
};
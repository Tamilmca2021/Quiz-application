import { showNotification } from "@mantine/notifications";
import API_URL from "./ApiClient";

class apiproviders {
  showmessage(title: string) {
    showNotification({
      message: title,
      title: "success",
      color: "green",
    });
  }

  showerrormessage(message: string) {
    showNotification({
      message: message,
      title: "Failed",
      color: "red",
    });
  }

  async fetchAllUser(data) {
    const result = await API_URL.get("/user", { params: data });
    if (result != null) {
      return result;
    } else {
      return null;
    }
  }

  async AddUserData(data) {
    try {
      const result = await API_URL.post("/user", data);
      if (result != null) {
        const message = result.data.message;
        this.showmessage(message);
        return result;
      } else {
        return null;
      }
    } catch (e) {
      const message = e?.response?.data?.message;
      this.showerrormessage(message);
    }
  }
  async EditUserData(data) {
    try {
      const result = await API_URL.patch("/user", data);
      if (result != null) {
        const message = result.data.message;
        this.showmessage(message);
        return result;
      } else {
        return null;
      }
    } catch (e) {
      const message = e?.response?.data?.message;
      this.showerrormessage(message);
    }
  }
}

const apiprovider = new apiproviders();

export default apiprovider;

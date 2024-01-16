import { API_URL, errorMessage, createNotification, client } from "./api";

export async function listSnipping() {
    try {
      let res = await client.get(`${API_URL}/transactions/snipping`);
      let data = res.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
}

export async function listFront() {
  try {
    let res = await client.get(`${API_URL}/transactions/front`);
    let data = res.data.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}



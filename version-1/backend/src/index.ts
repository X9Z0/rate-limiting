import express from "express";

const PORT: number = 3000;

const app = express();

app.use(express.json());

const otpStore: Record<string, string> = {};

app.post("/generate-otp", (req, res) => {
  const email = req.body.email;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[email] = otp;

  console.log(`Otp was generated for the ${email}:${otp} `);
  return res.status(200).json({ message: "otp was generated" });
});

app.post("/resetPassword", (req, res) => {
  const { email, newpassword, otp } = req.body;
  if (!email || !otp || !newpassword) {
    res.status(400).json({ message: "Email, Password, otp is required" });
  }

  if (otpStore[email] === otp) {
    console.log(
      `Passwords was changed for the following ${email} eith the ${newpassword}`
    );
    delete otpStore[email];
    return res
      .status(200)
      .json({ message: "Password was changed successfully" });
  } else {
    return res.status(401).json({ message: "Invalid OTP" });
  }
});

app.listen(PORT, () => {
  console.log(`The port is running on the ${PORT}`);
});

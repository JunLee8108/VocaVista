import clientPromise from "../../util/data/database";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const db = (await clientPromise).db("voca");
      const { token } = req.query;

      const user = await db
        .collection("users")
        .findOne({ verificationToken: token });

      if (!user) {
        return res.status(400).json({
          status: "error",
          message: "Invalid token",
        });
      }

      if (user.isVerified) {
        return res.status(400).json({
          status: "info",
          message: "This email address has already been verified.",
        });
      }

      const isTokenExpired = Date.now() > user.verificationExpiration;

      if (isTokenExpired) {
        return res.status(400).json({
          status: "error",
          message:
            "The verification token has expired. Please request a new one.",
        });
      }

      await db.collection("users").updateOne(
        { verificationToken: token },
        {
          $set: {
            isVerified: true,
            verificationToken: null, // clear the token once the email is verified
            verificationExpiration: null, // clear the expiration time
          },
        }
      );

      res.status(200).json({
        status: "success",
        message: "Thank you for verifying your email address.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while trying to verify the email address.",
    });
  }
}

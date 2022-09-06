import aws from "aws-sdk";
import { NextApiRequest, NextApiResponse } from "next";

const s3BucketLocation = "us-east-1";

const s3 = new aws.S3({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
  signatureVersion: "v4",
  region: s3BucketLocation,
});

/** Generates a new url to upload an image to our bucket
 *  @see Note: this function does NOT upload the image to aws directly.
 *  this only provides a secure url that will expire after certain amount of seconds
 *  so that an insecure app (i.e frontend) can use it to upload to s3 directly
 */
async function genUploadUrl(fileType: string) {
  const fileName = `${`${Math.random()}`.split(".")[1]}.png`;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Expires: parseInt(process.env.AWS_URL_EXPIRE_TIME!) || 60,
    ContentType: "image/png",
  };

  const url = await s3.getSignedUrlPromise("putObject", params);
  return url;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fileType = req.body.type || "image/png";
  const url = await genUploadUrl(fileType);
  return res.status(200).json({ url });
}

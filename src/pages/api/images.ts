import aws from "aws-sdk";
import { NextApiResponse } from "next";

const s3BucketLocation = "us-east-1";

const s3Bucket = new aws.S3({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },

  region: s3BucketLocation,
});

/** Generates a new url to upload an image to our bucket
 *  @see Note: this function does NOT upload the image to aws directly.
 *  this only provides a secure url that will expire after certain amount of seconds
 *  so that an insecure app (i.e frontend) can use it to upload to s3 directly
 */
async function genUploadUrl() {
  const fileName = `${Math.random()}${Math.random()}`; // We use random twice to ensure that the name will be unique

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Expires: parseInt(process.env.AWS_URL_EXPIRE_TIME!) || 60,
  };

  const url = await s3Bucket.getSignedUrlPromise("putObject", params);
  return url;
}

export default async function handler(_: any, res: NextApiResponse) {
  const url = await genUploadUrl();
  return res.status(200).json({ url });
}

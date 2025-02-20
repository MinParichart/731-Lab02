// Task 9 Lab 3 --------------------------------------------------------------
import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
  credentials: {
    accessKeyId: "c2c9bd6d0b321ded6dfc706edf708f3e",
    secretAccessKey: "88e4d553b4de899ca51b4f7d7adf917d907b58d7986282ddc488376020fa4f3c",
  },
  endpoint: "https://xqkgmbsjbovbjcxmxzrx.supabase.co/storage/v1/s3",
  region: "ap-southeast-1",
  forcePathStyle: true,
});

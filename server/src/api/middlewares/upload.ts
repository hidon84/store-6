import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import multer from 'multer';
import config from '@/config'

const s3 = new aws.S3({
  accessKeyId: config.s3.accessKeyId,
  secretAccessKey: config.s3.secretAccessKey,
  region: config.s3.region,
});

const multerProduct = multer({
  storage: multerS3({
    s3,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    bucket: config.s3.bucket
  }),
});

const uploadImage = multerProduct.array('img');

export default uploadImage;
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import multer from 'multer';
import { Request } from 'express';
import config from '@/config';
import * as validationHelper from '@/helper/validation';
import ErrorResponse from '@/utils/errorResponse';
import { uploadImageError } from '@/constants/error';

const s3 = new aws.S3({
  accessKeyId: config.s3.accessKeyId,
  secretAccessKey: config.s3.secretAccessKey,
  region: config.s3.region,
});

const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  callback: multer.FileFilterCallback,
) => {
  const isValidated = validationHelper.imageValidator(file.originalname);
  if (isValidated) {
    callback(null, true);
    return;
  }
  callback(new ErrorResponse(uploadImageError.notAcceptable));
};

const multerProduct = multer({
  limits: { fileSize: config.s3.maxSize },
  fileFilter,
  storage: multerS3({
    s3,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    bucket: config.s3.bucket,
  }),
});

const uploadImage = (name: string) => multerProduct.array(name);

export default uploadImage;

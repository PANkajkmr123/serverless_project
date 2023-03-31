const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name:"pankajkm",
    api_key: "823291947323296",
    api_secret: "NhqjfHNq7rdrBET3pbXujtBo6lo"
});


const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
var storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'admin',
    allowedFormats: ['jpg,png'],
    filename: (req: any, res: any, cb: any) => {
        cb(null, req.file.originalname, Date.now())
    }
});
const filefilter = (req: any, file: any, next: any) => {
    next(null, true);
}
var upload = multer({
    storage: storage,
    fileFilter: filefilter
});
export = upload;

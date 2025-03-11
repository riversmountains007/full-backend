
const multer = require('multer');


// Configure Multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../../public'); // Directory to save files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Unique file name
    }
});

export const upload = multer({ storage, limits: { fileSize: 1000000 } }); // 1MB file size limit


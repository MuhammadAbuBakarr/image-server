exports.bytesToMB = (bytes) => {
 const log = parseFloat((bytes / (1024 * 1024)).toFixed(2));
 return log;
};

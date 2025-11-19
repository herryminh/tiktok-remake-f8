const { override, useBabelRc } = require('customize-cra');

// // 🔥 Bật lại Fast Refresh để SCSS / JSX cập nhật ngay khi lưu
// process.env.FAST_REFRESH = true;

module.exports = override(useBabelRc());

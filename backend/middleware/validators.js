
const { body } = require('express-validator');

exports.registerValidator = [
  body('name')
    .not()
    .isEmpty()
    .withMessage('Name is required')
    .trim()
    .isLength({ max: 50 })
    .withMessage('Name cannot be more than 50 characters'),
  body('email')
    .isEmail()
    .withMessage('Please include a valid email')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('role')
    .isIn(['customer', 'artist', 'crafter', 'admin'])
    .withMessage('Role must be customer, artist, crafter, or admin')
];

exports.loginValidator = [
  body('email')
    .isEmail()
    .withMessage('Please include a valid email')
    .normalizeEmail(),
  body('password')
    .exists()
    .withMessage('Password is required')
];

exports.forgotPasswordValidator = [
  body('email')
    .isEmail()
    .withMessage('Please include a valid email')
    .normalizeEmail()
];

exports.resetPasswordValidator = [
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters')
];

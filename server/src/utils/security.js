import bcryptjs from 'bcryptjs'
const SALT_ROUNDS = 12;

function generateHash(password) {
    return bcryptjs.hash(password, SALT_ROUNDS);
}

function checkPassword(password, hash) {
    return bcryptjs.compare(password, hash);
}

export{ generateHash, checkPassword }

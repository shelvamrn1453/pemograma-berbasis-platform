const axios = require('axios');

// Uji coba POST /user menggunakan express-validator
const testExpressValidator = async () => {
    try {
        const response = await axios.post('http://localhost:3000/user', {
            username: 'shelva',
            email: 'invalidemail.com', // email tidak valid (sengaja)
        });
        console.log('response from /user (express-validator):', response.data);
    } catch (error) {
        console.log('error from /user (express-validator):', error.response?.data || error.message);
    }
};

// Uji coba POST /user-joi menggunakan Joi
const testJoiValidator = async () => {
    try {
        const response = await axios.post('http://localhost:3000/user-joi', {
            username: 'meriana', 
            email: 'invalidemail.com', // email tidak valid (sengaja)
        });
        console.log('response from /user-joi (joi):', response.data);
    } catch (error) {
        console.log('error from /user-joi (joi):', error.response?.data || error.message);
    }
};

// Menjalankan uji coba
const runTests = async () => {
    console.log('testing /user route with express-validator...');
    await testExpressValidator();

    console.log('\ntesting /user-joi route with joi...');
    await testJoiValidator(); 
};

runTests
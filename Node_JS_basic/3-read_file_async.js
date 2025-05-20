const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n').filter(line => line.trim() !== '');
            const students = lines.slice(1); 

            console.log(`Number of students: ${students.length}`);

            const fields = {};

            students.forEach(line => {
                const studentData = line.split(',');
                const name = studentData[0]; 
                const field = studentData[studentData.length - 1]; 
                
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(name);
            });

            let result = `Number of students: ${students.length}\n`;
            Object.entries(fields).forEach(([field, names]) => {
                result +=`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
            });

            resolve(result.trimEnd());
        });
    });
}

module.exports = countStudents;

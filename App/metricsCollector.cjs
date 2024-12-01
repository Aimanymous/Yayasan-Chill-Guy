const fs = require('fs');

// This function generates a sample Prometheus metrics file based on Jest results
function generateMetrics() {
    const metrics = [
        '# HELP jest_test_results Number of Jest tests passed/failed',
        '# TYPE jest_test_results gauge',
        'jest_test_results{test="add"} 1',
        'jest_test_results{test="subtract"} 1',
        'jest_test_results{test="multiply"} 1'
    ];
    
    console.log('Generating metrics...');
    // Save the metrics to a file
    fs.writeFileSync('./metrics.txt', metrics.join('\n'));
    console.log('Prometheus metrics generated at /metrics.txt');
}

// Call the function to generate the metrics file
module.exports = { generateMetrics };

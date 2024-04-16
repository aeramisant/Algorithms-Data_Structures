import readline from 'readline';
// import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const temperature = () => {
  rl.question('Enter the number of days: ', (days) => {
    const temperatures = [];
    let totalTemp = 0;
    let count = 0;

    const askTemperature = () => {
      rl.question(
        'Enter the temperature for day ' + (count + 1) + ': ',
        (temp) => {
          totalTemp += Number(temp);
          temperatures.push(Number(temp));
          count++;

          if (count < days) {
            askTemperature();
          } else {
            const averageTemp = totalTemp / days;
            console.log(`Average temperature: ${averageTemp}`);
            console.log(`TEMPERATURES ABOVE AVERAGE:`);
            temperatures.forEach((temp, i) => {
              if (temp > averageTemp) {
                console.log(`Day ${i + 1}: ${temp}`);
              }
            });
            rl.close();
          }
        }
      );
    };

    askTemperature();
  });
};

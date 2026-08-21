let temperature = 12

if (temperature < 10) {
  console.log("Very Cold");
} else if (temperature >= 10 && temperature <= 17) {
    console.log("Cold");
} else if (temperature > 17 && temperature <= 25) {
    console.log("Pleasant");
} else if (temperature >= 26 && temperature <= 32) {
    console.log("Hot");
} else if (temperature > 32) {
    console.log("Very Hot");
}
let age = 20
let driveLicense = true

if (age >= 18 && driveLicense) {
    console.log("You can drive")
} else if (age < 18 && driveLicense) {
    console.log("You cannot drive, because you are under 18")
} else if (age >= 18 && !driveLicense) {
    console.log("You cannot drive, because you don't have a driver's license")
}

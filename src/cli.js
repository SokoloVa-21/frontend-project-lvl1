import readLineSync from "readline-sync";

export const welcomeAndHello = () => {
	console.log("Welcome to the Brain Games!");
        const name = readLineSync.question("May I have your name? ");
        console.log('Hello, ' + name);
}	


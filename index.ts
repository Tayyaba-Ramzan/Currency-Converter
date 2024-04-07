#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";

const currency: any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    JPY: 43,
    SAR: 98.56

}
let converter = await inquirer.prompt(
    [

        {

            message: chalk.green("Enter From Currency:"),
            type: "list",
            name: "fromCurrency",
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "JPY", "SAR"]
        },
        {
            message: chalk.yellow("Enter To Currency:"),
            type: "list",
            name: "toCurrency",
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "JPY", "SAR"]
        },
        {
            message: chalk.cyan("Enter Your Amount:"),
            type: "number",
            name: "amount"
        }
    ]
)
let fromAmount = currency[converter.fromCurrency];
let toAmount = currency[converter.toCurrency];
let amount = converter.amount;
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(chalk.green(Math.floor(convertedAmount))); // Assignment

//                         XXXXXXXXXXXXXXXXXXXXXXXXX
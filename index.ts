#! usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer"

console.log(chalk.bold.rgb(204,204,204)('\n \t\t <<<<<<< =================================================  >>>>>>>\n'));
console.log(chalk.bold.rgb(204,204,204)(chalk.magenta.bold("\t\t Welcome To \ 'Code With Faheela'\ Adventure Game\n")));
console.log(chalk.bold.rgb(204,204,204)(' \t\t <<<<<<< =================================================== >>>>>>'));



class player{
    name:string
    fuel:number = 100
    constructor (name:string){
        this.name = name;
    }
     fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
     }
     fuelIncrease(){
        this.fuel = 100
     }
}
class opponent{
    name:string
    fuel:number = 100
    constructor (name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
     }
}

let player1 = await inquirer.prompt([
    {
     name:"name",
     type:"input",
     message:"Please Enter your Name:"

}
])
console.log(player1.name)
let opponent1 = await inquirer.prompt([
    {
      name:"select",
      type:"list",
      message:"Select your Opponent",
      choices:["Skeleton","Zombie","Assassin"]
}
])

let p1 = new player(player1.name);
let o1 = new opponent(opponent1.select);

do{
    if(opponent1.select == "Skeleton"){
        let ask = await inquirer.prompt([
            {
              name: "opt",
              type: "list",
              message: "Select your Opponent",
              choices: ["Attack","Drink portion","Run For Your Life.."]
        }
    ]);
    if(ask.opt == "Attack"){
       let num = Math.floor(Math.random() * 2)
      if(num > 0 ){
       p1.fuelDecrease()
       console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
       console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
       if( p1.fuel <= 0){
        console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time "));
        process.exit()
       }
      }
       if(num <= 0){
        o1.fuelDecrease()
       console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
       console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
       if( o1.fuel <= 0){
        console.log(chalk.red.bold.italic("You Win"));
        process.exit()
       }
       }
    
    }
    if(ask.opt == "Drink portion"){
       p1.fuelIncrease()
       console.log(chalk.bold.italic.green(`you Drink Health portion your fuel is ${p1.fuel}`));
       
    }
    if(ask.opt == "Run For Your Life.."){
        console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time "));
        process.exit()
    }
    }

    if(opponent1.select == "Zombie"){
        let ask = await inquirer.prompt([
            {
              name: "opt",
              type: "list",
              message: "Select your Opponent",
              choices: ["Attack","Drink portion","Run For Your Life.."]
        }
    ]);
    if(ask.opt == "Attack"){
       let num = Math.floor(Math.random() * 2)
      if(num > 0 ){
       p1.fuelDecrease()
       console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
       console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
       if( p1.fuel <= 0){
        console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time "));
        process.exit()
       }
      }
       if(num <= 0){
        o1.fuelDecrease()
       console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
       console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
       if( o1.fuel <= 0){
        console.log(chalk.red.bold.italic("You Win"));
        process.exit()
       }
       }
    
    }
    if(ask.opt == "Drink portion"){
       p1.fuelIncrease()
       console.log(chalk.bold.italic.green(`you Drink Health portion your fuel is ${p1.fuel}`));
       
    }
    if(ask.opt == "Run For Your Life.."){
        console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time "));
        process.exit()
    }
    }

    if(opponent1.select == "Assassin"){
        let ask = await inquirer.prompt([
            {
              name: "opt",
              type: "list",
              message: "Select your Opponent",
              choices: ["Attack","Drink portion","Run For Your Life.."]
        }
    ]);
    if(ask.opt == "Attack"){
       let num = Math.floor(Math.random() * 2)
      if(num > 0 ){
       p1.fuelDecrease()
       console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
       console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
       if( p1.fuel <= 0){
        console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time "));
        process.exit()
       }
      }
       if(num <= 0){
        o1.fuelDecrease()
       console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
       console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
       if( o1.fuel <= 0){
        console.log(chalk.red.bold.italic("You Win"));
        process.exit()
       }
       }
    
    }
    if(ask.opt == "Drink portion"){
       p1.fuelIncrease()
       console.log(chalk.bold.italic.green(`you Drink Health portion your fuel is ${p1.fuel}`));
       
    }
    if(ask.opt == "Run For Your Life.."){
        console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time "));
        process.exit()
    }
    }
}
while(true)

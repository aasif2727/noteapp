const fs= require('fs');
const helper = require('./helper/helper');
const yargs = require('yargs');
const chalk = require('chalk');

const command = yargs
.command('add','add a note',{
   title:{
       demand:true,
       describe:'add a title',
       alias:'t'
   },
   body:{
       demand:true,
       describe:'add a body',
       alias:'b'
   }
})
.command('update','update a note',{
    title:{
        demand:true,
        describe:'update a title',
        alias:'t'
    },
    body:{
        demand:true,
        describe:'update a body',
        alias:'b'
    }
})
.command('delete','delete',{
    title:{
        demand:true,
        describe:'add a title',
        alias:'t'
    }
})
.command('read','list all notes')
.command('get','list a single note',{
    title:{
        demand:true,
        describe:'add a title',
        alias:'t'
    }
})
.help()
.argv;

if(command._[0] === 'add'){
  let result = helper.addNote(command.title,command.body);
  if(result!= null){
      console.log(`${result} added ${chalk.green('succesfully')}`);
  }
  else{
    console.log(`${chalk.red('Error in adding')}`);
  }
}
else if(command._[0] === 'update'){
    let result = helper.updateNote(command.title,command.body);
    if(result!= null){
        console.log(`${result} updated ${chalk.green('succesfully')}`);
    }
    else{
      console.log(`${chalk.red('Error in updating')}`);
    }
}
else if(command._[0] === 'delete'){
    let result = helper.deleteNote(command.title);
    if(result!= null){
        console.log(`${result} deleted ${chalk.green('succesfully')}`);
    }
    else{
      console.log(`${chalk.red('Error in deleting')}`);
    }
}
else if(command._[0] === 'read'){
    let result = helper.readNote();
    console.log(`${chalk.yellow(JSON.stringify(result))}`);
}
else if(command._[0] === 'get'){
    let result = helper.getNote(command.title);
    console.log(`${chalk.yellow(JSON.stringify(result))}`);
}
else{
    console.log(`${chalk.red('Invalid parameter')}`);
}
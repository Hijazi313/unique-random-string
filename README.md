# unique-random-string
A module that returns unique alphanumeric strings.

## HOW TO INSTALL 
# npm install unique-random-string --save 

## HOW TO USE 
const random = require('unique-random-string');

```javascript
## METHOD

# RandomChar
This method takes an integer value as first argument which specifies the length of the returned string and an error first callback function  

console.log(random(10, (err, randomString)=>{
    if(err)
        { return err }
        
        else{
            return randomString
        }
    }))

//Returns b3n5l6kopz

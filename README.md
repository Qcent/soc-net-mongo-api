
# Social Network API Backend
 
 ![MIT](https://img.shields.io/badge/License-MIT-orange)  ![Node.js](https://img.shields.io/badge/Tech-Node.js-lightblue)  ![Express.js](https://img.shields.io/badge/Tech-Express.js-lightblue)  ![MondoBD](https://img.shields.io/badge/Tech-MondoBD-lightblue)  ![Mongoose](https://img.shields.io/badge/Tech-Mongoose-lightblue) 

## Description
A Social Network API fetching from a MongoDB backend, powered by Express.js. Create users and friend lists, share thoughts and react to others thoughts.  

## Table of Contents

* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Questions](#questions)
* [License](#license)

## Installation

This project requires that Node.js be installed on the target machine and that the user has write access to a MongoDB server.

1. Copy the repository files and then run npm install to install all required dependencies.
2.  On line 13 of the `server.js` file edit the uri string or set the `MONGODB_URI` environment variable as required to connect to your MongoDB server.
```
13|  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/soc_netDB', {
```
3. That's it your ready to run the server!

## Usage

Once the project has been installed and configured as outlined above, you can run the server by typing node server.js or npm start. API Requests can then be made to the routes as described in the ./routes/index.js . 

## Contributing

Any contributions are welcome. Just fork the project, test any code you add and request a merge! 

## Questions

[GitHub: Qcent](https://github.com/Qcent)  
dquinn8@cogeco.ca

   
## License

MIT License

Copyright (c) 2021 Dave Quinn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
                 

     
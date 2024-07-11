# JS Recap
--
# NodeJS

# NODEJS SETUP:

### NodeJS

* Download & instal from officialSite: https://nodejs.org
* Documents: https://nodejs.org/api

#### Check versions:
```sh
    $ node -v
    $ npm -v
```

### NPM
```sh

    $ npm -h # $ npm help
    $ npm list -h # $ npm help list

    $ npm init -y # create package.json
    $ npm list # $ npm ls
    
    $ npm install express --save # dependencies # package.json/scripts -> "start": "node index.js"
    $ npm i express
    
    $ npm i nodemon --save-dev # devDependencies # package.json/scripts -> "devStart": "nodemon index.js"
    # $ npm run devStart # yarn devStart
    # $ npm i nodemon --save-optional # optionalDependencies # package.json/scripts -> "optionalStart": "nodemon index.js"
    
    $ npm install # install all packages from package.json
    $ npm i --omit=dev # $ npm i --omit dev # install packages without devDependencies list.

    # GLOBAL
    $ npm --global list 
    $ npm -g list
    $ npm i -g nodemon
    $ nodemon -v
  // globalda silme komutu:  npm uninstall -g pkg
    # NPX
    $ npx create-react-app newfolder # Ctrl+C
```

### NodeShell
```sh
    $ node
    > console.log('Hello World')
    > let moduleName = require("module")
    > moduleName.builtinModules // Show included modules.
    > .exit

```

```
kurulumda her sefer mac icin sudo yazmadan kurtulmak icin

  $ sudo chmod -R 777 /usr/local/lib     

```

HOME BREW kurulu olmazsa bu komut
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

//mongo
mongodb+srv://yolotenmaral:l4VBkHdETsMbkHlr@cluster0.nmxzmol.mongodb.net/


localhost baglanmak icin brew
brew services start mongodb-community
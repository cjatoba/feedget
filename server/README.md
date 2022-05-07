# Initial configurations

```
mkdir server
cd server
npm init -y
npm i typescript @types/node ts-node-dev -D
```

In tsconfig.json:
  change "target": "es2016" for "target": "es2020"
  uncomment line "rootDir"
  change "rootDir": "./" for "rootDir": "./src"
  uncomment line "outDir"
  change "outDir": "./" for "outDir": "./dist"

```
mkdir src
mkdir server.ts
```

In package.json:
  Insert afer line "tests" below line:
    "dev": "ts-node-dev src/server.ts"

## Install express for routes:

```  
npm i express
npm i -D @types/express
```
## Install Prisma:
  
```
npm i prisma -D
npm i @prisma/client
npx prisma init
```  

Configure database in schema.prisma file and create migration and table with below command:
    
```
npx prisma migrate dev
```

*Note: Use dev for development environment and deploy for production environment
  Put name migration in terminal
  For access table run npx prisma studio command

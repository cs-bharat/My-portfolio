# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


// project deploy on github than step by step guide //

step number 1 :  npm install gh-pages --save-dev 
----------------------------------------------------------------------
step number 2 : package.json me =>> "homepage" : "https://github username.github.io/repository name" 
----------------------------------------------------------------------------------------------------
step number 3 : package.json me =>> scripts =>  "predeploy" : "npm run build" ,, "deploy" : "gh-pages -d build ya dist"
---------------------------------------------------------------------------------------------------------------
step number 4 : vite.config.js =>> base : "/repository name"
--------------------------------------------------------------------------------
stem number 5 : terminal ==> npm run deploy 
--------------------------------------------------------------------------------------------------------------------------

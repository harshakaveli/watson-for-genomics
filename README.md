# watson-for-genomics

This project provides the user interface (UI).
It is built with Angular CLI.

<div id="prereqs"/>

## Prerequisites

* __Node.js__

   Download the latest stable version of Node.js from: https://nodejs.org/en/  
   Install it using the default options.  

   Node.js includes npm (the Node.js package manager).  

   To verify the installation and check the installed versions of Node.js and npm, use the following commmands:  
       `node -v`  
       `npm -v`  
   ```

* __Angular CLI__

   After installing Node.js, you can use its npm utility to install Angular CLI.  
   As of release J.4.3, the PB360 REST UI projects are built using version 7 of Angular CLI.  
   The available versions are listed [here](https://www.npmjs.com/package/@angular/cli?activeTab=versions).  

   To install the latest released version, enter the following at a command prompt:  
       `npm install -g @angular/cli`  

   To install a specific version, you can append the desired version's tag name.  
   Example: `npm install -g @angular/cli@7.0.0-rc.3`  

   To verify the installation and check the installed version of Angular CLI, use the following commmand:  
       `ng --version`  



## Update configuration file

* __src\environments\environment.ts__  
   Update the URLs in this file, based on whether you will run the other PB360 applications locally or point to a remote server for them.
   If you only need to work on the UI layer code, you can configure all the URLs to point to one of our development environments.
   That way you can run and test the UI screens without installing and launching the other applications on your own machine.

   + `serverUrls`: The URLs listed in this section are for the PB360 REST API services.  
   + `menuApps`: The URLs listed in this section are for the PB360 REST UI applications.  
   +  Some URLs for the PB360 UX and REST UI applications are also listed between the above 2 sections.  
   + `enableForgeRock`: set this to true or false to control whether the ForgeRock login service is used.
        If it is set to false, you will need to append a User ID parameter like `?userId=SE30700` to the UI home page URL when opening it in your browser.


<div id="build1"/>

## Build the application

From a command prompt, navigate to the project's root folder and enter this command:  
    `npm install`

That will install the dependencies under the _"node_modules"_ subfolder.

Then build the application with this command:  
    `ng build`  

The build artifacts will be written to the _"dist"_ subfolder.



<div id="build2"/>

## Build and launch the application

The `ng serve` command is used to both build and launch the application.  
The application will automatically reload if you change any of the source files.  

When used without parameters, `ng serve` launches the UI application on the default port (4200), without SSL.  
You would then enter the following URL in your browser to open the UI application:  
    `http://localhost:4200/`  

To launch multiple UI applications at the same time, specify the port number for each using the `--port` parameter.  
Example:  
    `ng serve --port 4204`   -> `http://localhost:4204/`  
    `ng serve --port 4205`   -> `http://localhost:4205/`  


<div id="httpsConfigs"/>

## Configurations for HTTPS (optional)

To access the REST UI apps in your local environment using HTTPS instead of HTTP, you need a trusted SSL certificate.  

Angular requires different certificate files than the ones used by Gretty for the API services.
You can either obtain these files from another developer who already has them, or generate them yourself.  

To generate a certificate yourself:  
   * Clone or download the files from this repository to your machine:  
      https://github.com/RubenVermeulen/generate-trusted-ssl-certificate  
   * If desired, edit the __openssl-custom.cnf__ file to update the `[dn]` section as mentioned in the downloaded __README.md__ file.
     But keep the `CN` value set to `localhost`.  
   * Double-click the __generate.sh__ file.  This will generate 2 files into the same folder: __server.crt__ and __server.key__  

By default, Angular looks for the certificate files in the _"ssl"_ subfolder below the project's root folder.  
You can create the _"ssl"_ subfolder and place the 2 generated files there.  
Then you can launch the UI application with SSL enabled, with this simple command:  
       `ng serve --ssl true`  

If you work on several UI projects and don't want to copy the files to each project, you can instead place the files in some other folder.
In that case, you need to specify the folder path when launching the application:  
       `ng serve --ssl true --ssl-cert "[path to folder]/server.crt" --ssl-key "[path to folder]/server.key"`  

When you access the UI application in your browser the first time, it should show a warning due to the certificate being self-signed. 
From this warning page, you can add an exception to allow access to the site.  

* Firefox will show the message "Your connection is not secure"  
    Click **Advanced**  
    Click **Add Exception...**  
    Click **Confirm Security Exception**  

* Chrome will show the message "Your connection is not private"  
    Click **Advanced**  
    Click **Proceed to localhost (unsafe)**  

After adding the above exception, if you get a blank white screen when opening the UI home page, do the next steps.

The REST UI applications invoke the corresponding REST API services, and may invoke other API services too.
If you run those API services locally and invoke them with HTTPS (this is controlled by the __environment.ts__ URLs),
you'll need to add browser exceptions for them as well.  
The REST API __README.md__ files explain how to generate certificate files for the API services.  
To add browser exceptions for them, open the root URL for each API service in your browser and follow the same steps as above.  
Example URL:  http://localhost:7070/pb360-parties  

After adding the exceptions, it is normal to get 404 errors for the API root URLs, as they are not complete requests.
But when all necessary exceptions have been added, the UI home page should open ok.


<div id="upgradeAngular"/>

## Upgrade Angular CLI (optional)

To upgrade Angular CLI from an older version to the latest version, perform the following steps.  

Under the UI project's root folder:
   + Delete the old _"node_modules"_ subfolder.
   + Delete the old __package.json__ file

If you have several UI projects installed, do the above for each project.

Then open a command window and enter the following commands:
   + `npm cache clean --force`
   + `npm cache verify`
   + `npm install -g @angular/cli@latest`
   + `npm install`

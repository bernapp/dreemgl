# DreemGL IoT Guide

This document describes how to work with DreemGL's builtin IoT infrastructure.

## Setup Homestar

DreemGL leverages the [Homestar](https://github.com/dpjanes/iotdb-homestar) IOTDB and Open Source IoT Platform to 
implement a semantic metastandard across all IoT devices.  To get started first you'll need to install the Homestar 
bridge and pair it to your IoT devices.

### Install Node Modules

Be sure to run `npm install` in the IOT component directory:

    cd ./classes/iot
    npm install
    ./node_modules/homestar/bin/homestar setup

**Windows Notes**:

  -  You will need to specify homestar commands like this: `node ./node_modules/homestar/bin/homestar setup`

  - The symbolic link at the top of the dreemgl tree (called .iotdb) must be manually created. From the top of the repository, running as an Administrator:

    `erase .iotdb`
    
    `mklink /d .iotdb .\classes\iot\.iotdb`

### Pair to IOT devices

Dreemgl makes it easy to pair to many different kinds of IOT devices. We've tested pairing to Philips Hue and Samsung Smart Things hubs, but many more should work including https://github.com/dpjanes/homestar-samsung-smart-tv, https://github.com/dpjanes/homestar-wemo and more. See https://homestar.io/about/things for more details on pairing a specific device. 

#### Philips Hue

    ./node_modules/homestar/bin/homestar install homestar-hue
    ./node_modules/homestar/bin/homestar configure homestar-hue

Follow the prompts. 
Note that you may need to wait up to 30 seconds and/or unplug/replug the ethernet port on your Hue bridge followed by a browser refresh before the 'Pair' button appears. 
When finished, hit control-c until you've returned to the shell.

**Windows Notes**: 

  - Some dependencies can fail because of issues with `node-gyp`.
    
    - You will need to have .NET Framework 4.5.1 installed (Windows 7)
    
    - If you have multiple versions of Python installed, you can specify the version to use by:
    
    `npm config set python python2.7`
    
    - The Visual Studio C++ compiler is needed. If you have multiple versions installed you can specify the version by:
    
    `npm config set msvs_version 2015 --global`

#### Smart Things

    ./node_modules/homestar/bin/homestar install homestar-smartthings
    ./node_modules/homestar/bin/homestar configure homestar-smartthings

Follow the prompts which may be a lengthy process. 
When finished, hit control-c until you've returned to the shell.

## Running

You should be ready to roll. Start up your dreemgl server and try out some examples!

http://localhost:2000/examples/components/iot/ should show a listing of all connected IOT devices.
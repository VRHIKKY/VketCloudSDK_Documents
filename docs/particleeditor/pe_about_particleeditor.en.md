# Particle Editor Overview

![pe_particleeditor_overview](pe_image/pe_particleeditor_overview.gif)

The Particle Editor is a particle creation tool that generates HEP files, which is specifically made for Vket Cloud.
This tool offers exactly the same look as in actual Vket Cloud worlds, for the tool uses the the same rendering engine.

## Requirements
- Chrome (Safari and Firefox unsupported)  
- Python later than 3.10

!!! bug "Editor Malfunction on MacOS"
    Currently, we are recognizing an issue causing images being unchangeable when editing particles on the Particle Editor. <br>
    While the dev team has investigated the cause and solution, solving this issue requires to change the fundamental implementation of the editor. Therefore, this issue is planned to be solved on a longer timeline.<br>
    We are sorry for the inconveniences caused by this issue, and would like to ask for your patience.

## How to launch

To open the editor, select VketCloudSDK > Tools > ParticleEditor.

![pe_about_particleeditor_1](pe_image/pe_about_particleeditor_1.jpg)

The particle editor will open on the web browser.

![pe_about_particleeditor_2](pe_image/pe_about_particleeditor_2.jpg)

## How to launch (Outdated)

!!! note
    The instructions below are used to open the particle editor on previous SDK versions older than Ver5.4.

The Particle Editor is provided as a Web application. To run the editor on your local PC, you need to launch a Web server.  
Here we'll use python.  
1. Use terminal softwares such as Command Prompt and set the directory to `Tools\ParticleEditor`.  
2. input `python -m http.server` in your console to launch the Web server.  
3. Open `http://localhost:65535/` in your browser.  

## Save and load HEP file
HEO file is saved and loaded as a folder in its entirety, rather than a single file.  
As such, the following conditions must be met.

- The file name of the HEP must be the same as the folder name.  
- You need to create a separate folder for saving.  
- Only a single HEP file can be placed inside a folder: a single folder cannot contain multiple HEP files.

Before creating a particle, please create a new folder with the particle name to contain the particle.
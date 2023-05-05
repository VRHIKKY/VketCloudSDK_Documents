ParticleEditor is a particle creation tool that generates HEP files, which is specifically made for Vket Cloud.
The tool offers exactly the same look as in actual Vket Cloud worlds, for the tool uses the the same rendering engine.

### Requirements
- Chorome(Safari and Firefox are not supported)  
- Python later than 3.10

### How to launch
ParticleEditor is provided as Web application. To run the editor on your local PC, you need to launch a Web server.  
Here we'll use python.  
1. Use terminal softwares such as Command Prompt and set the directory to `Tools\ParticleEditor`.  
2. input `python -m http.server` in your console to launch the Web server.  
3. Open `http://localhost:8000/` in your browser.  

### Save and load HEP file
HEO file is saved and loaded as a folder in its entirety, rather than a single file.  
As such, the following conditions must be met.
- The file name of the HEP must be the same as the folder name.  
- You need to create a separate folder for saving.  
- Only a single HEP file can be placed inside a folder: a single folder cannot contain multiple HEP files.

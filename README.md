# fakeNewsDetector
This is a prototype of an fake news detector, including the UI of the Chrome extension and the code behind the machine learning model

The files inside the folder "extension"  contain code for the Chrome extension itself. To execute them it would be necessary to create a folder with the four files, go to chrome://extensions/ and "Load unpacked". Since the extension is a mockup, it isn´t yet connected with the ML model, so in "models.json" there is a temporary list of flagged words.

The file nontrivial.py contains the machine learning code prototype for the extension. To run it, it would be necessary to upload two datasets (one with  false, one with true news) to one´s Google Drive, so that the model can learn from then. For better clarity, I have added two pre-existing datasets in english into the repository. All of this can be found in the folder "model".

The files inside the folder "dashboard" serve as code for the mockup dashboard. To run them, one should put them in the same folder, install Flask if necessary, and run this from the folder´s terminal : python3 app.py.

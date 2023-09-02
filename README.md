# AKMS-Team
# VOICE BASED LANGUAGES TRANSLATORS AMONG FIVE SELECTED AFRICAN LANGUAGES. <br> 
## INTRODUCTION: <br> 
A voice based tool for translating languages. This tool could be used to translate five selected african languages(Hausa, Igbo, sesotho) with voice data. For an example, it can listen and, translate that voice data into the target language then, it speaks out as a voice output, similar to a human translator, who listens and then translate in a targeted language. <br> 

This is not efficient like human translator, it is using the google translate platform as backbone to perform the translation process.
## TECHNOLOGIES AND FRAMEWORKS: 
• Python 3.8 <br> 
• GTTs Module <br>
• SpeechRecognition Module <br> 
• PlaySound Module <br> 
• GoogleTrans Module <br>

## Why GTTS Module? <br>

gTTS (Google Text-to-Speech)is a Python library and CLI tool to interface with Google Translate text-to-speech API. We will import the gTTS library from the gtts module which can be used for speech translation.

Note: This module helps to convert text as voice output. <br>

## Why SpeechRecognition Module? <br>

This module gives the ability to perform speech recognition, basically, it could be used to convert speech to text operations. <br> 

## Why Playsound Module? <br>

playsound is a “pure Python, cross platform, single function module with no dependencies for playing sounds.” With this module, you can play a sound file with a single line of code: <br>
from playsound import playsound
playsound('myfile.wav')

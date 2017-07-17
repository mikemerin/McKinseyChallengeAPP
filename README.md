# README

This is a calendar application that:

- Takes as input an array of objects.
- Each object contains a start time and an end time for the event.
- When two events collide they appear next to each other, otherwise the calendar event blocks sit on top of each other.
- Try to replicate as much as possible the layout in the attached image.


To install the required Gems:

1. Type 'npm install' in your console

+ Note: if npm does not work on your machine, copy and paste the following into your terminal:

---
brew uninstall --force node
brew update
brew install nvm
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
nvm install 6
---

2. Type 'npm start' load up your server (after loading the API), then choose a port different than the normal localhost:3001

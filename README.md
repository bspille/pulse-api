# pulse

## file system
- script for initial file structure

mkdir models controllers public views app native &&
mkdir public/assets views/layouts app/components &&
mkdir public/assets/css public/assets/js public/assets/images app/components/children && touch views/index.handlebars &&
touch views/layouts/main.handlebars &&
touch public/test.html &&
touch public/assets/css/style.css &&
touch public/assets/js/myapp.js &&
touch controllers/controller.js &&
touch controllers/twilio.js &&
touch models/master.js &&  
touch app/app.jsx &&
touch app/components/main.jsx &&
touch app/components/children/parent.jsx &&
touch app/components/children/child.jsx &&
touch app/components/children/grandchild.jsx &&
touch server.js &&
touch webpack.config.js &&
echo native | tee .slugignore &&
npm init --yes &&
npm install react react-dom express express-handlebars mongoose axios geocoder twilio react-router-dom body-parser --save &&
npm install babel-core babel-loader babel-preset-env webpack --save-dev

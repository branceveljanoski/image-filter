# Image filter

Image filter is web application where you can upload and filter and resize your image with several different filters, then download filtered image.<br>
This application includes filters: <br>
- brightness: Adjusts the brightness of the image. 0% will make the image completely black. 100% is default and represents the original image.Values over 100% will provide brighter results.
- blur: Applies a blur effect to the image. You can enter the ammount of blur from 1 to 10. A larger value will create more blur.
- contrast: Adjusts the contrast of the image. 0% will make the image completely black.100% (1) is default and represents the original image.Values over 100% will provide results with less contrast.
- grayscale: Converts the image to grayscale. 0% (0) is default and represents the original image. 100% will make the image completely gray (used for black and white images).
- hue-rotate: Applies a hue rotation on the image. The value defines the number of degrees around the color circle the image samples will be adjusted. 0deg is default, and represents the original image. Maximum value is 360.
- invert: Inverts the samples in the image. 0% (0) is default and represents the original image.100% will make the image completely inverted.
- opacity: Sets the opacity level for the image. The opacity-level describes the transparency-level, where 0% is completely transparent.100% (1) is default and represents the original image (no transparency).
- saturate: Saturates the image. 0% (0) will make the image completely un-saturated.100% is default and represents the original image.Values over 100% provides super-saturated results.
- sepia: 	Converts the image to sepia. 0% (0) is default and represents the original image. 100% will make the image completely sepia.
Also you can resize your image or turn it back to original image.

### Technologies used for developing
- node.js version 4.3
- javascript
- html
- css

### Running the application

First you need to install node.js in order to start the application.You can download node.js on this web page. #[Node.js download page](https://nodejs.org/en/download/).
Then you need to install node_modules requred by this app by typing npm install and node_modules will install automatically.
Finally you can use this application by typing node app.js and open http://localhost:3000/ on your browser.

### Flow

User opens http://localhost:3000/ and web server in the background renders the index.html file where he can upload image to add filters on it. Server is running and waits for file to be uploaded. User uploads file and server reads that file add own name to it and store the file. Then it checks if the file is image and if the uploaded file is not image, server redirects user to the start page to upload file again. If the file uploaded is image , server redirects user to http://localhost:3000/filter and renders filter.html file where image uploaded image is shown and user can add filters on it.
User can enter numbers, which are the values for filtering options described at the beggining of document. When user enter number and click some of the filter buttons, in the background javascript function is called to add the selected filter on image. That function hides the original image from the filter.html page, create a canvas Image where original image is added, selected filter is added on that image and that image is shown on filter.html page. So the canvas has the filtered image which is not stored anywhere else but only is created in that canvas. When user clicks on "Download filtered image", the filtered image is downloaded from that canvas. Download begins and user get the filtered image.

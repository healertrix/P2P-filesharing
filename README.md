# File Upload Server

This is a simple express server that allows users to upload files and download them.

## Installation

To install the dependencies for this project, run the following command:

```bash
npm install
```
# Running the Server
To start the server, run the following command:

Copy code
```bash
npm start
```
or you can just click on the P2P bat file

This will start the server on port 3000. You can visit http://localhost:3000 in your web browser to access the file upload and download functionality.

# Features
- Users can upload files by visiting http://localhost:3000 and selecting a file from their computer. The file will be uploaded to the ./public/uploads folder.
- Users can download a list of file names in the ./public/uploads folder by visiting http://localhost:3000/files.
- Users can download a specific file from the ./public/uploads folder by visiting http://localhost:3000/download/:filename, where :filename is the name of the file they   want to download.
Configuration
You can modify the server by modifying the server.js file. For example, you can change the port that the server listens on, or modify the file storage location.

# Accessing the Application from Other Devices

By default, the application is only accessible from the device it is running on at http://localhost:3000. To access the application from other devices on the same network, you can use the device's local IP address instead of localhost.

To find the local IP address of the device running the application, you can run the following command:

Copy code
```bash
ipconfig
```

This will display the IP address of the device in the IPv4 Address field. You can use this address to access the application from other devices on the same network.

For example, if the device's IP address is 192.168.1.10, you can access the application from other devices by visiting http://192.168.1.10:3000.

Note that the application may not be accessible from outside the local network unless you have configured your router to forward traffic to the device running the application.

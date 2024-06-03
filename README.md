# Docker-Project-Hosting-Apache-webserver
# Dockerized Apache Login Page

This repository contains the necessary files to set up a Dockerized Apache web server that serves a simple login page styled with CSS and includes JavaScript for form validation.

## Features

- **Dockerized Environment**: Easily deploy an Apache web server using Docker.
- **HTML, CSS, and JavaScript**: Serve a login page with custom styling and form validation.
- **CentOS Base Image**: Uses CentOS 7 as the base image for compatibility and stability.

## Usage

Follow these steps to build and run the Docker container:

### Prerequisites

- Docker installed on your machine

### Steps

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/yourusername/dockerized-login-page.git
   cd dockerized-login-page
   ```

2. **Build the Docker Image**:

   ```sh
   docker build -t login-page-image .
   ```

3. **Run the Docker Container**:

   ```sh
   docker run -d -p 80:80 --name login-page-container login-page-image
   ```

4. **Access the Login Page**:

   Open a web browser and navigate to `http://localhost` to see the login page.

## File Structure

```
dockerized-login-page/
│
├── index.html       # The login HTML page
├── styles.css       # CSS file for styling the login page
├── script.js        # JavaScript file for form validation
└── Dockerfile       # Dockerfile to set up the Docker image
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to improve this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

You can customize this README further as needed. If you have any additional details you want to include or any specific instructions, feel free to add them to the README.

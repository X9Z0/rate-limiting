# Rate Limiting in Node.js Express Application

This project demonstrates the implementation of rate-limiting in a Node.js Express application. The project has two versions:

- **version-1**: Shows the backend without rate-limiting, vulnerable to brute-force attacks.
- **version-2**: Shows the backend with rate-limiting implemented to prevent brute-force attacks.


## Instructions

### Setting up Version 1

1. Navigate to the `backend` directory of `version-1`:
    ```sh
    cd version-1/backend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Compile the TypeScript code:
    ```sh
    tsc -b
    ```
4. Start the backend server:
    ```sh
    node dist/index.js
    ```

5. Generate OTP using Postman:
    - Make a POST request to `http://localhost:3000/generate-otp`
    - Body:
      ```json
      {
        "email": "youremail"
      }
      ```
    - The OTP will be generated and logged in the terminal.

6. Navigate to the `attack` directory of `version-1`:
    ```sh
    cd ../attack
    ```
7. Install the dependencies:
    ```sh
    npm install
    ```
8. Compile the TypeScript code:
    ```sh
    tsc -b
    ```
9. Start the attack script:
    ```sh
    node dist/index.js
    ```
    - This script will hit the `/resetPassword` endpoint with every OTP from `1000000` to `999999`.
    - The password will be reset through brute-force attack.

### Setting up Version 2

1. Navigate to the `backend` directory of `version-2`:
    ```sh
    cd version-2/backend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Compile the TypeScript code:
    ```sh
    tsc -b
    ```
4. Start the backend server:
    ```sh
    node dist/index.js
    ```

5. Generate OTP using Postman:
    - Make a POST request to `http://localhost:3000/generate-otp`
    - Body:
      ```json
      {
        "email": "youremail"
      }
      ```
    - The OTP will be generated and logged in the terminal.

6. Navigate to the `attack` directory of `version-2`:
    ```sh
    cd ../attack
    ```
7. Install the dependencies:
    ```sh
    npm install
    ```
8. Compile the TypeScript code:
    ```sh
    tsc -b
    ```
9. Start the attack script:
    ```sh
    node dist/index.js
    ```
    - This script will hit the `/resetPassword` endpoint with every OTP from `1000000` to `999999`.
    - The user will receive a log indicating that rate-limiting has limited the requests for some seconds or minutes.

## Conclusion

This project demonstrates how to implement and test rate-limiting in a Node.js Express application. The first version showcases the vulnerability to brute-force attacks, while the second version implements rate-limiting to prevent such attacks. This example highlights the importance of securing endpoints against high-frequency attacks and ensuring application robustness.


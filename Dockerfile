# Dockerfile for running Playwright tests with Allure and reporting support
FROM mcr.microsoft.com/playwright:v1.54.1-jammy
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .

# Run tests with Allure reporter and generate the report at the end
CMD npm run test:allure && npm run allure:generate

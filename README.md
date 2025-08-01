# Automatizare eMAG cu Playwright & TypeScript

## Structură proiect
- `pages/` - Page Object Models
- `tests/` - Teste automate
- `utils/` - Utilitare și date de test
- `.github/workflows/` - CI cu GitHub Actions
- `Dockerfile` - Rulare în container

## Comenzi utile
- `npm install` - Instalare dependențe
- `npx playwright test` - Rulează toate testele
- `docker build -t emag-tests .` - Build imagine Docker
- `docker run emag-tests` - Rulează testele în Docker

## Integrare CI
Testele se rulează automat la fiecare push/PR pe branch-ul `main` prin GitHub Actions.
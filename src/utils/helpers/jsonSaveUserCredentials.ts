import * as fs from 'fs';
import * as path from 'path';


 export function saveUserCredentials(credentials: { email: string; password: string }): void {
        const configDir = path.join(process.cwd(), 'config', 'testData');
        const filePath = path.join(configDir, 'registered-user.json');

        // Creează directorul dacă nu există
        if (!fs.existsSync(configDir)) {
            fs.mkdirSync(configDir, { recursive: true });
        }

        // Scrie datele în fișier
        fs.writeFileSync(filePath, JSON.stringify({ registeredUser: credentials }, null, 2));
    }
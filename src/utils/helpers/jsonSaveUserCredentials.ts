import * as fs from 'fs';
import * as path from 'path';
import { IAuthCredentials } from '../../types/interfaces/registration.interface';

/**
 * Saves user credentials to a JSON file.
 * @param credentials The user credentials to save.
 */
export function saveUserCredentials(credentials: IAuthCredentials): void {
    const configDir = path.join(process.cwd(), 'config', 'testData');
    const filePath = path.join(configDir, 'registered-user.json');

    // Create the directory if not exists
    if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir, { recursive: true });
    }

    // Write the data to the file
    fs.writeFileSync(filePath, JSON.stringify({ registeredUser: credentials }, null, 2));
}
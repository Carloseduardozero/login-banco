import { AuthService } from './auth.service';
export declare class AuthController {
    private AutheService;
    constructor(AutheService: AuthService);
    login(req: any): Promise<any>;
    token(req: any): Promise<{
        access_token: string;
    }>;
}

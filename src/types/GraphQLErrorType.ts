export interface GraphQLErrorType extends Error {
    response: {
        status: number;
        errors: Array<{
            message: string;
            extensions: {
                path: string;
                code: string;
            };
        }>;
    };
}
